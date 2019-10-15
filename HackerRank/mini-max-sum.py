def miniMaxSum(arr):
    arr.sort()
    smallest = min(arr);
    largest = max(arr);
    
    bigSum = sum(arr) - largest
    smallSum = sum(arr) - smallest
    

    
    print(bigSum, smallSum)
            
            
            
    

# def miniMaxSum(arr):
#     arr.sort()
#     smallest = min(arr);
#     largest = max(arr);
    
#     bigSum = 0
#     smallSum = 0
    
#     for large in arr:
#         bigSum = bigSum + large 
        
#     for small in arr:
#         smallSum = smallSum + small

    
#     print((bigSum - largest), (smallSum - smallest))