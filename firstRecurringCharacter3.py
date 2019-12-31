def recurring_char(string):
    dict = {}
    for char in string:
        if char in dict:
            print(char)
            return char
        else:
            dict[char] = 1
    return None                
recurring_char("ABCA")
recurring_char("BCABA")
recurring_char("ABCDEFGH")