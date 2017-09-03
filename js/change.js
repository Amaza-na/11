$(function(){
	$('.menu_a').click(function(e){
		/*alert(e);
		触发该事件的一些信息.*/
		alert("A");
		$("#iframe-main").attr("src", $(this).attr('link')); //iframe切换页面
        console.log($("#iframe-main").src);
		/*$(".menu_a").parent('li').removeClass('active');

		$(this).parent('li').addClass('active');*/
	});
})