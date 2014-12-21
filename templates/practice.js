$("input[type=submit]").click(function(){
	// $.ajax({
	//   type: "POST",
	//   url: url,
	//   data: data, 
	//   success: success,
	//   dataType: dataType
	// });
	$alert("Clicked submit!");
	$.post("demo_test.asp",function(data,status){
		alert("Data: " + data + "\nStatus: " + status);
	});
});