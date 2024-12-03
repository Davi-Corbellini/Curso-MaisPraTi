//Escreva um programa que peça dois números e um operador (+, -, *, /). Realize a operação indicada e exiba o resultado.

import java.util.Scanner;

public class exercicio1 {

   
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        double n1;
        double n2;
        String operator;
    
        System.out.print("Digite o número 1: ");
        n1 = scanner.nextDouble();
        
        System.out.print("Digite o número 2: ");
        n2 = scanner.nextDouble();
        
        System.out.print("Digite o operador: ");
        operator = scanner.next();

        scanner.close();

        double result = calculateNumbers(n1, n2, operator);
        System.out.println("Resultado: " + result);
        

        
    }

public static double calculateNumbers(double n1, double n2, String operator){

if (operator.equals("+")){

    return n1 + n2;

}

else if (operator.equals("-")) {
   return n1 - n2;
}

else {

return 0;

  }
 } 
}