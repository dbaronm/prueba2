$(document).ready(init);
function init() {
	$(".add").click(addList);
	$(".del").click(delList);
}
var num =6 
function addList() {
	$("ul").append('<li>'+ num +'</li>');
	num = ++num;
}

function delList() {
	$("ul").remove('<li></li>');
}
