// catch all picture's button
var allButtons = $('#buttons > span')

for(let i=0;i<allButtons.length;i++){
    // trans all buttons to jQuery object
    $(allButtons[i]).on('click',function(x){
        //index() is jQeury method
        var index = $(x.currentTarget).index()
        // moving by index
        var p = index * -300
        $('#images').css({
            transform:'translate('+p+'px)'
        })
    })
}
// n and size is confirm which picture show by remainder
var n = 0;
var size = allButtons.length
// eq() find the dom and change the dom to jQuery
// trigger will trigger event 'click'
allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')

// set 1 second change pic by setInterval
setInterval(()=>{
    n+=1
    allButtons.eq(n%size).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')
},1000)

