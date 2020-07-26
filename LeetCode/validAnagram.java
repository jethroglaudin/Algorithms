class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() == 0 && t.length() == 0){
            return true;
        } 
        if(s.length() != t.length()){
            return false;
        }
        
        HashMap<Character, Integer> sMap = new HashMap<Character, Integer>();
        HashMap<Character, Integer> tMap = new HashMap<Character, Integer>();
        
        for(char letter : s.toCharArray()){
            if(!sMap.containsKey(letter)){
                sMap.put(letter, 1);
            } else {
                sMap.put(letter, sMap.get(letter) + 1);
            }
        }
        
         for(char letter : t.toCharArray()){
            if(!tMap.containsKey(letter)){
                tMap.put(letter, 1);
            } else {
                tMap.put(letter, tMap.get(letter) + 1);
            }
        }
    
        boolean isAnagram = false;
        
        for(Map.Entry entry : sMap.entrySet()){
            if(tMap.containsKey(entry.getKey())){
                if(tMap.get(entry.getKey()) == (int)entry.getValue()){
                    isAnagram = true;
                } else {
                    isAnagram = false;
                    break;
                }  
            } else {
                isAnagram = false;
                break;
            }          
        }
        
        return isAnagram;
    }
}