class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        Set<Integer> occur = new HashSet<>();
        for(int num : arr){
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        
        for(int key : map.keySet()){
            occur.add(map.get(key));
        }
      
        
        return map.size() == occur.size();
        
    }
}