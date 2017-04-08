
	$(function(){
		// 头部弹出层的显示隐藏
		$('#ul1').on('mouseover',function(){
			$('#hide').show();
		});
		$('#ul1').on('mouseout',function(){
			$('#hide').hide();
		});
		$('#hide').on('mouseover',function(){
			$('#hide').show();
		});
		$('#hide').on('mouseout',function(){
			$('#hide').hide();
		});
		
		//右侧选项卡
		$('#cli ul li').mouseover(function(){
			if($(this).index() <= 3){
				$('#cli ul li').removeClass('active');
				$(this).addClass('active');
				$('#cli dl').removeClass('active');
				$('#cli dl').eq($(this).index()).addClass('active');			
			}
		})
		//视频中心
		$('#ttt li').mouseover(function(){
			$('#ttt li').removeClass('active');
			$(this).addClass('active');
			$('.hh .ul2').removeClass('active');
			$('.hh .ul2').eq($(this).index()).addClass('active');
		})
		
		//赛事中心
		$('#uuu li').mouseover(function(){
			$('#uuu li').removeClass('active');
			$(this).addClass('active');
			$('.ul_2').removeClass('active');
			$('.ul_2').eq($(this).index()).addClass('active');
		})
		//英雄、皮肤
		$('.ul4 li').mouseover(function(){
			$('.ul4 li').removeClass('active');
			$(this).addClass('active');
			$('.ul4_1').removeClass('active');
			$('.ul4_1').eq($(this).index()).addClass('active');
		})
		
		//右下角
		$('.dv1 span').click(function(){alert(1)
			$('#shoo').toggle();
		})
		$('#shoo').on('mousewheel',function(event){
			event.preventDefault();
		})
		
		
		
		//banner轮播图
		var index = 0;
		var timer;
		$('#banner ul li').click(function(event){
			$('#banner ul li').removeClass('active');
			$(this).addClass('active');
			$('#banner img').removeClass('active');
			$('#banner img').eq($(this).index()).addClass('active');
			index = $(this).index();
			//event.stopPropagation();
		});		
		function tab(){
			var aImg = $('#banner img');
			var aLi = $('#banner ul li');
			index++;
			if(index == aImg.length){
				index=0;
			}
			$('#banner ul li').removeClass('active');			
			$('#banner img').removeClass('active');
			aImg[index].className = 'active';
			aLi[index].className = 'active';
		}
		timer = setInterval(tab,1700);		
		$('#banner').mouseenter(function(){
			clearInterval(timer);
		});	
		$('#banner').mouseleave(function(){
			timer = setInterval(tab,1700);
		});
		
		//图片延时加载	
		$(window).on('scroll resize',function(){		 	
			var aImg = $('img');
			for(var i=0;i<aImg.length;i++){
				var scrollT = $(document).scrollTop();
				var clientH = $(window).height();
				var s = scrollT + clientH;
				var oTop = getPos(aImg[i]).top;
				if(s >= oTop){
					aImg[i].src=aImg[i].getAttribute('_src');
				}
			} 
			
		})
		function getPos(obj){
			var t = 0;
			while(obj){			
				t += obj.offsetTop;
				obj = obj.offsetParent;
			}
			return {top:t};
		}
		
	
		
		
		
		
	});