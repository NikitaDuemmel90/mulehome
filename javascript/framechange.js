
var iframe = document.getElementById("contentframe");

function generateText(newURL){
	iframe.src = newURL;
}

iframe.onload = function(){
	iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}