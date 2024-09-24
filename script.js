var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var list=document.getElementById("list");



button.addEventListener("click",function(){

	var ak=input.value;
	if(ak.length>0)
	{
	
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(ak));
	list.appendChild(li);
	input.value="";
	}
	});


// button.addEventListener("mouseenter",function(){

// 	var ak=input.value;
// 	if(ak.length>0)
// 	{
	
// 	var li=document.createElement("li");
// 	li.appendChild(document.createTextNode(ak));
// 	list.appendChild(li);
// 	input.value="";
// 	}
// 	});
 input.addEventListener("keypress",function(m){

	var ak=input.value;
	if(ak.length>0 && m.keyCode==13)
	{
	
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(ak));
	list.appendChild(li);
	input.value="";
	}
	});
