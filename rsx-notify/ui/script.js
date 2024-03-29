$(() => {
    $('.noti').css({'bottom':'0%','opacity':'0'},0)
    $('.noti').hide()
    window.addEventListener('message', (event) => {
        let e = event.data
        type = e.type;
        text = e.msg;
            if (type == 'error') {
                $.post('https://'+GetParentResourceName()+'/boolean', JSON.stringify(true))
                $('.noti').show()
                $('.logo').html('<i class="fa fa-exclamation-triangle"></i>');
                $('.text').text(text);
                $('.noti').css({ 'transition' : '1s' ,'bottom':'2%','opacity':'1'},500);
                setTimeout(() => {
                    $('.noti').css({'bottom':'0%','opacity':'0'},0)
                    $('.text').text();
                    setTimeout(() => {
                        $('.noti').hide()
                        $.post('https://'+GetParentResourceName()+'/boolean', JSON.stringify(false))
                    }, 1000);
                }, 6000);
            } else if (type == 'ok') {
                $('.noti').show()
                $.post('https://'+GetParentResourceName()+'/boolean', JSON.stringify(true))
                $('.logo').html('<i class="fa fa-check"></i>');
                $('.text').text(text);
                $('.noti').css({ 'transition' : '1s' ,'bottom':'2%','opacity':'1'},500);
                setTimeout(() => {
                    $('.noti').css({'bottom':'0%','opacity':'0'},0)
                    $('.text').text();
                    setTimeout(() => {
                        $('.noti').hide()
                        $.post('https://'+GetParentResourceName()+'/boolean', JSON.stringify(false))
                    }, 1000);
                }, 6000);
            } else if (type == 'info') {
                $.post('https://'+GetParentResourceName()+'/boolean', JSON.stringify(true))
                $('.noti').show()
                $('.logo').html('<i class="fa fa-info-circle"></i>');
                $('.text').text(text);
                $('.noti').css({ 'transition' : '1s' ,'bottom':'2%','opacity':'1'},500);
                setTimeout(() => {
                    $('.noti').css({'bottom':'0%','opacity':'0'},0)
                    $('.text').text();
                    setTimeout(() => {
                        $('.noti').hide()
                        $.post('https://'+GetParentResourceName()+'/boolean', JSON.stringify(false))
                    }, 1000);
                }, 6000);
            }
    });
    
});
