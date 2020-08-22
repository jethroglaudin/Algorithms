class Solution {
    public int numJewelsInStones(String J, String S) {
//         int len = J.length();
//         HashMap<String, Integer> stones = new HashMap<String, Integer>();
//         int counter = 0;
//         for(int i = 0; i < S.length(); i++){
//             String test = String.valueOf(S.charAt(i));
//             if(J.matches("(.*)" + test + "(.*)")){
//                 counter++;
//             }
//         }
        
//     return counter;

// Refactored
        
        HashMap<Character, Integer> stones = new HashMap<Character, Integer>();
        int counter = 0;
        
        for(char stone : S.toCharArray()){
            if(!stones.containsKey(stone)){
                stones.put(stone, 1);
            } else {
                stones.put(stone, stones.get(stone) + 1);
            }
        }
        
        for(char stone : J.toCharArray()){
            if(stones.containsKey(stone)){
                counter += stones.get(stone);
            }
        }
        
        return counter;
    }
}