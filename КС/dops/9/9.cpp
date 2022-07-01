#include <iostream>
using namespace std;
#include <winsock2.h>
#include <iphlpapi.h> 
#include <stdio.h>
#include <conio.h>
#include <Ws2tcpip.h>
#include <vector>
#include <bitset>
#include <string>
#pragma comment(lib , "iphlpapi.lib") 
#pragma comment(lib , "ws2_32.lib") 

void GetMacAddress(unsigned char*, struct in_addr);

bool CheckAddress(string ip) {
    int points = 0, numbers = 0;
    string buff;
    for (int i = 0; i < ip.length(); i++) {
        if (ip[i] <= '9' && ip[i] >= '0') {
            if (numbers > 3) return false;
            buff.push_back(ip[i]);
            numbers++;
        }
        else {
            if (ip[i] == '.') {
                if (stoi(buff) > 255) return false;
                if (numbers == 0) return false;

                points++;
                buff.clear();
                numbers = 0;
                if (ip[i + 1] == '.') return false;
            }
            else return false;
        }

        if (numbers > 3) return false;
        if (points > 3) return false;

    }
    return true;
}


int main()
{
    setlocale(LC_ALL, "RUS");
    unsigned char mac[6];
    struct in_addr srcip = { 0 };
    struct sockaddr_in sa;
    char ip_address[32];
    bool flag = true;
    WSADATA firstsock;
    if (WSAStartup(MAKEWORD(2, 2), &firstsock) != 0)
    {
        cout << "Ошибка инициализации winsock";
        
            cout << WSAGetLastError();
        return -1;
    }

    do
    {
        if (!flag) cout << "Wrong address" << endl;
        cout << "Enter IP: ";
        cin >> ip_address;
    } while (!(flag = CheckAddress(ip_address)));
    
    
    //преобразование IP адреса другим способом
    //srcip.s_addr = inet_addr(ip_address);
    
    inet_pton(AF_INET, ip_address, &(sa.sin_addr));
    //Получение MAC по IP
    GetMacAddress(mac, sa.sin_addr);
    //GetMacAddress(mac, srcip);
    printf("MAC адрес : %.2X-%.2X-%.2X-%.2X-%.2X-%.2X",
        mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);
    printf("\n");
    //_getch();
    return 0;
}
void GetMacAddress(unsigned char* mac, struct in_addr
    destip)
{
    DWORD ret;
    IPAddr srcip;
    ULONG MacAddr[2];
    ULONG PhyAddrLen = 6;
    int i;
    srcip = 0;
    //Послать ARP пакет
    ret = SendARP((IPAddr)destip.S_un.S_addr,
        srcip, MacAddr, &PhyAddrLen);
    //Преобразовать адрес
    if (PhyAddrLen)
    {
        BYTE* bMacAddr = (BYTE*)&MacAddr;
        for (i = 0; i < (int)PhyAddrLen; i++)
        {
            mac[i] = (char)bMacAddr[i];
        }
    }


}


