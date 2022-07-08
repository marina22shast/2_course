#include "Auxil.h" //установка начального числа для генератора псевдослучайных  чисел 
#include <ctime>                          
#include <iostream>//пользовательских функций для замера продолжительности процесса вычисления.
#include <ctime>
#include <locale>

#define  CYCLE  120000 // количество циклов

namespace auxil
{
    //1
    void start()// старт  генератора сл. чисел                          
    {
        srand((unsigned)time(NULL));
    };
    double dget(double rmin, double rmax)// получить случайное действительное число
    {
        return ((double)rand() / (double)RAND_MAX) * (rmax - rmin) + rmin;
    };
    int iget(int rmin, int rmax) // получить случайное целое число 
    {
        return (int)dget((double)rmin, (double)rmax);
    };
}
//2 2.	Для проверки  работоспособности разработанных функций и приобретения навыков замера продолжительности процесса                      
int main()
{
    double  av1 = 0, av2 = 0;
    clock_t  t1 = 0, t2 = 0;
    setlocale(LC_ALL, "rus");
    auxil::start();// старт генерации                           
    t1 = clock();// фиксация времени                             
    for (int i = 0; i < CYCLE; i++)
    {
        av1 += (double)auxil::iget(-10, 10);// сумма случайных чисел 
        av2 += auxil::dget(-10, 10); // сумма случайных чисел 
    }
    t2 = clock();// фиксация времени 
    std::cout << std::endl << "количество циклов:" << CYCLE;
    std::cout << std::endl << "среднее значение (int):" << av1 / CYCLE;
    std::cout << std::endl << "среднее значение (double):" << av2 / CYCLE;
    std::cout << std::endl << "продолжительность (у.е):" << (t2 - t1);
    std::cout << std::endl << "(сек):"
        << ((double)(t2 - t1)) / ((double)CLOCKS_PER_SEC);
    std::cout << std::endl;
    system("pause");
    return 0;
}

