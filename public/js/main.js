// $('#login-btn').click( () => {

// 	const email = $('#emailfield').val();
// 	const password = $('#passwordfield').val();
	
// 	$.post('/users/login', {email: email, password: password}, function(data) {
		
// 		console.log(data);

// 		if(data.emailError != null) {
// 			$('#emailError').html(`${data.emailError}`)
// 		}

// 		if(data.passwordError != null) {
// 			$('#passwordError').html(`${data.passwordError}`)
// 		}
// 	})
// })