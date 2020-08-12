class Solution {
    public int numberOfSteps (int num) {
        int operations = 0;
        
        while(num != 0){
            if(num % 2 == 0){
                num /= 2;
                operations++;
            } else {
                num -= 1;
                operations++;
            }
        }
        return operations;
    }
}