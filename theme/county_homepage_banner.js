function strinstr (haystack, needle, offset) {
  var i = (haystack + '').indexOf(needle, (offset || 0));
  return i === -1 ? false : true;
}

if (strinstr(navigator.userAgent, 'iPhone') || strinstr(navigator.userAgent, 'iPad') || strinstr(navigator.userAgent, 'iPod')) {
  document.getElementById("block-homepage-slideshow-0").style.display = "none";
  document.getElementById("block-views-lock-homepage-slideshow-1").style.display = "block";
}