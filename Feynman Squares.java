/*
Richard Phillips Feynman was a well known American physicist and a recipient of the Nobel Prize in Physics.
He worked in theoretical physics and also pioneered the field of quantum computing.
He visited South America for ten months, giving lectures and enjoying life in the tropics.
He is also known for his books "Surely You're Joking, Mr. Feynman!" and "What Do You Care What Other People Think?",
which include some of his adventures below the equator.

His life-long addiction was solving and making puzzles, locks, and cyphers. 
Recently, an old farmer in South America, who was a host to the young physicist in 1949,
found some papers and notes that is believed to have belonged to Feynman.
Among notes about mesons and electromagnetism, there was a napkin where he wrote a simple puzzle:
  
  "how many different squares are there in a grid of N ×N squares?".

*/

import java.util.*;
import java.lang.*;
import java.io.*;

class Feynman
{
	public static void main (String[] args) throws java.lang.Exception
	{
	  // initialize new reader
		BufferedReader reader = new BufferedReader (new InputStreamReader (System.in));
		// reserve space for side
		String side;
		
		// while I'm getting sides
		while ((side=reader.readLine()) != null) {
		  // parse the number of squares per side
			int numberOfSquaresPerSide = Integer.parseInt(side);

      // reserve space for total
			int totalSquares = 0;
			
			// for each variation in square size
			for ( int i=1; i <= numberOfSquaresPerSide; i++ ) {
			  // increment the total by the square of the new side
				totalSquares += i * i;
			}
			// if the total is greater than 0, print the answer
			if (totalSquares > 0) System.out.println(squares);	
		} 
	}
}
