(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),i=n(2),s=n(1),r=(n(9),["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]),l=(n(10),n(0)),u=function(e){var t=e.images,n=e.itemWidth,a=e.frameSize,c=e.step,r=e.duration,u=Object(s.useRef)(null),o=Object(s.useState)(0),m=Object(i.a)(o,2),j=m[0],g=m[1];return Object(l.jsxs)("div",{className:"Carousel",children:[Object(l.jsx)("button",{type:"button",onClick:function(){u.current&&(u.current.scrollLeft-=n*c,g(j-n*c))},className:"Carousel__button",disabled:0===j,children:"Prev"}),Object(l.jsx)("div",{className:"Carousel__container",style:{width:"".concat(n*a,"px")},children:Object(l.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(-".concat(j,"px)"),transition:"transform ".concat(r,"ms ease-in-out")},ref:u,children:t.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)("img",{src:e,alt:"".concat(t+1),style:{width:"".concat(n,"px")}})},e)}))})}),Object(l.jsx)("button",{"data-cy":"next",type:"button",onClick:function(){u.current&&(u.current.scrollLeft+=n*c,g(j+n*c))},className:"Carousel__button",disabled:j>=n*(t.length-a),children:"Next"})]})},o=(n(12),function(e){var t=e.images,n=e.itemWidth,a=e.itemWithChange,c=e.frameSize,i=e.frameSizeChange,s=e.step,r=e.stepChange,u=e.duration,o=e.durationChange;return Object(l.jsxs)("div",{className:"Settings",children:[Object(l.jsx)("h2",{children:"Settings"}),Object(l.jsxs)("div",{className:"Settings__container",children:[Object(l.jsxs)("div",{className:"Setting__block",children:[Object(l.jsx)("h3",{children:"Item width: ".concat(n,"px")}),Object(l.jsx)("input",{type:"number",className:"Setting__input",value:n,min:50,step:100,onChange:function(e){return a(+e.target.value)}})]}),Object(l.jsxs)("div",{className:"Setting__block",children:[Object(l.jsx)("h3",{children:"Image quantity: ".concat(c)}),Object(l.jsx)("input",{type:"number",className:"Setting__input",value:c,min:1,max:t.length,onChange:function(e){return i(+e.target.value)}})]}),Object(l.jsxs)("div",{className:"Setting__block",children:[Object(l.jsx)("h3",{children:"Step: ".concat(s)}),Object(l.jsx)("input",{type:"number",className:"Setting__input",value:s,min:1,max:t.length,onChange:function(e){return r(+e.target.value)}})]}),Object(l.jsxs)("div",{className:"Setting__block",children:[Object(l.jsx)("h3",{children:"Animation-duration: ".concat(u,"ms")}),Object(l.jsx)("input",{type:"number",className:"Setting__input",value:u,min:100,max:5e3,step:100,onChange:function(e){return o(+e.target.value)}})]})]})]})}),m=function(){var e=Object(s.useState)(130),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(3),m=Object(i.a)(c,2),j=m[0],g=m[1],b=Object(s.useState)(3),h=Object(i.a)(b,2),d=h[0],p=h[1],O=Object(s.useState)(1e3),x=Object(i.a)(O,2),_=x[0],f=x[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{"data-cy":"title",className:"App__title",children:"Carousel with ".concat(r.length," images")}),Object(l.jsx)(o,{images:r,itemWidth:n,itemWithChange:a,frameSize:j,frameSizeChange:g,step:d,stepChange:p,duration:_,durationChange:f}),Object(l.jsx)(u,{images:r,itemWidth:n,frameSize:j,step:d,duration:_})]})};c.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.bc009b0b.chunk.js.map