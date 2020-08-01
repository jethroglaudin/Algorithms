package LeetCode;

class Solution {
    public int[] shuffle(int[] nums, int n) {
        // array should be in pairs
        // x1,y1,x2,y2
        // n is amount of pairs. so 3 x and 3 y; 
        // maybe use n to divide length of array

        // First solution
        // ArrayList<Integer> newArr = new ArrayList<Integer>();
        // int[] xArr = new int[nums.length-n];
        // int[] yArr = new int[nums.length-n];
        
        // for(int i = 0; i < n ; i++){
        //     xArr[i] = nums[i];
        // }
        
        // for(int i = n, j = 0; i < nums.length; i++, j++){
        //     yArr[j] = nums[i];
        // }
        
        // for(int k = 0; k < n; k++){
        //     newArr.add(xArr[k]);
        //     newArr.add(yArr[k]);
        // }
        
        
        // return newArr.stream().mapToInt(i -> i).toArray();
        

        // Refactored Solution 
        
        int[] newArr = new int[nums.length];
        // split length of array in half. 
        int halfLength = nums.length / 2; 
        int pos = 0;
        
        for(int i = 0; i < n; i++){
            newArr[pos++] = nums[i];
            newArr[pos++] = nums[halfLength++];
        }
        
        return newArr;
    }
}