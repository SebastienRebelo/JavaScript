function validateEmail($email){
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test($email)){
		return false;
	}
	else{
		return true;
	}
}
$(document).ready(function(){
	$("#otherMember").click(function(){
		if($("#otherMember").is(':checked')){
			$(".subscription2").show();
		}
		else{$(".subscription2").hide();
	}
})
})
//
// function verifier(lol)
// {
// 	if(lol.val() == ""){
// 		$(lol).addClass('error');
// 	}
// 	else
// 	{
// 		$(lol).removeClass('error');
// 	}
// }
// function checkForm()
// {
//
function checkForm(){
	  $('.required').each(function(){
			let required = $(this).val();
			if (required == '') {
			 $(this).addClass('error');
			 }
			 else {
			 	$(this).removeClass('error');
			 }
})
}
//
//
//
//
// 	if((validateEmail($mail.val()) == false) || ($mail.val() == ""))
// 	    {
//
// 	        $mail.addClass('error');
//
// 	    }
// 	    else
// 	    {
// 	        $mail.removeClass('error');
// 	    }
// }
