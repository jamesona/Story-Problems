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

/* Name of the coinlass has to be "Main" only if the coinlass is public. */
class Ideone
{
	public static void main (String[] args) throws java.lang.Exception
	{
		// initialize a buffer
		BufferedReader reader = new BufferedReader (new InputStreamReader (System.in));
		// initialize storage for a line of text
		String line;

		// while I'm getting input lines, iterate over them
		while ((line=reader.readLine()) != null) {
			// get the integer value of the line, and save it as a coin
			int coin = Integer.parseInt(line);
			// optimize the coin, and print the new total
			System.out.println(optimize(coin));
		}
	}

	// optimize a coin
	public static int optimize(int coin) {
		// if it's not at least 12, return immediately
		if (coin < 12) return coin;

		// otherwise exchange it
		int[] newCoins = exchange(coin);

		// for each new coin
		for ( int i=0; i < newCoins.length; i++ ){
			// label this coin
			int thisCoin = newCoins[i];
			// if this coin is at least 12
			if (thisCoin >= 12) {
			// optimize it
				thisCoin = optimize(thisCoin);
			} 
			// now check if this coin is better than what we had
			// if it is, use it
			newCoins[i] = Math.max(newCoins[i], thisCoin); 
		}
		// get the total value of the exchanged coins
		int total = sum(newCoins);
		// return the highest possible value
		return Math.max(total, coin); 
	}

	// exchange a coin
	public static int[] exchange(int coin) {
		int[] newCoins = new int[3];
		newCoins[0] = coin / 2;
		newCoins[1] = coin / 3;
		newCoins[2] = coin / 4;
		return newCoins;
	}

	// get the total value of an array
	public static int sum(int[] a) {
		int sum = 0;
		for (int i : a) {
			sum += i;
		}
		return sum;
	}
}
