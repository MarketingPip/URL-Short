/*
Originally Built by github.com/MarketingPipeline
This notice CAN removed or altered from any source distribution.
But we would appreciate if you left it / or gave some credit back to us! 
If you are using this for commerical purposes, a sponsorship or donation would be appreciated towards https://github.com/MarketingPipeline 
(helps us put more cool stuff out!)  - but again, is NOT required! 
*/

let query = ""
let type = ""
let theme = ""
function setContent(x){
  decode(x) 




  function decode(input) {
// Takes a Base64-encoded, LZ-compressed string and converts to plaintext.
  var $str = LZString.decompressFromBase64(input)
  display($str);
}

function display(value)
{

/// set location

window.location.href = value

}
}



if (window.location.href.indexOf("link?") != -1) {

window.onload=function(){
     var url_string = window.location.href
      var url = new URL(url_string);
var c = url.searchParams.get("text");  

	

  
     if (c === null){
document.body.innerHTML = "Nothing found here! :("
       
     }else{



var script = document.createElement('script');

script.src = "https://cdnjs.cloudflare.com/ajax/libs/js-xss/0.3.3/xss.min.js";

document.head.appendChild(script); //or something of the likes

script.onload = function () {

	setContent(c)
  
};

	 

      
  
       
     }


}} else {
	
	
window.location.href =  `https://${window.location.hostname}/Send-A-Card/404.html`	
}
