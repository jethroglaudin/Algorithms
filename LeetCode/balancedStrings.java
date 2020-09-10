class Solution {
    public int balancedStringSplit(String s) {
        // List<String> bal = new ArrayList<String>();
        // String temp = "";
        int l = 0;
        int r = 0;
        int counter = 0;
        
        for(char c : s.toCharArray()){
            // temp += String.valueOf(c);
            if(c == 'L'){
                l++;       
            } else {
                r++;
            }
            if(l == r){
                // bal.add(temp);
                // temp = "";
                counter++;
                l = 0;
                r = 0;
            }
        }
        // return bal.size();
        return counter;
        
    }
}