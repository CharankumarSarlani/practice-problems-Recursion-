```
-recursion
 -occuring again and again
 -should need to has a termination condition.

-avoid global declarations 
-if needed , declare global constants
 to understand better how it is causing problem -> "global_decalaration_(issues)" program.

-usage of guard classes
 -acts as an entry point.
 -used to avoid unnecessary repetitive checks.
 -used to handle early exits.
 -helps in case of edge cases also.
 -provides higher level abstraction.

-naming guard classes
 -differentiate guard class and main class by (__) double underscore symbol.

-no increments or decrements of parameters while passing those parameters to functions.
 Eg:f(n--) ,f(++n),.. 
-higher level abstraction and lower level abstraction of functions.

-usage of memory 
 -recursive function call takes stacks.
 -it every time creates new memory space.
 -that is why it stops at a particular point of time, and shows error.

 -compared to loops
  -in loops it goes to infinite loop , but compiler never complains about memory usage,
   in loops for iteration its creates a new scope , basically replacing the old memory space ,
   it does the whole work in the space which is being allocated to it.
  -it doesn't creates new memory blocks.

-recursive function calls are powerfull , because it remembers the path from where it came from,
 also there we don't use variables . 

-working
 -it moves forward, if it hits termination condition,
   then traces back the path from where it is came from.

Questions
-conditional returns from variuos places in a one recursive function 


 
```
