// jQuery youtube-background plugin
// by Florian CHAPON
// http://www.florian-chapon.fr/
// version: 1.0
// updated: Febrary 19, 2016
// since 20166
// Enjoy.
//
// Florian 


$(document).ready(function () {
	var div = "<div id='front-background' style='position:fixed;width:100%;height:100%;z-index:-1;'></div><div id='yt-background' style='position:fixed; width:100%; height:100%; z-index:-2;'><div id='ytplayer' style='position: absolute;'</div>";
	$("body").prepend(div);
});


 var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
	
	// Default value 
	var embedId = "vQWlNALvbhE";
	var starttime = 0; 
	var endtime = 0;
	var setvolume = "0";
	
	
	function ytbg(url, start, end, vol){
		embedId = url;
		starttime = start;
		endtime = end;
		setvolume = vol;
	}
	

	
	
	function onYouTubeIframeAPIReady() {
        player = new YT.Player('ytplayer', {
			videoId: embedId,
            playerVars:{
				controls:0,
				showinfo:0,
				modestbranding:1,
				autoplay: 1,
				start:starttime,
				end:endtime,	
				rel: 0,
				wmode:"transparent"
			},
			
			events: {
                onReady:onPlayerReady,
				onStateChange:onPlayerStateChange
            }
        });
    }
	
	
	
    function onPlayerReady() {
        player.playVideo();
		player.setVolume(setvolume);
        // Mute!
        // player.mute();	
    }
	function onPlayerStateChange(e) {
		 if (e.data === YT.PlayerState.ENDED) {
            player.seekTo(starttime);
		}
	}	
	
	
setInterval(function(){
		
	// Get viewport informations 
	var height = $( window ).height();
	var width = $( window ).width();
	
	// Calculate height and width considering 16/9 ratio 
	var calcH = height * (16 / 9);
	var calcW = width * (9 / 16);
	
	// Calculate left and top position to center player 
	var left = (width - calcH) / 2;
	var top = (height - calcW) / 2;
	
	// Responsive player, size and position 	
	if ( width < calcH) {
		$("#ytplayer").css("width", calcH);
		$("#ytplayer").css("height", height);
		$("#ytplayer").css("left", left);		
	}
	
	else { 
		$("#ytplayer").css("width", width);
		$("#ytplayer").css("height", calcW);
		$("#ytplayer").css("top",top);
	}
	
},100);		
		
	