/*
In Byteland they have a very strange monetary system.
Each Bytelandian gold coin has an integer number written on it.
A coin n can be exchanged in a bank into three coins: n/2, n/3 and n/4. 
But these numbers are all rounded down (the banks have to make a profit).

You can also sell Bytelandian coins for American dollars.
The exchange rate is 1:1, but you can not buy Bytelandian coins.

You have one bytelandian coin.
What is the maximum amount of American dollars you can get for it?
*/

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Ideone
{
	// instantiate the solution map
	public static Map<Integer, Integer> solutions = new HashMap<Integer, Integer>();
	
	public static void main (String[] args) throws java.lang.Exception
	{
		// initialize a buffer
		BufferedReader reader = new BufferedReader (new InputStreamReader (System.in));
		// initialize storage for a line of text
		String line;

		
		int coin;
		// while I'm getting input lines, iterate over them
		while ((line=reader.readLine()) != null) {
			// get the integer value of the line, and save it as a coin
			coin = Integer.parseInt(line);

			// optimize the coin, and print the new total
			System.out.println(optimize(coin));
		}
	}

	// optimize a coin
	public static int optimize(int coin) {
		// if it's not at least 12, return immediately
		if (coin < 12) return coin;

		// check if we already know this value, if we don't,
		if (!solutions.containsKey(coin)) {
			int total = 0;
			// break it, and optimize the new coins
			for ( int i=0; i < 3; i++ ){
				total += optimize(coin / (i + 2)); 
			}
			solutions.put(coin, Math.max(total, coin));
		}

		// return the solution for coin
		return solutions.get(coin);
	}
}