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
        int[][] arr = new int[6][];
        var sum = 0;
        
        int max = -63;

        for (int i = 0; i < 6; i++) {
            arr[i] = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp));
        }
            for (int j = 0; j < 4; j++) // Column Loop
            {
                for (int k = 0; k < 4; k++)
                {
                    var hourGlassTop = arr[j][k] + arr[j][k+1] + arr[j][k+2];
                    var hourGlassMiddle = arr[j + 1][k + 1];
                    var hourGlassBottom = arr[j + 2][k] + arr[j + 2][k + 1] + arr[j + 2][k + 2];
                    sum = hourGlassTop + hourGlassMiddle + hourGlassBottom;
                    if(max < sum) max = sum;
                }
            }
            Console.WriteLine(max);
        
    }
}
