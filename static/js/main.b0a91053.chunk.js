(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],[,,,,,function(e,t,c){},,,,,,function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/bell-start.d01df824.mp3"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/bell-finish.6b59c479.mp3"},function(e,t,c){"use strict";c.r(t);c(5);var n=c(0),o=c.n(n),s=c(4),r=c.n(s),a=c(2);var i=function(e){return Math.floor(e).toString().padStart(2,"0")};function u(e){var t=i(e/3600),c=i(e/60%60),n=i(e%60%60);return"".concat(t,":").concat(c,":").concat(n)}var l=c(1);function j(e){return Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:e.onClick,className:e.className,children:e.text})})}function b(e){var t=i(e/60%60),c=i(e%60%60);return"".concat(t,":").concat(c)}function d(e){return Object(l.jsx)("div",{className:"timer",children:b(e.mainTime)})}var m=c(11),O=c(12),f=new Audio(m),h=new Audio(O);function p(e){var t=Object(n.useState)(e.pomodoroTime),c=Object(a.a)(t,2),o=c[0],s=c[1],r=Object(n.useState)(!1),i=Object(a.a)(r,2),b=i[0],m=i[1],O=Object(n.useState)(!1),p=Object(a.a)(O,2),x=p[0],v=p[1],k=Object(n.useState)(!1),y=Object(a.a)(k,2),S=y[0],g=y[1],N=Object(n.useState)(new Array(e.cycles-1).fill(!0)),T=Object(a.a)(N,2),w=T[0],C=T[1],R=Object(n.useState)(0),A=Object(a.a)(R,2),E=A[0],I=A[1],P=Object(n.useState)(0),J=Object(a.a)(P,2),L=J[0],M=J[1],W=Object(n.useState)(0),B=Object(a.a)(W,2),H=B[0],Y=B[1];!function(e,t){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){c.current&&c.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){s(o-1),x&&M(L+1)}),b?1e3:null);var q=Object(n.useCallback)((function(){m(!0),v(!0),g(!1),s(e.pomodoroTime),f.play}),[m,v,g,s,e.pomodoroTime]),z=Object(n.useCallback)((function(t){m(!0),v(!1),g(!0),t&&e.longRestTime,e.shortRestTime,h.play}),[m,v,g,s,s]);return Object(n.useEffect)((function(){return x?document.body.classList.add("working"):S?document.body.classList.remove("working"):void(o>0||(x&&w.length>0&&(z(!1),w.pop()),x&&w.length<=0&&(z(!0),C(new Array(e.cycles-1).fill(!0)),I(E+1)),x&&Y(H+1),S&&q()))}),[x,S,o,z,q,C,H,e.cycles]),Object(l.jsxs)("div",{className:"pomodoro",children:[Object(l.jsxs)("h2",{children:["You","'","re ",x?"Working":"Resting"]}),Object(l.jsx)(d,{mainTime:o}),Object(l.jsxs)("div",{className:"controls",children:[Object(l.jsx)(j,{text:"Work",className:"button",onClick:function(){return q()}}),Object(l.jsx)(j,{text:"Rest",className:"button",onClick:function(){return z(!1)}}),Object(l.jsx)(j,{text:b?"Pause":"Play",className:x||S?"":"hidden",onClick:function(){return m(!b)}})]}),Object(l.jsxs)("div",{className:"details",children:[Object(l.jsxs)("p",{children:["Ciclos conclu\xeddos: ",E]}),Object(l.jsxs)("p",{children:["Horas trabalhadas: ",u(L)]}),Object(l.jsxs)("p",{children:["Pomodoros feitos: ",H]})]})]})}var x=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(p,{pomodoroTime:1500,shortRestTime:300,longRestTime:900,cycles:4})})};r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.b0a91053.chunk.js.map