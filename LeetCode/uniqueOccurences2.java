class Solution {
    public boolean checkMap(String letter, Map<String, Integer> map){
        return map.containsKey(letter);
    }
    public int lengthOfLongestSubstring(String s) {
        Map<String, Integer> map = new HashMap<String, Integer>();
        int max = 0;
        int size = s.length();
        
        if(size == 0){
            return 0;
        }
        
        if(size == 1){
            return 1;
        }
        
        for(int i = 0; i < size; i++){
            int j = i;
            String temp = "";
            while(j < size){
                if(temp.indexOf(s.charAt(j)) > -1){
                    if(!checkMap(temp, map)){
                        map.put(temp, temp.length());
                    }
                    temp = "";
                    break;
                } else {
                    temp += s.charAt(j);
                }
                
                  if(j == size - 1){
                    if(!checkMap(temp, map)){
                        map.put(temp, temp.length());
                    }        
                }     
                j++;       
            }
        }
        
        max = Collections.max(map.values());
     
        return max;       
    }
}