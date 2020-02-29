using System;
using System.Collections.Generic;
using System.IO;

class Solution {
    static void Main(String[] args) {
        int i = 4;
        double d = 4.0;
        string s = "HackerRank ";

        
        // Declare second integer, double, and String variables.
        int num;
        double double2;
        string string2;
        
        // Read and save an integer, double, and String to your variables.
        num = int.Parse(Console.ReadLine());
        double2 = double.Parse(Console.ReadLine());
        string2 = Console.ReadLine();
        
        // Print the sum of both integer variables on a new line.
        Console.WriteLine(num + i);
        
        // Print the sum of the double variables on a new line.
        Console.WriteLine("{0:0.0}",d + double2);
        
        // Concatenate and print the String variables on a new line
        // The 's' variable above should be printed first.

        Console.WriteLine(s + string2);
    }
}