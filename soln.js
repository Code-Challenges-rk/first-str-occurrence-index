/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }

  return haystack.indexOf(needle);
};

let haystack = "sadbutsad";
let needle = "sd";

console.log(strStr(haystack, needle));
