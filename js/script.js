$(document).ready(function() {
    var winWid = $(window).width();
    var winHei = $(window).height();
    $('.container, .output, #thankyou').height(winHei);

    // function output(this){
    // 	var que = $(this).find('h2').html();
    // 	var btnVal = $(this).attr('data-value');

    // 	$('.output p').html($('.output p').html()+'<br> ' + que +' : '+ btnVal)
    // }
    var developer = ['time', 'output'];

    var content = ['blog', 'campaign', 'output'];
    var output = '';
    $('a').on('click', function() {
    	console.log($(this).text())
        if ($(this).text() != 'Submit') {
            var que = $(this).parent().siblings('h2').html();
            var btnVal = $(this).attr('data-value');
            var next = $(this).attr('data-next');
            var fout = '';
            output += que + ': <strong>' + btnVal + '</strong> <br> <br>';
            console.log(output);
            if (next != 'output') {
                $('.container').fadeOut(500).siblings('#' + next).delay(500).fadeIn(500);
            } else if (next == 'output') {
                $('.container').fadeOut(500).siblings('#output').animate({ top: 0 }, 500);
                $('#output div p').html(output);
            }
        }
        else if($(this).text() == 'Submit')
        {
        	$('#output div').html('<h5>Your Project is submitted. We will get back to you shortly. Meanwhile you can post another <a href="javascript:location.reload();" class="waves-effect waves-light btn">Project</a> or Go through our list of verified <a href="" class="waves-effect waves-light btn">freelancers</a></h5>');
        }
    });
})