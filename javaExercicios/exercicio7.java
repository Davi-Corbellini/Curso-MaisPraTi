//Escreva um programa que leia uma frase e conte o número de palavras nela. Considere que as
//palavras estão separadas por espaços em branco.

import java.util.Scanner;

public class exercicio7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite uma frase: ");
        String frase = scanner.nextLine();

        String[] palavras = frase.trim().split("\\s+");

        int numeroDePalavras = palavras.length;

        System.out.println("Número de palavras na frase: " + numeroDePalavras);

        scanner.close();
    }
}

