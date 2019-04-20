        window.onload = function () {
            C = Math.cos; // cache Math objects
            S = Math.sin;
            U = 0;
            w = window;
            j = document;
            d = j.getElementById("c");
            c = d.getContext("2d");
            W = d.width = w.innerWidth;
            H = d.height = w.innerHeight;
            c.fillRect(0, 0, W, H);
            c.globalCompositeOperation = "lighter"; // switch to additive color application
            c.lineWidth = 0.2;
            c.lineCap = "round";
            var bool = 0,
                    t = 0; // theta
            d.onmousemove = function (e) {
                if(window.T) {
                    if(D==9) { D=Math.random()*15; f(1); }
                    clearTimeout(T);
                }
                X = e.pageX; // grab mouse pixel coords
                Y = e.pageY;
                a=0; // previous coord.x
                b=0; // previous coord.y
                A = X, // original coord.x
                        B = Y; // original coord.y
                R=(e.pageX/W * 999>>0)/999;
                r=(e.pageY/H * 999>>0)/999;
                U=e.pageX/H * 360 >>0;
                D=9;
                g = 360 * Math.PI / 180;
                T = setInterval(f = function (e) { // start looping spectrum
                    c.save();
                    c.globalCompositeOperation = "source-over"; //
                    if(e!=1) {
                        c.fillStyle = "rgba(0,0,0,0.02)";
                        c.fillRect(0, 0, W, H); //
                    }
                    c.restore();
                    i = 25; while(i --) {
                        c.beginPath();
                        if(D > 450 || bool) { // decrease diameter
                            if(!bool) { // has hit maximum
                                bool = 1;
                            }
                            if(D < 0.1) { // has hit minimum
                                bool = 0;
                            }
                            t -= g; // decrease theta
                            D -= 0.1; // decrease size
                        }
                        if(!bool) {
                            t += g; // increase theta
                            D += 0.1; // increase size
                        }
                        q = (R / r - 1) * t; //  (see: http://en.wikipedia.org/wiki/Hypotrochoid)
                        x = (R - r) * C(t) + D * C(q) + (A + (X - A) * (i / 25)) + (r - R); //
                        y = (R - r) * S(t) - D * S(q) + (B + (Y - B) * (i / 25));
                        if (a) { // draw once two points are set
                            c.moveTo(a, b);
                            c.lineTo(x, y)
                        }
                        c.strokeStyle = "hsla(" + (U % 360) + ",100%,50%,0.75)"; //
                        c.stroke();
                        a = x; // set previous coord.x
                        b = y; // set previous coord.y
                    }
                    U -= 0.5; // increment hue
                    A = X; // set original coord.x
                    B = Y; // set original coord.y
                }, 16);
            }
            j.onkeydown = function(e) { a=b=0; R += 0.05 }
            d.onmousemove({pageX:300, pageY:290})
        }
window.onkeydown = function(e) {
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