2.  Results for the extraLargeArray
    ------------ 1st ------------- 2nd ---------- 3rd ----------- 4th ---
    insert : 965.718471 ms | 964.588562 ms | 966.652159 ms | 966.04091 ms
    append : 10.492938 ms -| 3.724315 ms --| 3.967799 ms --| 4.05818 ms

3.  Results for the largeArray
    ----------- 1st -------------- 2nd ----------- 3rd ---------- 4th ---
    insert : 6.878122 ms --| 6.743588 ms --| 6.596951 ms ---| 6.625046 ms
    append : 855.119 μs ---| 720.166 μs ---| 620.178 μs ----| 630.033 μs

    Results for the mediumArray
    ----------- 1st -------------- 2nd ---------- 3rd ----------- 4th ---
    insert : 1.394039 ms --| 160.09 μs ----| 160.694 μs ---| 166.104 μs
    append : 158.876 μs ---| 153.536 μs ---| 151.059 μs ---| 153.132 μs

    Results for the smallArray
    ----------- 1st -------------- 2nd ---------- 3rd ----------- 4th ---
    insert : 47.849 μs ----| 48.286 μs ----| 48.095 μs ----| 47.876 μs
    append : 104.617 μs ---| 110.759 μs ---| 104.41 μs ----| 104.028 μs

    Results for the tinyArray
    ----------- 1st -------------- 2nd ---------- 3rd ----------- 4th ---
    insert : 36.86 μs -----| 36.361 μs ----| 39.42 μs -----| 37.419 μs
    append : 94.695 μs ----| 93.693 μs ----| 95.825 μs ----| 92.398 μs

4.  unShift() method is very much similar to the push() method

    - Both methods change the length of the array by the number of elements
      added to the array.
    - Both methods are used to increase the length of the array.
    - Both unShift() and push() are the in-built methods of the object array.
    - Both method changes the original array.
    - Both method returns the newly added element.

    We can say with confidence that the function with the push method scales better, as we can see from the results. But on very small arrays up to 1000 it is better to use a function with a unShift method.

5.  unShift() method adds the element at 0 index and all the values get shifted by 1 by  
    ultimately returning the length of the array. The push() method returns the last element adding a new element from the last index. If the array is very large, then it takes more time to unShift all the elements of the array, therefore the function with the method unShift works slower.
