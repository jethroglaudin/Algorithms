class Solution {
    public String defangIPaddr(String address) {
//         String newIP = "";
        
//         for(char elem : address.toCharArray()){
//             if(elem == '.'){
//                 newIP += "[" + String.valueOf(elem) + "]";
//             }else {
//                 newIP += String.valueOf(elem);
//             }
//         }
//         return newIP;
        
        return address.replace(".", "[.]");
       
    }
}