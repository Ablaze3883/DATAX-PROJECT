
$('.gif').hide()


function gif(){
	$('.gif').show()
	window.setTimeout(delayBtn, 5000);
}


function delayBtn(){
		$('.gif').hide()
   		$('.myimgdivshowhide').show();
}
	$('.hidebtn').click(function(){
   		$('.myimgdivshowhide').hide();
	});


