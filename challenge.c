#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>
#include <ctype.h>

int main(void)
{
    /* Given a year and month determine the number of years (two decimal accuracy) between
    the given time and now */

    int temp1, currentMonth, currentYear, userYear, yearDifference, futureYearDifference;
    float temp2, userMonth, monthDifference, futureMonthDifference, total, futureTotal;

    //time_t is an arithmitic type for representing time
    time_t now;

    time(&now);
    struct tm *current = localtime(&now); // use the address of now to fill the structure with values representing local time
    currentMonth = current->tm_mon + 1; // month from (0 to 11) + 1 so that currentMonth would be from 1 - 12
    currentYear = current->tm_year + 1900; // years from 1900 than add 1900 to get currentYear
    
    printf("Enter Year xxxx format: \n");
    scanf("%d", &temp1);

    printf("Enter Month xx format: \n");
    scanf("%f", &temp2);

    userYear = temp1; 
    userMonth = temp2;

    if (userYear > currentYear)
    {
        futureYearDifference = userYear - currentYear;
        futureMonthDifference = fabs((userMonth - currentMonth) / 12);
        futureTotal = futureYearDifference + futureMonthDifference;
        printf("%.2f years ahead.\n", futureTotal);
    }

    else
    {
        yearDifference = currentYear - userYear;
        monthDifference = fabs((currentMonth - userMonth) / 12);
        total = yearDifference + monthDifference;
        printf("%.2f year difference.\n", total);
    }

    
   




    
    
    // int currentYear;
    // printf()

    return 0;

}