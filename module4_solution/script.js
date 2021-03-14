(function(){
	var names = new Array();
	names[0] = "Mandy";
	names[1] = "Sid";
	names[2] = "Rohan";
	names[3] = "John";
	names[4] = "Jake";
	names[5] = "jim";
	names[6] = "Mellisa";
	names[7] = "Charles";
	names[8] = "Jacob";
	
	for (var i =0; i<names.length; i++){
		if(names[i].charAt(0)==="J" || names[i].charAt(0)==='j'){
			console.log("Goodbye " + names[i])
		}
		else{
			console.log("Hello " + names[i])
		}
	}
})();