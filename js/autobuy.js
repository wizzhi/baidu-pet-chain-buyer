$(window).load(function(e) {
	if($('div.sms-input > input[type="text"]') != undefined){
		
		$('div.sms-input > input[type="text"]').change(function(){$('body > div > section > div.mint-popup.mint-popup-bottom > div > div.button').click();});
		setTimeout('$("body > div > section > div:nth-child(5) > div").click()',300);
		$('div.sms-input > input[type="text"]').focus();
	}
});