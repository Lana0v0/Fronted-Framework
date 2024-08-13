$(document).ready(function()
{
$.ajax({
    url:"/assets/data/content.json",
    success: function(result){
        console.log(result);

        // user name
        $(result.userName).each(function(index, value){
            console.log(index + ":" + value.name);

            $('.username').eq(index).html(value.name);
        });

        // 4 TOP CARDS
        $(result.fourNavs).each(function(index, value){
            console.log(index + ":" + value.title + ":" + value.number);

            $('.title2').eq(index).html(value.title);
            $('.number').eq(index).html(value.number);
        });

        // 5 RIGHT CARDS
        $(result.rightCards).each(function(index, value){
            console.log(index + ":" + value.titleright + ":" + value.numberright);

            $('.titleright').eq(index).html(value.titleright);
            $('.numberright').eq(index).html(value.numberright);
        });

        // 2 BOTTOM CARDS
        $(result.twoCards).each(function(index, value){
            console.log(index + ":" + value.line + ":" + value.data);

            $('.title3').eq(index).html(value.line);
            $('.numb').eq(index).html(value.data);
        })
    }
})}); 