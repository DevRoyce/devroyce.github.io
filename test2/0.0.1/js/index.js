var a_Colour='fff000';
var b_Colour='00ff00';
var c_Colour='ff00ff';
var Size=120;
var YDummy=new Array(),XDummy=new Array(),xpos=0,ypos=0,ThisStep=0;step=0.6;
if (document.layers){
window.captureEvents(Event.MOUSEMOVE);
function nsMouse(evnt){
xpos = window.pageYOffset+evnt.pageX+6;
ypos = window.pageYOffset+evnt.pageY+16;
}
window.onMouseMove = nsMouse;
}
else if (document.all)
{
function ieMouse(){
xpos = document.body.scrollLeft+event.x+6;
ypos = document.body.scrollTop+event.y+16;
}
document.onmousemove = ieMouse;
}
function swirl(){
for (i = 0; i < 3; i++)
 { 
 YDummy[i]=ypos+Size*Math.sin((1*Math.sin((ThisStep)/10))+i*2)*Math.sin((ThisStep)/4);
 XDummy[i]=xpos+Size*Math.cos((1*Math.sin((ThisStep)/10))+i*2)*Math.sin((ThisStep)/4);
 }
ThisStep+=step;
setTimeout('swirl()',10);
}
var amount=10;
if (document.layers){
for (i = 0; i < amount; i++)
{
document.write('<layer name=nsa'+i+' top=0 left=0 width='+i/2+' height='+i/2+' bgcolor='+a_Colour+'></layer>');
document.write('<layer name=nsb'+i+' top=0 left=0 width='+i/2+' height='+i/2+' bgcolor='+b_Colour+'></layer>');
document.write('<layer name=nsc'+i+' top=0 left=0 width='+i/2+' height='+i/2+' bgcolor='+c_Colour+'></layer>');
}
}
else if (document.all){
document.write('<div id="ODiv" style="position:absolute;top:0px;left:0px">'
+'<div id="IDiv" style="position:relative">');
for (i = 0; i < amount; i++)
{
document.write('<div id=x style="position:absolute;top:0px;left:0px;width:'+i/2+';height:'+i/2+';background:'+a_Colour+';font-size:'+i/2+'"></div>');
document.write('<div id=y style="position:absolute;top:0px;left:0px;width:'+i/2+';height:'+i/2+';background:'+b_Colour+';font-size:'+i/2+'"></div>');
document.write('<div id=z style="position:absolute;top:0px;left:0px;width:'+i/2+';height:'+i/2+';background:'+c_Colour+';font-size:'+i/2+'"></div>');
}
document.write('</div></div>');
}
function prepos(){
var ntscp=document.layers;
var msie=document.all;
if (document.layers){
for (i = 0; i < amount; i++)
{
 if (i < amount-1) 
 {
 ntscp['nsa'+i].top=ntscp['nsa'+(i+1)].top;ntscp['nsa'+i].left=ntscp['nsa'+(i+1)].left;
 ntscp['nsb'+i].top=ntscp['nsb'+(i+1)].top;ntscp['nsb'+i].left=ntscp['nsb'+(i+1)].left;
 ntscp['nsc'+i].top=ntscp['nsc'+(i+1)].top;ntscp['nsc'+i].left=ntscp['nsc'+(i+1)].left;
 } 
else  
 {
 ntscp['nsa'+i].top=YDummy[0];ntscp['nsa'+i].left=XDummy[0];
 ntscp['nsb'+i].top=YDummy[1];ntscp['nsb'+i].left=XDummy[1];
 ntscp['nsc'+i].top=YDummy[2];ntscp['nsc'+i].left=XDummy[2];
 }
}
}
else if (document.all){
for (i = 0; i <  amount; i++)
{
 if (i < amount-1) 
 {
 msie.x[i].style.top=msie.x[i+1].style.top;msie.x[i].style.left=msie.x[i+1].style.left;
 msie.y[i].style.top=msie.y[i+1].style.top;msie.y[i].style.left=msie.y[i+1].style.left;
 msie.z[i].style.top=msie.z[i+1].style.top;msie.z[i].style.left=msie.z[i+1].style.left;
 } 
else 
 {
 msie.x[i].style.top=YDummy[0];msie.x[i].style.left=XDummy[0];
 msie.y[i].style.top=YDummy[1];msie.y[i].style.left=XDummy[1];
 msie.z[i].style.top=YDummy[2];msie.z[i].style.left=XDummy[2];
 }
}
}
setTimeout("prepos()",10);
}
function Start(){
swirl(),prepos()
}
window.onload=Start;

/*window.onkeydown = function(e) {
      if (e.keyCode === 123) {
        e.preventDefault()
      }
    }
    window.oncontextmenu = function(e) {e.preventDefault()}
	
(function(){
	window.onclick = function(event){

		var heart = document.createElement("b");	//创建b元素
		heart.onselectstart = new Function('event.returnValue=false');	//防止拖动

		document.body.appendChild(heart).innerHTML = "❤";		//将b元素添加到页面上
		heart.style.cssText = "position: fixed;left:-100%;";	//给p元素设置样式

		var f = 16, 	// 字体大小
		x = event.clientX - f / 2, // 横坐标
	    y = event.clientY - f, // 纵坐标
	    c = randomColor(),  // 随机颜色
	    a = 1, 				// 透明度
	    s = 1.2; 			// 放大缩小

		var timer = setInterval(function(){		//添加定时器
			if(a <= 0){
				document.body.removeChild(heart);
				clearInterval(timer);
			}else{
				heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";

	            y--;
	            a -= 0.016;
	            s += 0.002;
			}
			},15)

			}
			 // 随机颜色
	function randomColor() {

	    return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";

	}
}());
*/