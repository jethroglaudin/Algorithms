class Solution {
    public int[] decompressRLElist(int[] nums) {
        
        int size = 0;
        for(int i = 0; i < nums.length; i+=2){
            size += nums[i];
        }
        
        int[] res = new int[size];
        
        int index = 0;
        for(int i = 0; i < nums.length; i+=2){
            
            // arrays fill params
            // the array you look to fill
            // the starting index
            // to ending index
            // the value your filling
            
            Arrays.fill(res, index, index + nums[i], nums[i+1]);
            index += nums[i];
        }
        
        
//         List<Integer> arr = new ArrayList<>();
        
//         for(int i = 0; i < nums.length-1; i+=2){
//             int count = 0;
//             int freq = nums[i];
//             int val = nums[i+1];
//             while(count < freq){
//                 arr.add(val);
//                 count++;
//             }    
//         }
        
// //         int[] res = arr.stream()
// //             .mapToInt(i -> i).toArray();
        
        return res;
        
    }
}