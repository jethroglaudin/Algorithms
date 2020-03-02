using System;
using System.Linq;

class Person{
	protected string firstName;
	protected string lastName;
	protected int id;
	
	public Person(){}
	public Person(string firstName, string lastName, int identification){
			this.firstName = firstName;
			this.lastName = lastName;
			this.id = identification;
	}
	public void printPerson(){
		Console.WriteLine("Name: " + lastName + ", " + firstName + "\nID: " + id); 
	}
}

class Student : Person{
    private int[] testScores;  
    
  
    /*	
    *   Class Constructor
    *   
    *   Parameters: 
    *   firstName - A string denoting the Person's first name.
    *   lastName - A string denoting the Person's last name.
    *   id - An integer denoting the Person's ID number.
    *   scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    public Student(string firstName, string lastName, int id, int []testScores) : base(firstName, lastName, id)
    {
        this.testScores = testScores;
    }

    public char Calculate()
    {
        int average = 0;
        int scores = 0;
        int sum = 0;
        char grade = new Char();

        for (int i = 0; i < testScores.Length; i++)
        {
            average += testScores[i];
            scores++;
            sum = average/scores;
        }
        
        if(sum >= 90)
        {
            grade = 'O';
        }
        else if(sum >= 80)
        {
            grade = 'E';
        }
        else if(sum >= 70)
        {
            grade = 'A';
        }
        else if(sum >= 55)
        {
            grade = 'P';
        }
        else if (sum >= 40)
        {
            grade = 'D';
        }
        else
        {
            grade = 'T';
        }
       return grade;
    }
    /*	
    *   Method Name: Calculate
    *   Return: A character denoting the grade.
    */
    // Write your method here
}

class Solution {
	static void Main() {
		string[] inputs = Console.ReadLine().Split();
		string firstName = inputs[0];
	  	string lastName = inputs[1];
		int id = Convert.ToInt32(inputs[2]);
		int numScores = Convert.ToInt32(Console.ReadLine());
		inputs = Console.ReadLine().Split();
	  	int[] scores = new int[numScores];
		for(int i = 0; i < numScores; i++){
			scores[i]= Convert.ToInt32(inputs[i]);
		} 
	  	
		Student s = new Student(firstName, lastName, id, scores);
		s.printPerson();
		Console.WriteLine("Grade: " + s.Calculate() + "\n");
	}
}