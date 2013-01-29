function strinstr (haystack, needle, offset) {
  var i = (haystack + '').indexOf(needle, (offset || 0));
  return i === -1 ? false : true;
}

if (strinstr(navigator.userAgent, 'iPhone') || strinstr(navigator.userAgent, 'iPad') || strinstr(navigator.userAgent, 'iPod')) {
  document.getElementById("block-extension_homepage_banner-0").style.display = "none";
  document.getElementById("block-views-homepage_slideshow-block_1").style.display = "block";
}