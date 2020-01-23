using System;


namespace String_Calculator
{
    class MainClass
    {
        public static void Main(string[] args)

        {
            Calculate calc = new Calculate();
            var result = calc.calculate("15 + 5");
            Console.WriteLine(result);
        }
    }
}
