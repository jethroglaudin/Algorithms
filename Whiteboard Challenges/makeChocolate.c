#include <stdio.h>

int Func(int S, int B, int X);
int main(void)
{
    int smallBars = Func(7, 2, 7);
    printf("%i\n", smallBars);   
    return 0;
}

int Func(int S, int B, int X)
{
    int kilos = 0;
    int bigBars = B;
    int smallBars = S;
    int bigBarWeight = 5;
    int smallBarCount = 0;
    int goal = X;

    kilos = goal % bigBarWeight;
    if(smallBars % kilos == 0)
    {
        smallBarCount = kilos;
    }
    else 
    {
        smallBarCount = -1;
    }

    return smallBarCount;
}