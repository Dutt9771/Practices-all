let nums = [2,0];
let smlInt = [1,2,3,4,5,6,7,8,9,10]


function solution(A)
    {
        let n = A.length;
        // To mark the occurrence of elements
        let present = new Array(n+1);
         
         
        for(let i=0;i<n+1;i++)
        {
            present[i]=false;
        }
        // Mark the occurrences
        for (let i = 0; i < n; i++)
        {
            // Only mark the required elements
            // All non-positive elements and
            // the elements greater n + 1 will never
            // be the answer
            // For example, the array will be {1, 2, 3}
            // in the worst case and the result
            // will be 4 which is n + 1
            if (A[i] > 0 && A[i] <= n)
            {
                present[A[i]] = true;
            }
        }
        // Find the first element which didn't
        // appear in the original array
 
        for (let i = 1; i <= n; i++)
        {
            if (!present[i])
            {
                return i;
            }
        }
        // If the original array was of the
        // type {1, 2, 3} in its sorted form
        return n + 1;
    }

missedInt(nums,smlInt)