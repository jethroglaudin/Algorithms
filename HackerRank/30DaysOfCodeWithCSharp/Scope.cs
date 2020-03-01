using System;
using System.Linq;

class Difference {
    private int[] elements;
    public int maximumDifference;

	// Add your code here
    public Difference(int[] elements)
    {
        this.elements = elements;
        this.maximumDifference = 0;
    }
    public int computeDifference()
    {
        Array.Sort(elements);
        this.maximumDifference = Math.Abs(elements.First() - elements.Last());
        return maximumDifference;
    }

} // End of Difference Class

class Solution {
    static void Main(string[] args) {
        Convert.ToInt32(Console.ReadLine());
        
        int[] a = Console.ReadLine().Split(' ').Select(x=>Convert.ToInt32(x)).ToArray();
        
        Difference d = new Difference(a);
        
        d.computeDifference();
        
        Console.Write(d.maximumDifference);
    }
}