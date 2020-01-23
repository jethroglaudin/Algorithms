using System;


namespace String_Calculator
{
    class MainClass
    {
        public static void Main(string[] args)

        {
            var calc = new calculate();
            calc.Calculate("5 % 7");
            Console.WriteLine(calc);
        }
    }
}
