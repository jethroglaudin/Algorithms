static String isBalanced(String s) {
    Stack<Character> stack = new Stack<Character>();
    if(s.toCharArray().length % 2 != 0){
        return "NO";
    }

    for(char c : s.toCharArray()){
        switch(c) {
            case '{':
            case '(':
            case '[':
                stack.push(c);
                break;
            case '}':
                if(stack.empty() || (stack.peek() != '{')) {
                    return "NO";
                }
                stack.pop();
                break;
            case ')':
                if(stack.empty() || (stack.peek() != '(')) {
                    return "NO";
                }
                stack.pop();
                break;
            case ']':
                if(stack.empty() || (stack.peek() != '[')) {
                    return "NO";
                }
                stack.pop();
                break;
        }
    }
    return stack.empty() ? "YES" : "NO";
}