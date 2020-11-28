class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        String st1 = "";
        String st2 = "";

        for (String str : word1) {
            st1 += str;
        }
        for (String str : word2) {
            st2 += str;
        }
        // System.out.println(st1.equals(st2));
        return st1.equals(st2);
    }
}
