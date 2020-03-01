using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        Dictionary<string, string> phoneBook = new Dictionary<string, string>();
        var num = Convert.ToInt32(Console.ReadLine());
        // Console.WriteLine(num);

        // loop through our dict called phoneBook
        for(var i = 0; i < num; i++)
        {
            var data = Console.ReadLine().Split(' ');
            phoneBook.Add(data[0], data[1]);
        }

        String name;
        while(true)
        {
            name = Console.ReadLine();
            if (name != null)
            {
                try
                {
                    Console.WriteLine($"{name}={phoneBook[name]}");
                }
                catch
                {
                    Console.WriteLine("Not found");
                }
            } 
            else 
            {
                break;
            }         
        }     
    }
}
