class palindrome {
    public static void main(String[] args) {
        String str = "level";

        String rev = new StringBuilder(str).reverse().toString();

        if (str.equals(rev))
            System.out.println("Palindrome");
        else
            System.out.println("Not a Palindrome");
    }
}
