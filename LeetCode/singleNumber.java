class Solution {
    public int singleNumber(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for(int num : nums){
            if(!map.containsKey(num)){
               map.put(num, 1); 
            } else {
                map.put(num, map.get(num) + 1);
            }
        }

        // refactored

        for(int num : nums) {
            if(map.get(num) == 1){
                return num;
            }
        }
       
        return 0;
       
        // Iterator it = map.entrySet().iterator();
        // int ans = 0;
        
        // while(it.hasNext()){
        //     Map.Entry pair = (Map.Entry)it.next();
        //     if((int)pair.getValue() == 1){
        //         ans = (int)pair.getKey();
        //     }
        // }
        // return ans;


        
    }
}