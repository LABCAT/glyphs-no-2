(this["webpackJsonpglyphs-no-2"]=this["webpackJsonpglyphs-no-2"]||[]).push([[0],{19:function(t,i,e){},32:function(t,i,e){"use strict";e.r(i);var h=e(5),s=e.n(h),n=e(13),a=e.n(n),r=(e(19),e(6));window.p5=r;e(21);var o=e(14),d=e(4);function c(){return Object(d.jsxs)("svg",{id:"play-icon",className:"fade-out",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(d.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(d.jsx)("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]})}var p=function(t){for(var i,e,h=t.length;0!==h;)e=Math.floor(Math.random()*h),i=t[h-=1],t[h]=t[e],t[e]=i;return t},u=e(0),l=e(1),w=e(3),g=e(2),m=function(){function t(i,e,h,s){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";Object(u.a)(this,t),this.p=i,this.hue=this.p.random(0,360),this.origin=this.p.createVector(e,h),this.width=n,this.maxWidth=s,this.rotation=0,this.lifeTime=a||this.p.random(5e3,15e3),this.startTime=this.p.millis(),this.endTime=this.startTime+this.lifeTime;var o=this.p.random(0,this.p.height),d=this.p.random(0,this.p.width);switch(this.direction=r||this.p.random(["left","right","up","down"]),this.direction){case"left":this.destination=this.p.createVector(0,o);break;case"right":this.destination=this.p.createVector(this.p.width,o);break;case"up":this.destination=this.p.createVector(d,0);break;case"down":this.destination=this.p.createVector(d,this.p.height)}this.clockwiseRotation=Math.random()<.5}return Object(l.a)(t,[{key:"update",value:function(){this.width<this.maxWidth&&(this.width=this.width+Math.random()/4),this.clockwiseRotation?this.rotation++:this.rotation--}},{key:"draw",value:function(){var t=0-this.width/2,i=0+this.width/2,e=0-this.width/2,h=0+this.width/2,s=0+this.width/2,n=this.p.millis();if(n<this.endTime){var a=this.p.min(1,(n-this.startTime)/(this.endTime-this.startTime)),r=window.p5.Vector.sub(this.destination,this.origin).mult(a),o=window.p5.Vector.add(this.origin,r);this.p.translate(o.x,o.y),this.p.rotate(this.rotation),this.p.strokeWeight(4),this.p.stroke(this.hue,100,100),this.p.fill(this.hue,100,100,.25),this.p.triangle(t,i,0,e,h,s),this.p.rotate(-this.rotation),this.p.translate(-o.x,-o.y)}}}]),t}(),v=function(t){Object(w.a)(e,t);var i=Object(g.a)(e);function e(t,h,s,n){return Object(u.a)(this,e),i.call(this,t,h,s,n,t.width/40,t.random(1500,3e3))}return Object(l.a)(e,[{key:"draw",value:function(){var t=0-this.width/2,i=0+this.width/2,e=0-this.width/2,h=0+this.width/2,s=0+this.width/2,n=0-this.width/2,a=0-this.width/2,r=0+this.width/2,o=0+this.width/2,d=0-this.width/2,c=this.p.millis();if(c<this.endTime){var p=this.p.min(1,(c-this.startTime)/(this.endTime-this.startTime)),u=window.p5.Vector.sub(this.destination,this.origin).mult(p),l=window.p5.Vector.add(this.origin,u);this.p.translate(l.x,l.y),this.p.rotate(this.rotation),this.p.strokeWeight(4),this.p.stroke(this.hue,100,100),this.p.fill(this.hue,100,100,.1),this.p.triangle(t,i,0,e,h,s),this.p.triangle(n,a,0,r,o,d),this.p.rotate(-this.rotation),this.p.translate(-l.x,-l.y)}}}]),e}(m),f=function(t){Object(w.a)(e,t);var i=Object(g.a)(e);function e(t,h,s,n){return Object(u.a)(this,e),i.call(this,t,h,s,n,t.width/40,t.random(1500,3e3))}return Object(l.a)(e,[{key:"draw",value:function(){var t=this.p.millis();if(t<this.endTime){var i=this.p.min(1,(t-this.startTime)/(this.endTime-this.startTime)),e=window.p5.Vector.sub(this.destination,this.origin).mult(i),h=window.p5.Vector.add(this.origin,e);this.p.translate(h.x,h.y),this.p.rotate(this.rotation),this.p.strokeWeight(4/this.maxWidth*this.width),this.p.stroke(this.hue,100,100),this.p.fill(this.hue,100,100,.1),this.p.rect(0,0,this.width,this.width),this.p.rect(0,0,this.width/4*3,this.width/4*3),this.p.rect(0,0,this.width/4*2,this.width/4*2),this.p.rect(0,0,this.width/4*1,this.width/4*1),this.p.rotate(-this.rotation),this.p.translate(-h.x,-h.y)}}}]),e}(m),y=function(t){Object(w.a)(e,t);var i=Object(g.a)(e);function e(t,h,s,n){return Object(u.a)(this,e),i.call(this,t,h,s,n,t.width/256,t.random(1500,3e3))}return Object(l.a)(e,[{key:"draw",value:function(){var t=this.p.millis();if(t<this.endTime){var i=this.p.min(1,(t-this.startTime)/(this.endTime-this.startTime)),e=window.p5.Vector.sub(this.destination,this.origin).mult(i),h=window.p5.Vector.add(this.origin,e);this.p.push(),this.p.translate(h.x,h.y),this.p.rotate(this.rotation),this.p.strokeWeight(16),this.p.stroke(this.hue,100,100),this.p.fill(this.hue,100,100,.1),this.p.scale(.4),this.p.beginShape(),this.p.curveVertex(0,0),this.p.curveVertex(0,0),this.p.curveVertex(6*this.width,4*this.width),this.p.curveVertex(9*this.width,3*this.width),this.p.curveVertex(10*this.width,0),this.p.curveVertex(9*this.width,-3*this.width),this.p.curveVertex(6*this.width,-4*this.width),this.p.curveVertex(0,0),this.p.curveVertex(-6*this.width,4*this.width),this.p.curveVertex(-9*this.width,3*this.width),this.p.curveVertex(-10*this.width,0),this.p.curveVertex(-9*this.width,-3*this.width),this.p.curveVertex(-6*this.width,-4*this.width),this.p.curveVertex(0,0),this.p.endShape(this.p.CLOSE),this.p.rotate(-this.rotation),this.p.translate(-h.x,-h.y),this.p.pop()}}}]),e}(m),b=function(t){Object(w.a)(e,t);var i=Object(g.a)(e);function e(t,h,s,n,a,r,o){var d;return Object(u.a)(this,e),(d=i.call(this,t,h,s,n,r,t.random(5e3,1e4),a)).hueSet=o,d.opacity=.3,d}return Object(l.a)(e,[{key:"update",value:function(){this.width<this.maxWidth&&(this.width=this.width+Math.random()/4),this.clockwiseRotation?this.rotation=this.rotation+.1:this.rotation=this.rotation-.1}},{key:"setOpacity",value:function(t){this.opacity=t}},{key:"draw",value:function(){var t=this.p.millis();if(t<this.endTime){var i=this.p.min(1,(t-this.startTime)/(this.endTime-this.startTime)),e=window.p5.Vector.sub(this.destination,this.origin).mult(i),h=window.p5.Vector.add(this.origin,e);this.p.translate(h.x,h.y),this.p.rotate(this.rotation),this.p.noStroke();for(var s=0;s<12;s++)this.p.fill(this.hueSet[s%4],100,50,this.opacity),this.p.ellipse(0,30,this.width/4,this.width),this.p.rotate(30);this.p.rotate(-this.rotation),this.p.translate(-h.x,-h.y)}}}]),e}(m),x=function(t){Object(w.a)(e,t);var i=Object(g.a)(e);function e(t,h,s,n,a,r){var o;return Object(u.a)(this,e),(o=i.call(this,t,h,s,n,0,t.random(3e3,6e3))).width=o.maxWidth/4,o.shapeType=a,o.center=o.width/2,o.hsbColour=[Math.floor(o.p.random(0,360)),o.p.random(0,100),o.p.random(0,100)],o.hueDegree=o.hsbColour[0],o.brightnessTrans=o.p.map(o.hsbColour[2],0,100,.8,0),o.hueTrans=o.p.map(o.hsbColour[2],100,0,.9,.1),o}return Object(l.a)(e,[{key:"update",value:function(){this.width<this.maxWidth&&(this.width=this.width+Math.random()/4),this.rotation++,this.center=this.width/2,this.circleSize=this.p.map(this.hsbColour[1],100,0,this.width,0+this.width/16),this.satCircles={brightness:[100,0,100],alpha:[.1875,.625,.375],size:[this.circleSize,this.circleSize/2,this.circleSize/4]},this.horiVertMin=this.p.map(this.hueDegree,0,179,this.center,0),this.horiVertMax=this.p.map(this.hueDegree,0,179,this.center,this.width),this.hueDegree>179&&(this.horiVertMin=0,this.horiVertMax=this.width),this.diagonalMin=this.p.map(this.hueDegree,359,180,0+this.width/8+this.width/32,this.center),this.diagonalMax=this.p.map(this.hueDegree,359,180,this.width-this.width/8-this.width/32,this.center),this.positions={x1:[this.center-this.width/32,this.center-this.width/32,this.center,this.center+this.width/32,this.center-this.width/32,this.center-this.width/32,this.center,this.center+this.width/32],y1:[this.center,this.center-this.width/32,this.center-this.width/32,this.center-this.width/32,this.center,this.center-this.width/32,this.center-this.width/32,this.center-this.width/32],x2:[this.center,this.diagonalMax,this.horiVertMax,this.diagonalMax,this.center,this.diagonalMin,this.horiVertMin,this.diagonalMin],y2:[this.horiVertMin,this.diagonalMin,this.center,this.diagonalMax,this.horiVertMax,this.diagonalMax,this.center,this.diagonalMin],x3:[this.center+this.width/32,this.center+this.width/32,this.center,this.center-this.width/32,this.center+this.width/32,this.center+this.width/32,this.center,this.center-this.width/32],y3:[this.center,this.center+this.width/32,this.center+this.width/32,this.center+this.width/32,this.center,this.center+this.width/32,this.center+this.width/32,this.center+this.width/32]}}},{key:"draw",value:function(){var t=this.p.millis();if(t<this.endTime){var i=this.p.min(1,(t-this.startTime)/(this.endTime-this.startTime)),e=window.p5.Vector.sub(this.destination,this.origin).mult(i),h=window.p5.Vector.add(this.origin,e);this.p.push(),this.p.translate(h.x,h.y),this.p.rotate(this.rotation),this.p.stroke(0);for(var s=0;s<3;s++)this.p.fill(0,0,this.satCircles.brightness[s],this.satCircles.alpha[s]),this.p.ellipse(this.center,this.center,this.satCircles.size[s]);this.p.fill(this.hue,100,100,this.brightnessTrans),this[this.shapeType](this.center,this.center,this.width/3),this.p.noStroke(),this.p.angleMode(this.p.DEGREES),this.p.translate(this.center,this.center),this.p.rotate(this.hueDegree);var n=Array(this.hue,100,100,this.hueTrans);this.star(n,this.positions,3),this.p.rotate(-this.hueDegree),this.p.translate(-this.center,-this.center),this.star(Array(0,0,100,.8),this.positions),this.p.rotate(-this.rotation),this.p.translate(-h.x,-h.y),this.p.pop()}}},{key:"octagon",value:function(t,i,e){this.p.angleMode(this.p.RADIANS);var h=this.p.TWO_PI/8;this.p.beginShape();for(var s=this.p.TWO_PI/16;s<this.p.TWO_PI+this.p.TWO_PI/16;s+=h){var n=t+this.p.cos(s)*e,a=i+this.p.sin(s)*e;this.p.vertex(n,a)}this.p.endShape(this.p.CLOSE),this.p.angleMode(this.p.DEGREES)}},{key:"pentagon",value:function(t,i,e){this.p.angleMode(this.p.RADIANS);var h=this.p.TWO_PI/5;this.p.beginShape();for(var s=this.p.TWO_PI/10;s<this.p.TWO_PI+this.p.TWO_PI/10;s+=h){var n=t+this.p.cos(s)*e,a=i+this.p.sin(s)*e;this.p.vertex(n,a)}this.p.endShape(this.p.CLOSE),this.p.angleMode(this.p.DEGREES)}},{key:"star",value:function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.p.fill(t[0],t[1],t[2],t[3]);for(var h=0;h<8;h++)this.p.triangle(i.x1[h]/e,i.y1[h]/e,i.x2[h]/e,i.y2[h]/e,i.x3[h]/e,i.y3[h]/e)}}]),e}(m),k=e.p+"static/media/glyphs-no-2.62c476c0.ogg",O=e.p+"static/media/glyphs-no-2.43be76d9.mid",T=function(){var t=Object(h.useRef)(),i=function(t){t.canvas=null,t.canvasWidth=window.innerWidth,t.canvasHeight=window.innerHeight,t.audioLoaded=!1,t.player=null,t.PPQ=15360,t.backgroundGlyph=null,t.animatedGlyphs=[],t.animatedGlyphs2=[],t.loadMidi=function(){o.Midi.fromUrl(O).then((function(i){console.log(i);var e=i.tracks[4].notes,h=i.tracks[6].notes,s=i.tracks[7].notes.filter((function(t){return t.midi>=59})),n=(i.tracks[5].notes,i.tracks[1].notes,i.tracks[7].notes,i.tracks[6].notes,Object.assign({},i.tracks[2].controlChanges));t.scheduleCueSet(e,"executeCueSet1"),t.scheduleCueSet(h,"executeCueSet2"),t.scheduleCueSet(s,"executeCueSet3"),t.scheduleCueSet(n[Object.keys(n)[0]],"executeCueSet4"),t.audioLoaded=!0,document.getElementById("loader").classList.add("loading--complete"),document.getElementById("play-icon").classList.remove("fade-out")}))},t.preload=function(){t.song=t.loadSound(k,t.loadMidi),t.song.onended(t.logCredits)},t.scheduleCueSet=function(i,e){for(var h=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=-1,n=1,a=0;a<i.length;a++){var r=i[a],o=r.ticks,d=r.time;(o!==s||h)&&(r.currentCue=n,t.song.addCue(d,t[e],r),s=o,n++)}},t.setup=function(){t.canvas=t.createCanvas(t.canvasWidth,t.canvasHeight),t.background(0),t.colorMode(t.HSB),t.rectMode(t.CENTER),t.angleMode(t.DEGREES)},t.bgHue=0,t.bgOpacity=.3,t.draw=function(){if(t.audioLoaded&&t.song.isPlaying()){t.clear(),t.background(t.bgHue,100,50,t.bgOpacity),t.backgroundGlyph&&(t.backgroundGlyph.update(),t.backgroundGlyph.draw());for(var i=0;i<t.animatedGlyphs2.length;i++){var e=t.animatedGlyphs2[i];e.update(),e.draw()}for(var h=0;h<t.animatedGlyphs.length;h++){var s=t.animatedGlyphs[h];s.update(),s.draw()}}},t.executeCueSet1=function(i){var e=i.currentCue,h=t.random(-t.width/48,t.width/48),s=t.width/8,n=t.width/4*3+h,a=t.height/4+h,r="octagon",o=t.random(["up"]);e%22===1&&(t.animatedGlyphs=[]),(e%22===0||e%22>4&&e%22<10||e%22>14)&&(r="pentagon",o=t.random(["down"]),a=t.height/4*3+h),(e%22===0||e%22>9)&&(n=t.width/4+h),t.animatedGlyphs.push(new x(t,n,a,s,r,o))},t.backgroundGlyphOpacity=.4,t.executeCueSet2=function(i){var e=i.currentCue,h=e%3===1?t.width/5:e%3===2?t.width/5*4:t.width/2,s=e%3===1?"right":e%3===2?"left":t.random(["up","down"]),n=p([30,60,90,120,150,180,210,240,270,300,330,360]);t.bgHue=n[0],t.backgroundGlyph=new b(t,h,t.height/2,t.width/16,s,1.5*t.width,n),t.backgroundGlyph.setOpacity(t.backgroundGlyphOpacity)},t.executeCueSet3=function(i){var e=i.currentCue;e%6===0||e%6>4?(t.animatedGlyphs2.push(new y(t,t.width/2,t.height/2,t.width/4)),t.animatedGlyphs2.push(new y(t,t.width/2,t.height/2,t.width/4))):e%6>2?(t.animatedGlyphs2.push(new v(t,t.width/2,t.height/2,t.width/8)),t.animatedGlyphs2.push(new v(t,t.width/2,t.height/2,t.width/8))):(t.animatedGlyphs2.push(new f(t,t.width/2,t.height/2,t.width/8)),t.animatedGlyphs2.push(new f(t,t.width/2,t.height/2,t.width/8)))},t.executeCueSet4=function(i){var e=i.currentCue;t.backgroundGlyph&&e>1&&(console.log(i.value),t.backgroundGlyphOpacity=.8*i.value,t.backgroundGlyph.setOpacity(t.backgroundGlyphOpacity))},t.mousePressed=function(){t.audioLoaded&&(t.song.isPlaying()?t.song.pause():(parseInt(t.song.currentTime())>=parseInt(t.song.buffer.duration)&&t.reset(),document.getElementById("play-icon").classList.add("fade-out"),t.canvas.addClass("fade-in"),t.song.play()))},t.creditsLogged=!1,t.logCredits=function(){!t.creditsLogged&&parseInt(t.song.currentTime())>=parseInt(t.song.buffer.duration)&&(t.creditsLogged=!0,console.log("Music By: http://labcat.nz/","\n","Animation By: https://github.com/LABCAT/"),t.song.stop())},t.reset=function(){},t.updateCanvasDimensions=function(){t.canvasWidth=window.innerWidth,t.canvasHeight=window.innerHeight,t.canvas=t.resizeCanvas(t.canvasWidth,t.canvasHeight)},window.attachEvent?window.attachEvent("onresize",(function(){t.updateCanvasDimensions()})):window.addEventListener&&window.addEventListener("resize",(function(){t.updateCanvasDimensions()}),!0)};return Object(h.useEffect)((function(){new r(i,t.current)}),[]),Object(d.jsx)("div",{ref:t,children:Object(d.jsx)(c,{})})};var C=function(){return Object(d.jsx)(T,{})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8dd96944.chunk.js.map