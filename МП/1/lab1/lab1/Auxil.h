//в файле Auxil.h Ц  прототипы функций 
#pragma once 
#include <cstdlib>
namespace auxil
{
	void   start();// старт  генератора сл. чисел
	double dget(double rmin, double rmax);// получить случайное действительное число 
	int    iget(int rmin, int rmax); // получить  случайное число
};
