$(".modal").each( function(){
    $(this).wrap('<div class="overlay"></div>')
});
$(".open-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
            modal = $($this).data("modal");
    
    $(modal).parents(".overlay").addClass("open");
    setTimeout( function(){
        $(modal).addClass("open");
    }, 350);
    $(document).on('click', function(e){
        var target = $(e.target);
        
        if ($(target).hasClass("overlay")){
            $(target).find(".modal").each( function(){
                $(this).removeClass("open");
                $('body').css('overflow', 'unset');
            });
            setTimeout( function(){
                $(target).removeClass("open");
                $('body').css('overflow', 'unset');
            }, 350);
        }
        
    });
    $('body').css('overflow', 'hidden');
    
});

$(".close-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
            modal = $($this).data("modal");
    
    $(modal).removeClass("open");
    setTimeout( function(){ 
        $(modal).parents(".overlay").removeClass("open");
    }, 350);
    $('body').css('overflow', 'unset');
});