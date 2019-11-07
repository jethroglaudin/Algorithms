#include <stdio.h>
#include <stdbool.h>


int main (void)
{
    int yearInput;
    bool isLeapYear;

    printf("Enter a year: \n");
    scanf("%i", &yearInput);
    // printf("%i\n", yearInput);
    
    if(yearInput % 4 == 0 || yearInput % 4000 == 0)
    {
        isLeapYear = true;
        printf("%s\n", "true");      
    }
     else if (yearInput % 1000 == 0)
    {
        isLeapYear = false;
        printf("%s\n", "false");         
    } else 
    {
        isLeapYear = false;
        printf("%s\n", "false");     
    }

    return isLeapYear;

}