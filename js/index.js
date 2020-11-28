$(document).ready(function(){
	
})

$('#load').click(function(){
	$.ajax({
	  	type: "POST",
	  	url: 'pages/index-img.php',
	  	success: function(data) {
            for (let i = 0; i < 2; i++) {
                $('#load-block').append(data);
            }
	  	}
	});
});