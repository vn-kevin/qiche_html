$(document).ready(function (){

	$(".operate").find("a").click(function(){
		$(this).parents().find("a").removeClass("blue")
		$(this).addClass("blue")
	})

	setClass=function(){
		//$(this).addClass("opactity");
		setTimeout("alert('微信扫一扫')",500)
	}

	$("#scanClose").click(
		function(){
			$(this).parents(".hint").fadeOut("slow",function(){
				$(this).parents(".index").find(".filter").removeClass("filter");
			});
		}
	)

	$("#submit").click(
		function(){
			if($("#name").val()==''){
				$("#name").addClass("error")
			}
			else if($("#password").val()==''){
				$("#password").addClass("error")
			}
		}
	)

	$("#submit3").click(
		function(){
			for(i=0;i<$(".formMessage input").length;i++){
				if($(".formMessage input").eq(i).val()==''){
					$(".formMessage input").eq(i).addClass("error");
					return false;
				}
			}
		}
	)

	$("#submit4").click(
		function(){
			for(i=0;i<$(".derive input").length;i++){
				if($(".derive input").eq(i).val()==''){
					$(".derive input").eq(i).addClass("error");
					return false;
				}
			}
		}
	)

	$("#submit5").click(
		function(){
			$(".account .hint").fadeIn();
			for(i=0;i<$(".account input").length;i++){
				if($(".account input").eq(i).val()==''){
					$(".account input").eq(i).addClass("error");
					return false;
				}
			};
		}
	)

	$("#submit6").click(
		function(){
			console.log($(".account input").length)
			for(i=0;i<$(".account input").length;i++){
				if($(".account input").eq(i).val()==''){
					$(".account input").eq(i).addClass("error");
					return false;
				}
			}
		}
	)

	$(".formMessage input").click(function(){
		$(this).removeClass("error")
	})

	$("#name").click(function(){
		$(this).removeClass("error")
	})

	$("#password").click(function(){
		$(this).removeClass("error")
	})

	$(".account input").click(function(){
		$(this).removeClass("error")
	})

	$(".remark").click(function(){
		$(".remarkcont").fadeIn("slow");
	})

	$(".issue li").click(function(){
		$(this).parents(".content").find("a").removeClass("selectedA");
		$(this).parents(".content").find(".icon").removeClass("selected");
		$(this).find("a").addClass("selectedA").parents("li").find(".icon").addClass("selected")
	})
	$(".issue2 li").click(function(){
		$(this).parents(".content").find("a").removeClass("selectedA");
		$(this).parents(".content").find(".icon").removeClass("selected");
		$(this).find("a").addClass("selectedA").parents("li").find(".icon").addClass("selected")
	})

	$(".sex a").click(function(){
		$(this).parents(".sex").find(".icon").removeClass("selected");
		$(this).parents("li").find(".icon").addClass("selected")
	})

	$("#select input").click(function(){
		$(this).parents("#select").find(".selectContent").slideToggle();
	})
	$("#select .icon").click(function(){
		$(this).parents("#select").find(".selectContent").slideToggle();
	})
	$("#select a").click(function(){
		$(this).parents(".selectContent").slideUp();
		var value=$(this).html();
		$(this).parents("#select").find("input").val(value);
	})

	$('.toTop').click(function(){
 		$('html,body').animate({scrollTop: '0px'}, 100);
 	}); 

	$(".result2 .title").click(function(){
		$(this).find("div").toggleClass("selected");
		$(this).find("div").toggleClass("content");
		$(this).find(".icon2").toggleClass("icon3")
	})

});
