#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
int main(void)
{
    /*
    Given a starting Hour and a number of hours passed display the following
    ex. The time is now x:00 and y days have passed

    constrainsts  
    starting hour 1 <= x <= 12 
    time pased 1<= y<= int_max
    example if x which is the staring point 3
    y the number we increment x the time by. time is now 8:00
    days would be 0
    */
   unsigned int *temp;
   
   char temp2[1];
   bool condition = true;

   
   
   printf("What time is it currently: ");
   scanf("%d", temp);
   
   unsigned int current = *(int*)temp;
   
   
  
  
    

   
   printf("%d\n", current);


   printf("How many hours have passed: ");
   scanf("%s", temp2);
   int passed = atoi(temp2);

   int timeNow = (current + passed);
   printf("%d\n", timeNow);
   int days = 0;
   int convertedTime;
   days = timeNow / 24;

   if(timeNow >= 13)
   {
       convertedTime = timeNow % 12;
   }
   else
   {
       convertedTime = timeNow;
   }

    printf("The time now is %d:00 and %d days have passed\n", convertedTime, days);


   

    return 0;
}