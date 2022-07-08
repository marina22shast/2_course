// Main      
#include <iostream>
#include <iomanip> 
#include "Combi1.h"
#include "Combi2.h"
#include "Combi3.h"
#include "Combi4.h"
#include "Knapsack.h"
#include <tchar.h>
#include <time.h>
#define N (sizeof(AA)/2)
#define M 3
#define NN 18

int _tmain(int argc, _TCHAR* argv[])
{
    setlocale(LC_ALL, "rus");
   //1
    
    char  AA[][2] = { "A", "B", "C", "D" };
    std::cout << std::endl << " - Генератор множества всех подмножеств -";
    std::cout << std::endl << "Исходное множество: ";
    std::cout << "{ ";
    for (int i = 0; i < sizeof(AA) / 2; i++)
        std::cout << AA[i] << ((i < sizeof(AA) / 2 - 1) ? ", " : " ");
    std::cout << "}";
    std::cout << std::endl << "Генерация всех подмножеств  ";
    combi1::subset s1(sizeof(AA) / 2);     // создание генератора   
    int  n = s1.getfirst();                // первое (пустое) подмножество    
    while (n >= 0)                         // пока есть подмножества 
    {
        std::cout << std::endl << "{ ";
        for (int i = 0; i < n; i++)
            std::cout << AA[s1.ntx(i)] << ((i < n - 1) ? ", " : " ");
        std::cout << "}";
        n = s1.getnext();                  // cледующее подмножество 
    };
    std::cout << std::endl << "всего: " << s1.count() << std::endl;  
    
    //2
    /*
    char  AA[][2] = { "A", "B", "C", "D", "E" };
    std::cout << std::endl << " --- Генератор сочетаний ---";
    std::cout << std::endl << "Исходное множество: ";
    std::cout << "{ ";
    for (int i = 0; i < sizeof(AA) / 2; i++)
        std::cout << AA[i] << ((i < sizeof(AA) / 2 - 1) ? ", " : " ");
    std::cout << "}";
    std::cout << std::endl << "Генерация сочетаний ";
    combi2::xcombination xc(sizeof(AA) / 2, 3);
    std::cout << "из " << xc.n << " по " << xc.m;
    int  n = xc.getfirst();
    while (n >= 0)
    {
        std::cout << std::endl << xc.nc << ": { ";
        for (int i = 0; i < n; i++)
            std::cout << AA[xc.ntx(i)] << ((i < n - 1) ? ", " : " ");
        std::cout << "}";
        n = xc.getnext();
    };
    std::cout << std::endl << "всего: " << xc.count() << std::endl;
    */
   //3
/*
    char  AA[][2] = { "A", "B", "C", "D" };
    std::cout << std::endl << " --- Генератор перестановок ---";
    std::cout << std::endl << "Исходное множество: ";
    std::cout << "{ ";
    for (int i = 0; i < sizeof(AA) / 2; i++)
        std::cout << AA[i] << ((i < sizeof(AA) / 2 - 1) ? ", " : " ");
    std::cout << "}";
    std::cout << std::endl << "Генерация перестановок ";
    combi3::permutation p(sizeof(AA) / 2);
    __int64  n = p.getfirst();
    while (n >= 0)
    {
        std::cout << std::endl << std::setw(4) << p.np << ": { ";
        for (int i = 0; i < p.n; i++)
            std::cout << AA[p.ntx(i)] << ((i < p.n - 1) ? ", " : " ");
        std::cout << "}";
        n = p.getnext();
    };
    std::cout << std::endl << "всего: " << p.count() << std::endl;
    */
    //4
    /*
    char  AA[][2] = { "A", "B", "C", "D" };
    std::cout << std::endl << " --- Генератор размещений ---";
    std::cout << std::endl << "Исходное множество: ";
    std::cout << "{ ";
    for (int i = 0; i < N; i++)
        std::cout << AA[i] << ((i < N - 1) ? ", " : " ");
    std::cout << "}";
    std::cout << std::endl << "Генерация размещений  из  " << N << " по " << M;
    combi4::accomodation s(N, M);
    int  n = s.getfirst();
    while (n >= 0) {
        std::cout << std::endl << std::setw(2) << s.na << ": { ";
        for (int i = 0; i < 3; i++)
            std::cout << AA[s.ntx(i)] << ((i < n - 1) ? ", " : " ");
        std::cout << "}";
        n = s.getnext();
    };
    std::cout << std::endl << "всего: " << s.count() << std::endl;
    */
    /*
    int V = 300,   // вместимость рюкзака              
        v[NN] = { 25, 30, 60, 20, 80, 70, 35, 100, 120, 40, 140, 180, 200, 210, 230, 265, 290, 300 },     // размер предмета каждого типа
        c[NN] = { 5, 10, 20, 15, 20, 13, 17, 25, 30, 23, 33, 50, 26, 12, 55, 54, 28, 31 };     // стоимость предмета каждого типа 
    short m[NN];   // количество предметов каждого типа  {0,1}   
    int maxcc = knapsack_s(
        V,   // [in]  вместимость рюкзака 
        NN,  // [in]  количество типов предметов 
        v,   // [in]  размер предмета каждого типа  
        c,   // [in]  стоимость предмета каждого типа     
        m    // [out] количество предметов каждого типа  
    );
    clock_t t1, t2;
    std::cout << std::endl << "-------- Задача о рюкзаке ---------";
    std::cout << std::endl << "- количество предметов : " << NN;
    std::cout << std::endl << "- вместимость рюкзака  : " << V;
    std::cout << std::endl << "- размеры предметов    : ";
    for (int i = 0; i < NN; i++) std::cout << v[i] << " ";
    std::cout << std::endl << "- стоимости предмета   : ";
    for (int i = 0; i < NN; i++) std::cout << c[i] << " ";
    std::cout << std::endl << "- стоимости предметов  : ";
    for (int i = 0; i < NN; i++) std::cout << v[i] * c[i] << " ";
    std::cout << std::endl << "- оптимальная стоимость рюкзака: " << maxcc;
    std::cout << std::endl << "- вес рюкзака: ";
    int s = 0; for (int i = 0; i < NN; i++) s += m[i] * v[i];
    std::cout << s;
    std::cout << std::endl << "- выбраны предметы: ";
    for (int i = 0; i < NN; i++) std::cout << " " << m[i];

    std::cout << std::endl << "-- количество ------ продолжительность -- ";
    std::cout << std::endl << "    предметов          вычисления  ";
    for (int i = 12; i <= NN; i++)
    {
        t1 = clock();
        maxcc = knapsack_s(V, i, v, c, m);
        t2 = clock();
        std::cout << std::endl << "       " << std::setw(2) << i
            << "               " << std::setw(5) << (t2 - t1);
    }
    std::cout << std::endl << std::endl;

    system("pause");
    return 0;
    */
}
