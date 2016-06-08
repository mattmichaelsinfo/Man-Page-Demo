var getCharacters = prompt("Present me with some words!");
var multiWord = getCharacters.replace(/\s/g, "</span><span class='word'>");


// Check if there are spaces...
if (getCharacters.indexOf(' ') >= 0) {                            

  // Spaces found!  Let's replace those with a word wrapper
  $('.buffer').append("<span class='word'>" + multiWord + "</span>"); 


  // Oh, no spaces?
} else {

  // Then let's just write out a solitary word wrapper.
  $('.buffer').append("<span class='word'>" + getCharacters + "</span>");
};
