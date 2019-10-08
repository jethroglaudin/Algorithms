#include <stdio.h>
#include <math.h>
#include <string.h>
#include <stdlib.h>
int main(void)
{
    int height;
    do
    {
        printf("Height: ");
        scanf("%d", &height);
    } while (height < 1 || height > 8);

    printf("%d\n", height);

    for(int x = 0; x < height; x++)
    {
        for (int y = 0; y < height - x; y++)
        {
            printf(" ");       
        }
        for(int z = 0; z <= x; z ++)
            {
                printf("#");
            }
        printf("\n");
    }

    return 0;
}
