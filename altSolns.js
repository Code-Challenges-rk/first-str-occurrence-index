var strHay = function (haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  if (m === 0) return 0; // empty needle

  for (let i = 0; i <= n - m; i++) {
    let found = true;
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
  return -1; // needle not found
};

// Approach:
// 1. Calculate the length of the haystack and needle strings.
// 2. If the length of the needle is 0, return 0.
// 3. Use a loop to check each substring of the haystack that has the same length as the needle, starting from the first character of the haystack.
// 4. Inside the loop, use another loop to compare each character of the substring with the corresponding character of the needle. If a character doesn't match, break the loop and move to the next substring.
// 5. If all characters match, return the starting index of the substring.
// 6. If no match is found, return -1.

function strStr(haystack, needle) {
  const haystackLen = haystack.length;
  const needleLen = needle.length;

  // If needle is empty, it is always present at index 0
  if (needleLen === 0) {
    return 0;
  }

  // Loop through the haystack to find the needle
  for (let i = 0; i <= haystackLen - needleLen; i++) {
    let j;
    // Check if the substring starting from index i matches the needle
    for (j = 0; j < needleLen; j++) {
      if (haystack[i + j] !== needle[j]) {
        break; // Characters don't match, move on to the next substring
      }
    }

    if (j === needleLen) {
      // The entire needle was found in the haystack
      return i;
    }
  }

  // Needle not found in the haystack
  return -1;
}

// Example 1
console.log(strStr("sadbutsad", "sad")); // Output: 0

// Example 2
console.log(strStr("leetcode", "leeto")); // Output: -1

//   The strStr function loops through the haystack and checks each substring of length equal to the length of the needle. If a substring matches the needle, it returns the starting index. If the loop completes without finding a match, it returns -1 indicating that the needle is not part of the haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strNeed = function (haystack, needle) {
  function findFrom(i) {
    if (haystack[i] === undefined) return -1;
    if (haystack[i] === needle[0]) {
      const initial = i;
      i++;
      let next = -1; // In case the first letter appears again
      let j = 1;
      let matches = true;
      while (needle[j]) {
        if (haystack[i] === needle[0] && next === -1) next = i;
        if (needle[j] !== haystack[i]) {
          if (next !== -1) return findFrom(next);
          matches = false;
          break;
        }
        i++;
        j++;
      }

      if (matches) return initial;
      return findFrom(i);
    }
    return findFrom(++i);
  }

  return findFrom(0);
};

// Approach:
// * Let's say i is what i use to index the haystack.
// * In the loop, check whether the current item in the haystack matches the first character of the needle(haystack[i] === needle[0]). If it does, loop from the next values, that is, needle[1...n] and haystack[i+1...i+n].
// * If the substring matches, I'll return teh initial index of i.
// * Also check if any of the letters match needle[0] while comparing, this way you have a next place to jump to and won't do some loops. If found, call the function with this index as it's value.
// * If the above two turn out false, call the function with the latest value of i;
// * If i exceeds the string length, return -1;
