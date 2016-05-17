using System;
class Solution
{
    static void Main(string[] args)
    {
        int N = int.Parse(Console.ReadLine());
        int[] horses = new int[N];
        int minDiff = -1;
        for (int i = 0; i < N; i++)
        {
            horses[i] = int.Parse(Console.ReadLine());
        }
        Array.Sort(horses);
        for (int i = 1; i < N; i++)
        {
            int thisDiff = Math.Abs(horses[i] - horses[i-1]);
            minDiff = (minDiff > -1) ? Math.Min(minDiff, thisDiff) : thisDiff;
        }
        Console.WriteLine(Convert.ToString(minDiff));
    }
}