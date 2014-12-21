$("input[type=submit]").click(function(){
				
	var fieldData = [];
	
	$('input[type=text]').each(function() {
	    fieldData[$(this).attr('id')] = $(this).val();
	});

	var isFull = true;

	for (var i in fieldData) {
	  if(fieldData[i] == ""){isFull = false;}
	}

	if(!isFull){
		alert("At least one of your fields is blank! Please fill out all fields.")
	}
	else if(!isAlphabetic(fieldData[fieldData.length - 1])){
		alert("The last field cannot have non-alphabetic characters!")
	}
	else{
		$.post('../controller/practice_actions.php', {fieldData: fieldData}, function(data){
			//$('#testDiv').html(data);
			alert("Your information has been saved!");
		});
	}
});

function isAlphabetic(str){
    if( /[^a-zA-Z+$]/.test(str) ) {
       //alert('Input is not alphabetic');
       return false;
    }
    return true;     
}