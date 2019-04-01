$( function () {
	$('form').on('submit', function () {
		var message = $('.isBad');
		var nombre = $('form input[name="nombre"]').val();
		var correo = $('form input[name="correo"]').val();
		var numero = $('form input[name="numero"]').val();
		if (nombre && correo && numero) {
			$.post('/service/sa', $(this).serialize(), function (data) {
				message.text(data.message);
				if (data.status == 'done') {
					message.addClass('isGood');
					message.css('display','block');
				} else {
					message.removeClass('isGood');
					message.css('display','block');
				}
			});
		} else {
			message.text('Debes de enviar todos los datos');
			message.removeClass('isGood');
			message.css('display','block');
		}
		return false;
	});
} );