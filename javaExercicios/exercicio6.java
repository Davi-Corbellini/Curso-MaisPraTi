//Crie um jogo em que o programa escolhe um número entre 1 e 50, e o/a usuário/a
//deve adivinhar. O programa informa apenas se o palpite está certo ou
//errado. O jogo termina quando o número é adivinhado. 

import java.util.Scanner;
import java.util.Random;

public class exercicio6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        int numeroEscolhido = random.nextInt(50) + 1;

        System.out.println("Bem-vindo ao jogo de adivinhação!");
        System.out.println("Tente adivinhar o número que estou pensando (entre 1 e 50).");

        int palpite;
        boolean acertou = false;

        while (!acertou) {
            System.out.print("Digite seu palpite: ");
            palpite = scanner.nextInt();

            if (palpite == numeroEscolhido) {
                System.out.println("Parabéns! Você acertou o número.");
                acertou = true;
            } else {
                System.out.println("Errado! Tente novamente.");
            }
        }

        scanner.close();
    }
}

