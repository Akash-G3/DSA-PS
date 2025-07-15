### Optimal Approach , Using Stack data structure

**Intuition explanation**
  **Read in hindi**

  Problem me hume identify krna hai parenthesis valid hai ya nhi ( study question to know what is valid parenthesis)

  1. Create a empty stack ..
   2. Iterate the string on character at a time 

   Agar opening brackets ho to usse stack me push krdo 
   aur jab closing brackets ho to match kro ki current closing bracket hai ya ni ,
   Agar ho to current bracket ko pop krdo .

   Agar stack empty ho jaae to return true otherwise false

   **Brackets means parenthesis**

   ### Time complexity = O(n) 
   ### Space complexity = O(n)
