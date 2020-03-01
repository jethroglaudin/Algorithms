using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Solution {
    
    static void Main(string[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        var binary = Convert.ToString(n, 2);
        var max = 0;
        var consecutive = 0;
        
        for(int i = 0; i < binary.Length; i++){    
            if(binary[i] == '1'){
                consecutive++;
                if(consecutive > max){
                    max = consecutive;
                }
            }
            if(binary[i] == '0'){
                consecutive = 0;
            }     
        }
        Console.WriteLine(max);
       
    }
}
