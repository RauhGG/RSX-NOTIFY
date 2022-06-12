$(() => {
    $('.noti').css({'bottom':'0%','opacity':'0'},0)
    $('.noti').hide()
    window.addEventListener('message', (event) => {
        let e = event.data
        type = e.type;
        text = e.msg;
            if (type == 'error') {
                $('.noti').show()
                $('.logo').html('<i class="fa fa-exclamation-triangle"></i>');
                $('.text').text(text);
                $('.noti').css({ 'transition' : '1s' ,'bottom':'2%','opacity':'1'},500);
                setTimeout(() => {
                    $('.noti').css({'bottom':'0%','opacity':'0'},0)
                    $('.text').text();
                    setTimeout(() => {
                        $('.noti').hide()
                    }, 1000);
                }, 6000);
            } else if (type == 'ok') {
                $('.noti').show()
                $('.logo').html('<i class="fa fa-check"></i>');
                $('.text').text(text);
                $('.noti').css({ 'transition' : '1s' ,'bottom':'2%','opacity':'1'},500);
                setTimeout(() => {
                    $('.noti').css({'bottom':'0%','opacity':'0'},0)
                    $('.text').text();
                    setTimeout(() => {
                        $('.noti').hide()
                    }, 1000);
                }, 6000);
            } else if (type == 'info') {
                $('.noti').show()
                $('.logo').html('<i class="fa fa-info-circle"></i>');
                $('.text').text(text);
                $('.noti').css({ 'transition' : '1s' ,'bottom':'2%','opacity':'1'},500);
                setTimeout(() => {
                    $('.noti').css({'bottom':'0%','opacity':'0'},0)
                    $('.text').text();
                    setTimeout(() => {
                        $('.noti').hide()
                    }, 1000);
                }, 6000);
            }
    });
    
});