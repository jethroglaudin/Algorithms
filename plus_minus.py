# Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

import math
import os
import random
import re
import sys

# Complete the plusMinus function below.
def plusMinus(arr):
    length = len(arr)
    pos = 0
    neg = 0
    zero = 0
 

    for num in arr:
        if num > 0:
            pos += 1  

        elif num < 0:
            neg += 1  
        else:
            zero += 1
             

    print("{:.6f}".format(pos / length))
    print("{:.6f}".format(neg / length))
    print("{:.6f}".format(zero / length))


if __name__ == '__main__':
    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)
