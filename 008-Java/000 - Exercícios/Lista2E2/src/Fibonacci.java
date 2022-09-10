
public class Fibonacci {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int[] fibo = new int[15]; 
		
		fibo[0] = 1; 
		fibo[1] = 1; 
		for (int i = 2; i < fibo.length; i++) {
			fibo[i] = fibo[i - 1] + fibo[i - 2]; 
		}
		
		for (int i = 0; i < fibo.length; i++) {
			System.out.print("[" + fibo[i] + "] ");
		}

	}

}
