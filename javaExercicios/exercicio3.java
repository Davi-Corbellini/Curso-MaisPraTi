//Implemente um programa que calcule e exiba os primeiros n números da sequência de Fibonacci. n deve ser fornecido pelo/a usuário/a.

import java.util.Scanner;

public class exercicio3 {
    
    public static void main(String[] args) {
       
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor de n (quantos números da sequência de Fibonacci você quer ver): ");
        int n = scanner.nextInt();

        printFibonacci(n);

        scanner.close();
    }

    
    public static void printFibonacci(int n) {

        if (n <= 0) {
            System.out.println("O número deve ser maior que 0.");
            return;
        }

        long a = 0, b = 1;

        System.out.println("Sequência de Fibonacci até o " + n + "º número:");

        for (int i = 1; i <= n; i++) {
            System.out.print(a + " ");
            long temp = a;
            a = b;
            b = temp + b; 
        }

        System.out.println();
    }
}
