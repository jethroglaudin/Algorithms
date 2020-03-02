using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static void Main(String[] args) {
        string S = Console.ReadLine();
        // int result;
        // var isNumber = int.TryParse(S, out result);

        try
        {
            Console.WriteLine(int.Parse(S));
        }
        catch(Exception)
        {
            Console.WriteLine("Bad String");
        }
        
        
    }
}