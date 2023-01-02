let isAnagram = function(test, original) {
    return sortLetters(test) === sortLetters(original);
};
 
function sortLetters(word) {
   return word.toLowerCase().split('').sort().join('');
}