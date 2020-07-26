class Solution {
    public void reverseString(char[] s) {

        // original solution

        // for (int i = 0; i < s.length / 2; i++) {
        //     char temp = s[i];
        //     s[i] = s[s.length - 1 - i];
        //     s[s.length - 1 - i] = temp;
        // }

        // refactored version down below

        int left = 0;
        int right = s.length - 1;

        while (left < right) {
            char temp = s[left];
            s[left++] = s[right];
            s[right--] = temp;
        }

    }
}