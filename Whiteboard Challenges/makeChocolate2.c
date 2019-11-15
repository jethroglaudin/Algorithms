#include <stdio.h>

int main(void)
{
    int S = 7;
    int B = 2;
    int X = 7;

    int diff = X % 5;
    if (S % diff == 0)
    {
        printf("%i\n", diff);
    } 
    else 
    {
        printf("%i\n", -1);
    }
    return 0;
}