public class Calculator {

    // Toplama işlemi
    public double add(double a, double b) {
        return a + b;
    }

    // Çıkarma işlemi
    public double subtract(double a, double b) {
        return a - b;
    }

    // Çarpma işlemi
    public double multiply(double a, double b) {
        return a * b;
    }

    // Bölme işlemi
    public double divide(double a, double b) {
        if (b != 0) {
            return a / b;
        } else {
            System.out.println("Error! Division by zero.");
            return Double.NaN; // Error case for division by zero
        }
    }
    public double carp(double a,double b){
        return a*b;
    }
}