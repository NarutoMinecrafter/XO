(this.webpackJsonpxo=this.webpackJsonpxo||[]).push([[0],{11:function(e,t,c){},5:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),r=c(1),a=c(4),i=c.n(a),o=(c(11),{}),j=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],u=function(){var e=Object(r.useState)(!0),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(r.useState)(!1),o=Object(s.a)(i,2),j=o[0],u=o[1];Object(r.useEffect)((function(){u(!1)}),[j]);return j?Object(n.jsx)("div",{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("center",{className:"App",children:[0,1,2,3,4,5,6,7,8].map((function(e){return Object(n.jsx)(b,{id:e,setEnd:u,editor:function(){a(!c)},setPlayer:a,player:c},e)}))}),Object(n.jsx)("center",{children:Object(n.jsx)("button",{onClick:function(){u(!0),a(!0)},className:"newGame",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"})})]})},b=function(e){var t=e.editor,c=e.player,a=e.id,i=e.setEnd,u=e.setPlayer,b=Object(r.useState)(),d=Object(s.a)(b,2),l=d[0],f=d[1];return o[a]=l,Object(r.useEffect)((function(){j.forEach((function(e){o[e[0]]&&o[e[1]]&&o[e[2]]&&o[e[0]]===o[e[1]]&&o[e[1]]===o[e[2]]&&(alert("\u0412\u044b\u0438\u0433\u0440\u0430\u043b \u0438\u0433\u0440\u043e\u043a "+l),u(!0),i(!0))}))}),[l]),Object(n.jsx)("button",{className:"xo",onClick:function(){t(),f(!0===c?"\u2716":"\u3007")},disabled:l,children:l})};i.a.render(Object(n.jsx)(u,{}),document.getElementById("root"))}},[[5,1,2]]]);
//# sourceMappingURL=main.57d414e8.chunk.js.map