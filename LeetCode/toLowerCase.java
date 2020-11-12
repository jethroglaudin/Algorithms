class Solution {
    public String toLowerCase(String str) {
        
        return str.toLowerCase();
        
        // When you overthink things lol
        
        // StringBuilder newStr = new StringBuilder();
        // for(int i = 0; i < str.length(); i++){
        //     if((int) str.charAt(i) >= 65 && (int) str.charAt(i) <= 90){
        //         newStr.append(String.valueOf(str.charAt(i)).toLowerCase());
        //     } else {
        //         newStr.append(str.charAt(i));
        //     }
        // }
        // return newStr.toString();
        
//         String newStr = "";
        
//         for(char s : str.toCharArray()){
//             int ascii = (int) s;
//             if(ascii >= 65 && ascii <= 90){
//                 newStr += String.valueOf(s).toLowerCase();
//             } else {
//                newStr += s; 
//             }         
//         }
        
//         return newStr;
        
    }
}