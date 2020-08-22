class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> ans = new ArrayList<Boolean>();
        int max = Arrays.stream(candies).max().getAsInt(); 
        
        for(int num : candies){
           if(num == max){
               ans.add(true);
           }
           else if (extraCandies + num >= max) {
               ans.add(true);
           } else {
               ans.add(false);
           }
        } 
       return ans; 
    }
}