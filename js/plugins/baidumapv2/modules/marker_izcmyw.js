/* 百度地图API V2 模块
 * 此模块必须配套使用baidumap_offline_v2_20160822.js对
 * 获取模块的方法：
 * http://api0.map.bdimg.com/getmodules?v=2.0&mod=模块1,模块2
 * 模块名称就是文件名
 * www.xiaoguo123.com 整理
 */
 _jsload2&&_jsload2('marker', 'function ag(a,b){0<a.Zf.length?a.Zf[a.Zf.length-1].k.finish=b:a.k.finish=b} x.extend(gb.prototype,{initialize:function(a){this.map=a;this.Hj();this.ca();this.hg&&this.hg.qa(this.map,this);x.lang.Ba.call(this,this.ba);if(this.V)return this.V.ba=this.ba,this.Pa||x.D.U(this.V),this.V},ca:function(){function a(a,b){var f=a.srcElement||a.target,g=a.clientX||a.pageX,i=a.clientY||a.pageY;if(a&&b&&g&&i&&f){var f=x.D.ha(c.Ua),k=Cb();b.pixel=b.ib=new Q(g-f.left+k[1],i-f.top+k[0]);b.point=c.ub(b.ib)}return b}if(this.V){var b=this,c=this.map;x.M(this.V,"mouseover",function(c){b.el|| b.dispatchEvent(a(c,la(new N("onmouseover"),c)))});x.M(this.V,"mouseout",function(c){b.el||b.dispatchEvent(a(c,la(new N("onmouseout"),c)))});b.z.ff&&(x.M(this.V,"touchstart",function(a){b.ca.GB=new Q(a.changedTouches[0].clientX,a.changedTouches[0].clientY)}),x.M(this.V,"touchend",function(c){var e=ab(),f=new Q(c.changedTouches[0].clientX,c.changedTouches[0].clientY);10<Math.abs(f.x-b.ca.GB.x)||10<Math.abs(f.y-b.ca.GB.y)?b.ca.GB=p:(b.dispatchEvent(a(c,la(new N("onclick"),c))),e-b.dH<b.map.K.kC&&b.dispatchEvent(a(c, la(new N("ondblclick"),c))),b.dH=e)}),G()||x.M(this.V,"click",function(c){for(var e=c.srcElement||c.target;e;){if(e===b.V){(!(b instanceof T)||b instanceof T&&(!b.JA||b.JA&&b.ha().mb(b.JA)))&&b.dispatchEvent(a(c,la(new N("onclick"),c)));break}else if(b.map&&b.map.La&&e===b.map.La.xc)break;e=e.parentNode}}),x.M(this.V,"dblclick",function(c){b.dispatchEvent(a(c,la(new N("ondblclick"),c)));na(c)}),(!x.ea.rg||4>x.ea.rg)&&x.M(this.V,"contextmenu",function(c){b.dispatchEvent(a(c,la(new N("onrightclick"), c)))}));x.M(this.V,"mousedown",function(c){if(b instanceof T)b.JA=b.ha();b.dispatchEvent(a(c,la(new N("onmousedown"),c)))});x.M(this.V,"mouseup",function(c){b.dispatchEvent(a(c,la(new N("onmouseup"),c)));x.ea.rg>=4&&(c.button===2&&b.z.ff)&&b.dispatchEvent(a(c,la(new N("onrightclick"),c)))})}},U:function(){this.Pa!==q&&(this.Pa=q,jc.prototype.U.call(this),this.zb&&(this.zb.$a&&this.zb.$a===this)&&this.Xc())},show:function(){this.Pa!==o&&(this.Pa=o,jc.prototype.show.call(this))},LN:function(a){if(a)for(var b in a)typeof this.z[b]=== typeof a[b]&&(this.z[b]=a[b])},St:function(a){this.zIndex=a;this.Ml()},Ml:function(){var a;Gb(this.zIndex)?a=this.zIndex:(a=0,this.map&&this.ha()&&(a=this.ha()?this.ha().lat:0,a=jc.ym(a)+(this.z.WJ||0)));this.V&&(this.V.style.zIndex=a)},uo:function(a){this.hg=a;this.map&&a.qa(this.map,this)},zp:function(){this.hg.remove();this.hg=p}});S(Qe,{show:Qe.show,hide:Qe.U,addContextMenu:Qe.uo,removeContextMenu:Qe.zp});T.Fu=jc.ym(-90)+1E6;T.kG=T.Fu+1E6;T.KR=function(a){if(T.Xu[a])return T.Xu[a];var b=T.Xu[a]=["BMap_"+Math.round(1E4*Math.random()),"BMap_"+Math.round(1E4*Math.random())],c=Cc[a],d=T.tU;d||(d=T.tU=K("style",{type:"text/css"}),document.getElementsByTagName("head")[0].appendChild(d));d.textContent+=T.sH(c.Bm,b[0])+T.sH(c.Tt,b[1]);return T.Xu[a]}; T.sH=function(a,b){var c=["@-webkit-keyframes "+b+" {\\\\n"];x.jc.Fb(a,function(a){c.push(100*a.$b,"% { ");c.push("-webkit-transform: translate(",a.translate[0],"px,",a.translate[1],"px); ");c.push("-webkit-animation-timing-function: ",a.gc,"; ");c.push("}\\\\n")});c.push("}\\\\n");return c.join("")}; T.PP=function(a,b){if(!T.Kh&&(T.Kh=K("img",{src:F.pa+"drag_cross.png",width:13,height:9}),T.Kh.style.position="absolute",6==x.ea.la)){delete T.Kh;var c=(T.Kh=K("div")).style;c.position="absolute";c.width="13px";c.height="9px";c.filter=\'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image,src="\'+F.pa+\'drag_cross.png")\'}c=T.Kh.style;c.left=a.width-6+"px";c.top=a.height-5+"px";b.appendChild(T.Kh)};T.ET=function(){T.Kh&&T.Kh.parentNode&&T.Kh.parentNode.removeChild(T.Kh)};T.Xu=[]; T.LG=function(){this.style.WebkitAnimation=""}; x.extend(T.prototype,{initialize:function(a){this.br();gb.prototype.initialize.call(this,a);this.Pa||x.D.U(this.zc);this.sa(this.point);this.Tb(this.z.vj);this.zy(this.z.Nk);this.Lp(this.z.rotation);this.z.label&&this.Ru&&this.z.label.addEventListener("remove",this.Ru);this.fn(this.z.label);this.Dc(this.z.title);this.vA();return this.V},br:function(){this.Qi||(this.Qi=o,this.Zc=this.zc=this.Ld=this.V=p,this.ml=q)},Hj:function(){var a=this.map.Qf();this.V=zb(a.GE,this.bT());this.zc=zb(a.EM,this.US()); this.zc.ba=this.ba},bT:function(){var a=[\'<span class="BMap_Marker BMap_noprint" unselectable="on" \'];a.push(this.z.title?\'title="\'+this.z.title+\'"\':\'"\');a.push(\' style="position:absolute;padding:0;margin:0;border:0;width:0;height:0;-moz-user-select:none;\');a.push(this.z.ff?"cursor:pointer;":"");a.push("background:url("+F.pa+"blank.gif);");a.push("width:"+this.z.vj.size.width+"px;");a.push("height:"+this.z.vj.size.height+"px;");a.push(\'"></span>\');return a.join("")},US:function(){var a=[\'<span class="BMap_Marker" unselectable="on" \']; a.push(\'style="position:absolute;padding:0;margin:0;border:0;\');a.push(\'width:0;height:0;-moz-user-select:none"></span>\');return a.join("")},hU:function(){var a=[\'<span unselectable="on" \'];a.push(\'style="position:absolute;padding:0;margin:0;border:0;\');a.push(\'width:0;height:0;-moz-user-select:none"></span>\');return a.join("")},draw:function(){if(this.V){var a=this.eS();this.V.style.left=a[0].x+"px";this.V.style.top=a[0].y+"px";this.zc&&(this.zc.style.left=a[0].x+"px",this.zc.style.top=a[0].y+"px"); this.Ld&&(this.Ld.style.left=a[1].x+"px",this.Ld.style.top=a[1].y+"px");this.zb!=p&&this.zb.Va()&&this.zb.sa();this.Ml()}},eS:function(){var a=this.z.ya||new L(0,0),b=this.z.vj.anchor||new L(0,0),c=this.map.Re(this.ha()),b=[new Q(c.x+a.width-b.width,c.y+a.height-b.height)];if(this.z.Nk){var d=this.z.Nk.anchor||new L(0,0);b[1]=new Q(c.x+a.width-d.width,c.y+a.height-d.height)}return b},wb:function(){this.map?(this.V=this.initialize(this.map),this.tq&&(this.dn(this.tq),delete this.tq)):delete this.tq}, remove:function(){this.dn(p);this.zc&&this.zc.parentNode&&this.zc.parentNode.removeChild(this.zc);this.Ld&&this.Ld.parentNode&&this.Ld.parentNode.removeChild(this.Ld);this.zb&&(this.zb.$a&&this.zb.$a===this)&&(this.Xc(),this.zb=p);this.bc=this.Zc=this.Ld=this.zc=p;if(this.z.label){var a=this.z.label;a.removeEventListener("remove",this.Ru);x.lang.Rw(a.ba);a.ON(p);a.V=p;this.z.label=p}gb.prototype.remove.call(this)},U:function(){gb.prototype.U.call(this);this.V&&x.D.U(this.V);this.zc&&x.D.U(this.zc); this.Ld&&x.D.U(this.Ld)},show:function(){gb.prototype.show.call(this);this.V&&x.D.show(this.V);this.zc&&x.D.show(this.zc);this.Ld&&x.D.show(this.Ld)},Tb:function(a){if(a instanceof nc||a instanceof oc)if(this.z.vj=a,this.map&&this.V&&this.zc){try{this.Zc&&(this.zc.removeChild(this.Zc),this.Zc=p),this.V.style.width=a.size.width+"px",this.V.style.height=a.size.height+"px"}catch(b){}if(this.z.vj){var c=this.Zc=K(a instanceof nc?"div":"canvas"),d=c.style;d.position="absolute";d.padding=d.margin="0";d.width= a.size.width+"px";d.height=a.size.height+"px";d.overflow="hidden";a instanceof oc?(c.width=a.size.width,c.height=a.size.height,a.wb(c)):(c.innerHTML=cg(a),c.cL=q);this.zc.appendChild(this.Zc)}this.draw()}},zy:function(a){if(a instanceof nc&&(this.z.Nk=a,this.map&&this.V&&this.zc)){this.Ld||(this.Ld=zb(this.map.Qf().FM,this.hU()));try{this.bc&&(this.Ld.removeChild(this.bc),this.bc=p),this.Ld.style.width=a.size.width+"px",this.Ld.style.height=a.size.height+"px"}catch(b){}if(this.z.Nk){var c=this.bc= K("div"),d=c.style;d.position="absolute";d.padding=d.margin="0";d.width=a.size.width+"px";d.height=a.size.height+"px";d.overflow="hidden";c.innerHTML=cg(a);c.cL=q;this.Ld.appendChild(this.bc)}this.draw()}},fn:function(a){if(a&&a instanceof rc){var b=this;I.load("marker",function(){b.aU(a)},o)}},aU:function(a){if(a instanceof rc){this.z.label=a;var b=this;this.z.label.Li||(this.z.label.Li=o,this.Ru=function(){b.z.label=p},this.z.label.addEventListener("remove",this.Ru));if(this.map){a.Ce(this.map); a.V?this.zc.appendChild(a.V):(a.V=zb(this.V,a.ua()),a.V.ba=a.ba);var c=a.V.style;c.left=a.z.ya.width+"px";c.top=a.z.ya.height+"px";a.ON(this)}}},vA:function(){function a(a,b){b.pixel=b.ib=a.ib;b.point=b.point=a.point;return b}function b(a){var b=a.clientX,c=a.clientY;a.changedTouches&&(b=a.changedTouches[0].clientX,c=a.changedTouches[0].clientY);return new Q(b,c)}if(this.V&&!this.V.Li){this.V.Li=o;var c=this.map,d=this,e=0,f=0,g=0,i={x:0,y:0};this.zs=function(a){if(d.z.Xb&&2!=a.button){d.ml=o;var i= c.ac(d.point),m=b(a);e=m.x-i.x;f=m.y-i.y;g=ab();d.map&&d.map.R&&(d.map.R.Yu=d);x.M(d.map.platform,"mousemove",d.kj);x.M(d.map.platform,"mouseup",d.jj);x.M(d.map.platform,"touchmove",d.kj);x.M(d.map.platform,"touchend",d.jj);d.V&&d.V.setCapture&&d.V.setCapture();d.V.style.cursor=d.z.Ed;"touchstart"==a.type&&ma(a)}};this.kj=function(g){if(d.ml&&(g=b(g),i=g=new Q(g.x-e,g.y-f),d.Uz=g,d.z.BN&&15<g.x&&g.x<d.map.width-15&&30<g.y&&g.y<d.map.height-15||!d.z.BN)){var l=d.map.ub(g),m={ib:g,point:l};d.zl=d.Al= 0;if(20>=g.x||g.x>=d.map.width-20||50>=g.y||g.y>=d.map.height-10){if(20>=g.x?d.zl=8:g.x>=d.map.width-20&&(d.zl=-8),50>=g.y?d.Al=8:g.y>=d.map.height-10&&(d.Al=-8),!d.Be)d.Be=setInterval(function(){c.yg(d.zl,d.Al,{noAnimation:o});var a=c.ub(d.Uz);d.sa(a)},30)}else d.Be&&(clearInterval(d.Be),d.Be=p),d.sa(l);d.el||(d.dispatchEvent(a(m,new N("ondragstart"))),d.el=o,d.z.uN&&(d.dn(3),T.PP(d.z.vj.anchor,d.zc)));d.dispatchEvent(a(m,new N("ondragging")))}};this.jj=function(){d.V&&d.V.releaseCapture&&d.V.releaseCapture(); d.ml=q;d.map&&d.map.R&&(d.map.R.Yu=p);x.cd(document,"mousemove",d.kj);x.cd(document,"mouseup",d.jj);x.cd(document,"touchmove",d.kj);x.cd(document,"touchend",d.jj);e=f=0;d.Be&&(clearInterval(d.Be),d.Be=p);if(100<=ab()-g&&(2<i.x||2<i.y))d.el=q,d.dispatchEvent(a({ib:d.map.ac(d.ha()),point:d.ha()},new N("ondragend"))),d.z.uN&&(d.dn(4),T.ET()),i.x=i.y=0;d.Ml();d.V&&(d.V.style.cursor=d.z.ff?"pointer":"")};x.M(this.V,"mousedown",this.zs);x.M(this.V,"touchstart",this.zs)}},sa:function(a){a instanceof H&& (this.point=this.z.point=new H(a.lng,a.lat),this.draw())},Ml:function(){var a;this.ml==o?a=T.kG:this.z.vE==o?a=T.Fu+(this.GG||0):Gb(this.zIndex)?a=this.zIndex:(a=0,this.map&&this.ha()&&(a=jc.ym(this.ha().lat)+this.z.WJ));this.V&&(this.V.style.zIndex=a);this.zc&&(this.zc.style.zIndex=a)},zi:function(a,b){this.z.vE=!!a;a&&(this.GG=b||0);this.Ml()},Dc:function(a){this.z.title=a+"";this.V&&(this.V.title=this.z.title)},Te:function(a){a instanceof L&&(this.z.ya=a,this.sa(this.ha()))},dn:function(a){var b= this;I.load("markeranimation",function(){b.ZT(a)},o)},ZT:function(a){if(this.Zc){this.wQ(a!=p);var b=Cc[a];b&&(b=b?b.options.GO:q,!G()||b?this.tR(a):this.sR(a))}},wQ:function(a){this.WG(this.Zc);this.WG(this.bc);if(a){if(this.Jj&&(this.Jj.stop(),this.Jj=p),this.Zc.style.top=this.Zc.style.left="0px",this.bc)this.bc.style.top=this.bc.style.left="0px"}else if(this.Jj){var b=this;ag(this.Jj,function(){b.Jj=p})}},sR:function(a){var b=Cc[a],a=T.KR(a);this.UI(this.Zc,a[0],b);this.UI(this.bc,a[1],b)},WG:function(a){a&& (a.style.WebkitAnimation="",x.cd(a,"webkitAnimationEnd",T.LG))},UI:function(a,b,c){a&&(x.M(a,"webkitAnimationEnd",T.LG),a.style.WebkitAnimation=b+" "+c.options.duration+"ms"+(c.options.loop==ub?" infinite":""))},tR:function(a){var b=this.Zc.style,c=q,d;this.bc&&(c=o,d=this.bc.style);var e=Cc[a],f=this,g=e.Bm.length,i=e.options.duration,k=f.Jj=new sb({duration:0,Io:ub}),l=e.Bm,m=e.Tt;b.top=l[0].translate[1]+"px";c&&(d.left=m[0].translate[0]+"px",d.top=m[0].translate[1]+"px");for(var n=1;n<g;n++)(function(){function a(){} var b=[l[n].translate[0]-l[n-1].translate[0],l[n].translate[1]-l[n-1].translate[1]],d=[l[n-1].translate[0],l[n-1].translate[1]];if(c)var y=[m[n].translate[0]-m[n-1].translate[0],m[n].translate[1]-m[n-1].translate[1]],C=[m[n-1].translate[0],m[n-1].translate[1]];var A=tb[l[n-1].gc];n==g-1&&(a=e.options.loop!=ub?function(){f.Jj=p}:function(){f.Jj.start()});k.add(new sb({duration:(e.Bm[n].$b-l[n-1].$b)*i,Ic:40,Io:ub,hc:A,ua:function(a){if(f.Zc)f.Zc.style.top=d[1]+Math.round(a*b[1])+"px";if(c&&f.bc){f.bc.style.left= C[0]+Math.round(a*y[0])+"px";f.bc.style.top=C[1]+Math.round(a*y[1])+"px"}},finish:a}))})();k.start()},Lp:function(a){if(a&&(this.z.rotation=a,this.map&&this.V&&this.zc))try{if(this.Zc){var b=this.Zc.style;b.webkitTransform="rotate("+this.z.rotation+"deg)";b.LY="rotate("+this.z.rotation+"deg)";b.transform="rotate("+this.z.rotation+"deg)";var c=Math.cos(this.z.rotation/180*Math.PI),d=-Math.sin(this.z.rotation/180*Math.PI),e=Math.sin(this.z.rotation/180*Math.PI),f=Math.cos(this.z.rotation/180*Math.PI); b.filter="progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\',M11="+c+",M12= "+d+",M21= "+e+",M22="+f+")";b.NY="progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\',M11="+c+",M12= "+d+",M21= "+e+",M22="+f+")";b.C4="bottom 50%";b.MY="bottom 50%";b.P_="bottom 50%"}this.bc&&(b=this.bc.style,b.webkitTransform="rotate("+this.z.rotation+"deg)",b.LY="rotate("+this.z.rotation+"deg)",b.transform="rotate("+this.z.rotation+"deg)",c=Math.cos(this.z.rotation/180*Math.PI),d=-Math.sin(this.z.rotation/ 180*Math.PI),e=Math.sin(this.z.rotation/180*Math.PI),f=Math.cos(this.z.rotation/180*Math.PI),b.filter="progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\',M11="+c+",M12= "+d+",M21= "+e+",M22="+f+")",b.NY="progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\',M11="+c+",M12= "+d+",M21= "+e+",M22="+f+")",b.w0="bottom 50%",b.MY="bottom 50%",b.P_="bottom 50%")}catch(g){}}}); S(Re,{setIcon:Re.Tb,setPosition:Re.sa,setOffset:Re.Te,setLabel:Re.fn,setTitle:Re.Dc,setTop:Re.zi,setAnimation:Re.dn,setShadow:Re.zy,show:Re.show,hide:Re.U,remove:Re.remove,setRotation:Re.Lp,getRotation:Re.yL});function cg(a){var b="",b="",c=a.imageUrl,d=a.imageOffset,e=a.imageSize;6==x.ea.la&&0<c.toLowerCase().indexOf(".png")?(b=["<div"],a.printImageUrl&&b.push(\' class="BMap_noprint"\'),b.push(\' style="width: 1px; height: 1px;\'),b.push("; left:"+d.width+"px"),b.push("; top:"+d.height+"px"),b.push("; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image,src=\'"+c+"\')"),b.push(\'; position:absolute;"></div>\'),a.printImageUrl&&(b.push(\'<img class="BMap_noscreen" style="display: block; border:none;margin-left:\'+ d.width+"px;"),b.push("margin-top:"+d.height+\'px;" src="\'+a.printImageUrl+\'" />\'))):(b=[\'<img src="\',c,\'" style="display: block; border:none;margin-left:\'+d.width+"px","; margin-top:"+d.height+"px","; "],e&&b.push("; width:"+e.width+"px; height:"+e.height+"px;"),b.push(\'" />\'));return b=b.join("")};x.extend(rc.prototype,{Hj:function(){var a=this.z,b=this.content,c=K("label",{"class":"BMapLabel",unselectable:"on"});a.title&&(c.title=a.title);var d=c.style;d.position="absolute";d.MozUserSelect="none";0==a.width||"auto"==a.width?d.display="inline":(d.width=a.width+"px",d.display="block",d.overflow="hidden");"true"==a.ff?d.cursor="pointer":x.ea.la||(d.cursor="inherit");c.innerHTML=b;this.map.Qf().zE.appendChild(c);this.V=c;this.Kd(a.Rp);return c},sa:function(a){a instanceof H&&!this.ox()&&(this.point= this.z.position=new H(a.lng,a.lat),this.draw())},draw:function(){if(this.V&&this.ha()&&!this.ox()){var a=this.z.ya||new L(0,0),b=this.map.Re(this.ha());this.V.style.left=b.x+a.width+"px";this.V.style.top=b.y+a.height+"px";this.Ml()}},wb:function(){this.map&&!this.qv&&(this.V=this.initialize(this.map),this.draw())},bd:function(a){this.content=a;this.V&&(this.V.innerHTML=a)},uF:function(a){0<=a&&1>=a&&(this.z.opacity=a);if(this.V){var b=this.V.style;b.opacity=a;b.filter="alpha(opacity="+100*a+")"}}, Te:function(a){a instanceof L&&(this.z.ya=new L(a.width,a.height),this.ox()&&this.V?(this.V.style.left=a.width+"px",this.V.style.top=a.height+"px"):this.draw())},Kd:function(a){a=a||{};this.z.Rp=x.extend(this.z.Rp,a);if(this.V)for(var b in a)try{this.V.style[b]=a[b]}catch(c){}},Dc:function(a){this.z.title=a+"";this.V&&(this.V.title=this.z.title)}});S(Se,{setStyle:Se.Kd,setContent:Se.bd,setPosition:Se.sa,setOffset:Se.Te,setTitle:Se.Dc}); ');
