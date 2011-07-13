$(init);

function init(){
	console.log("init");
	tick();
}

function tick(){
	check_update();
	window.setTimeout("tick()", 60000);
}

function check_update(){
	console.log("check update");
	var update_count_em = $("#newMsg em");
	if(update_count_em.length > 0){
		console.log("found update: " + update_count_em.text());
		update_title(update_count_em.text());
	}else{
		console.log("no update");
		clear_title();
	}
}

function clear_title(){
	var wt = document.title.toString().replace(/\s*\([0-9]+\)/, "");
	document.title = wt;
}

function update_title(count_text){
	if(count_text == "0"){
		clear_title();
	}else{
		var wt = document.title.toString().replace(/\([0-9]+\)/, "");
		wt += " ("+count_text+")";
		document.title = wt;
	}
}
