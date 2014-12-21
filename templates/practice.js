$("input[type=submit]").click(function(){
		
	//Array of all the text field values.
	var fieldData = [];
	
	//Fills fieldData with textfield values.
	$('input[type=text]').each(function() {
	    fieldData[$(this).attr('id')] = $(this).val();
	});

	//Boolean to check for empty fields
	var isFull = true;	
	//isFull flips to false if any of the fields are empty
	for (var i in fieldData) {
	  if(fieldData[i] == ""){isFull = false;}
	}

	if(!isFull){	//If any of the fields are empty
		alert("At least one of your fields is blank! Please fill out all fields.")
	}
	else if(!isAlphabetic(fieldData[fieldData.length - 1])){	//If the last field has non alphabetic characters
		alert("The last field cannot have non-alphabetic characters!")
	}
	else{	//Passed all validation checks. Post request time.
		$.post('../controller/practice_actions.php', {fieldData: fieldData}, function(data){
			//$('#testDiv').html(data);
			alert("Your information has been saved!");
		});
	}
});

//Checks if a string has only alphabetic characters.
function isAlphabetic(str){
    if( /[^a-zA-Z+$]/.test(str) ) {
       //alert('Input is not alphabetic');
       return false;
    }
    return true;     
}