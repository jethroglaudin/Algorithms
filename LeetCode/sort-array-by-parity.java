class Solution {
    public int[] sortArrayByParity(int[] A) {
        
        // Quicksort algorithm
        int i = 0;
        int j = A.length - 1;
        
        while(i < j){
            if(A[i] % 2 > A[j] % 2){
                int temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            }
            
            if(A[i] % 2 == 0) 
                i++;
            if(A[j] % 2 == 1)
                j--;
                
        }
        
        return A;


        // First attempt
        // if(A.length <= 1){
//             return A;
//         }
        
//         List<Integer>even = new ArrayList<Integer>();
//         List<Integer>odd = new ArrayList<Integer>();
//         int[] ans = new int[A.length];
        
//         for(int num : A){
//             if(num >= 0) {
//                 if(num % 2 == 0) {
//                     even.add(num);
//                 } else {
//                     odd.add(num);
//                 }   
//             }   
//         }
        
//         // merge both lists
//         even.addAll(odd);
//         for(int i = 0; i < ans.length; i++){
//             ans[i] = even.get(i);
//         }
          
//         return ans;
    }
}