using System;
namespace String_Calculator
{
    public class calculate
    {
        public int Calculate(string ex)
        {

            char[] seperate = { ' ' };
            var arr = ex.Split(seperate);

            var num1 = Int32.Parse(arr[0]);
            var num2 = Int32.Parse(arr[2]);
            var operation = arr[1];
            var result = 0;

            switch (operation)
            {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
                case "*":
                case "X":
                case "x":
                    result = num1 * num2;
                    break;
                case "%":
                    result = num1 % num2;
                    break;
   
            }
            return result;

        }
    }
}
