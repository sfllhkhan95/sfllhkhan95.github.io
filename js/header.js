$(document).ready(function(){var jobs=["Android Developer","Web Developer","Amateur Designer","Software Engineer","Avid Reader","Landscape Photographer","Traveller","Blogger"];var j=0;var dispJob=jobs[j];var cursor=0;var label=dispJob[cursor];var erase=!1;var skip=!0;function ticker(){if(!erase){if(skip){skip=!1;return}
skip=!0;if(++cursor<dispJob.length){label+=dispJob.charAt(cursor)}
else if(cursor>dispJob.length+3){erase=!0}}else{if(--cursor>=0){label=dispJob.substr(0,cursor)}
else if(cursor<-10){if(++j>=jobs.length){j=0}
dispJob=jobs[j];erase=!1;cursor=0;label=dispJob[cursor]}}
$("#what-i-am").html(label+"<span class='typed-cursor' style='display:inline-block;'>|</span>")}
var b=0;function blink(){if(cursor<=0){if(++b===1){$(".typed-cursor").css("opacity","0")}else if(b===3){$(".typed-cursor").css("opacity","1")}else if(b>3)b=0}}
setInterval(ticker,75);setInterval(blink,150);var nbDrop=50;function randRange(minNum,maxNum){return(Math.floor(Math.random()*(maxNum-minNum+1))+minNum)}
function createRain(){for(var i=1;i<nbDrop;i++){var dropLeft=randRange(0,$(window).width());var dropTop=randRange(-1.5*$(window).height(),0);var dropId="drop"+i;var dropWidth=randRange(1,3);var dropHeight=randRange(2,10);var dropSpeed=randRange(5,10);var style="";style+="width: "+dropWidth+"px;";style+="height: "+dropHeight+"px;";style+="-webkit-animation: fall "+dropSpeed+"s linear infinite;";style+="-moz-animation: fall "+dropSpeed+"s linear infinite;";$('.rain').append('<div class="drop" style="'+style+'" id="'+dropId+'"></div>');$('#drop'+i).css('left',dropLeft);$('#drop'+i).css('top',dropTop)}}
$(window).resize(function(){for(var i=1;i<nbDrop;i++){var dropLeft=randRange(0,2*$(window).width());var dropTop=randRange(-1.5*$(window).height(),$(window).height()/2);$('#drop'+i).css('left',dropLeft);$('#drop'+i).css('top',dropTop)}});createRain()})