using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        int n = Convert.ToInt32(Console.ReadLine());
     
        for(var loop = 0; loop < n; loop++)
        {
            string str = Console.ReadLine();
            string evenIndex = "";
            string oddIndex = "";
            for(var i = 0; i < str.Length; i++) 
            {
                if(i % 2 == 0)
                {
                    evenIndex += str[i];
                }
                else 
                {
                    oddIndex += str[i];
                }        
            }
            Console.WriteLine($"{evenIndex} {oddIndex}");
        }

    }
}