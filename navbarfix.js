window.onscroll = function(){changePosition()};

function changePosition(){

	var header = $("#realHeader");

	if(document.body.scrollTop > header.outerHeight(true)){
		document.getElementById("nav").classList.add("navFix");
		$("#buffer").height($("#nav").outerHeight(true));
		document.getElementById("buffer").classList.add("block");
	}else {
		document.getElementById("nav").classList.remove("navFix");
		document.getElementById("buffer").classList.remove("block");
	}

}