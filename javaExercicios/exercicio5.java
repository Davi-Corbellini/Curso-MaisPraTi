// Escreva um programa que receba duas palavras e determine se elas são anagramas (se possuem
// as mesmas letras, mas em ordem diferente). Exemplo: "amor" e "roma".

import java.util.Scanner;
import java.util.Arrays;

public class exercicio5 {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String palavra1;
        String palavra2;

        System.out.print("Digite uma palavra (1): ");
        palavra1 = scanner.next();

        System.out.print("Digite uma palavra (2): ");
        palavra2 = scanner.next();

        scanner.close();

       if (isAnagram(palavra1, palavra2)) {
        System.out.println("Sao anagramas");
        
       }
       else {
        System.out.println("Nao sao anagramas");

    }
    }

    public static boolean isAnagram(String word1, String word2){

         
         if (word1.length() != word2.length()) {
            return false;
        }

        char[] array1 = word1.toCharArray();
        char[] array2 = word2.toCharArray();

        Arrays.sort(array1);
        Arrays.sort(array2);

        return Arrays.equals(array1, array2);
  }
}
