class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> res = new ArrayList<>();
        
        // return empty list should nums array be null or less than 4
        if(nums == null || nums.length < 4){
            return res;
        }
        
        // Sort array from least -> greatest
        Arrays.sort(nums);
        int size = nums.length;
        
        // create pointers
        // [-2, -1, 0, 0, 1, 2]
        //  i    j. left.    right
        for(int i = 0; i < size; i++){
            for(int j = i + 1; j < size; j++){
                // subtract nums at the ith pointer and jth pointer from target to calculate 
                // what remains
                int remainder = target - nums[i] - nums[j];
            
                int left = j + 1;
                int right = size - 1;
                
                while (left < right) {
                    // create sum of both left and right pointers
                    // if the sum is smaller than the remainder we'll increment the left pointer
                    // else if the sum is greater decrement
                    // else begin adding all 4 quads as a  list to our ArrayList
                    int twoSum = nums[left] + nums[right];
                    if(twoSum < remainder)
                        left++;
                    else if (twoSum > remainder)
                       right--; 
                    else {
                        res.add(new ArrayList<>(Arrays.asList(
                            nums[i], nums[j], nums[left], nums[right])));
                        
                        
                        // handling duplicates 
                        int prevLeft = nums[left], prevRight = nums[right];
                        // continue the increment left should nums at the left quadrant equals
                        // previous left 
                        while(left < right && nums[left] == prevLeft){
                            left++;
                        } 
                        // continue the decrement right should nums at the left quadrant equals
                        // previous right
                        while(left < right && nums[right] == prevRight) {
                            right--;
                        }
                    }   
                }
                // handling duplicate for the j pointer
                while(j + 1 < size && nums[j] == nums[j + 1]){
                    j++;
                }
                                  
            }
            // handling duplicates for the i pointer
            while(i + 1 < size && nums[i] == nums[i + 1]) {
                i++;
            } 
        }
        return res;
        
    }
}