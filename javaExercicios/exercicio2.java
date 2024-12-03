//Crie um programa que leia uma palavra e verifique se ela é um palíndromo
//(se pode ser lida da mesma forma de trás para frente). Ignore
//diferenças entre maiúsculas e minúsculas

import java.util.Scanner;

public class exercicio2 {
    
public static void main(String[] args) {
    
  Scanner scanner = new Scanner(System.in);

String palavra;

System.out.print("Digite uma palavra: ");
palavra = scanner.next();

scanner.close();

if (isPalindrome(palavra)){

    System.out.println("Eh um palindromo");

}  else {

    System.out.println("Nao eh um palindromo");

}    

}

public static boolean isPalindrome(String word){

     StringBuilder sb = new StringBuilder();

     for (int i = word.length() - 1; i >= 0; i--) {
         sb.append(word.charAt(i));
     }
 
     String palavraReversa = sb.toString();
 
     return word.equalsIgnoreCase(palavraReversa);

}

}
