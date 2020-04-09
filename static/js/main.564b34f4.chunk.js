(this["webpackJsonpcolor-gen"]=this["webpackJsonpcolor-gen"]||[]).push([[0],{23:function(n,e,t){n.exports=t(38)},28:function(n,e,t){},37:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(10),i=t.n(o),c=(t(28),t(1)),l=t(18),s=t(2),u=a.a.createContext({colorList:[],savedPalettes:[],currentIndex:0,isMainPaletteOpen:!1,firstLoad:!0,forceNewColor:!1}),d=t(3);function f(n,e){switch(e.type){case"NEW_COLOR":case"CHANGE_INDEX":case"UPDATE_PALETTE_LIST":case"TOGGLE_MAIN_PALETTE":case"SAVE_PALETTE":return Object(d.a)({},e.payload);default:return n}}var p=t(4);function m(){var n=Object(c.a)(["\n    height: 40px;\n    width: 40px;\n    margin: 0.5%;\n    background-color: ",";\n    border: 1.5px solid ",";\n    border-radius: 12px;\n    transform: translateZ(0);\n    transition: transform 0.12s ease;\n    &:hover{\n        cursor: pointer;\n        transform: scale(1.08);\n        /* background-color: cadetblue; */\n    }\n    "]);return m=function(){return n},n}var b=function(n){var e=s.a.div(m(),n.color,(function(){var e=function(n){return n<0&&(n=0),n},t=e(parseInt(n.color.substring(1,3),16)-20),r=e(parseInt(n.color.substring(3,5),16)-20),a=e(parseInt(n.color.substring(5,7),16)-20);return"rgba(".concat(t,", ").concat(r,", ").concat(a,", 0.2)")}));return a.a.createElement(e,null)},v=t(13),h=t(14),x=t(19),g=t(15),E=t(22);function y(){var n=Object(c.a)(["\n            font-size: ",";\n            height: 100%;\n            color: ",";\n            /* border: 1px solid black; */\n            "]);return y=function(){return n},n}function O(){var n=Object(c.a)(["\n            background: none;\n            border: none;\n            outline: none;\n            text-align: center;\n            margin: 2%;\n            padding: 0!important;\n            display: flex;\n            align-items: center;\n            transition: transform 0.12s ease;\n            height: 100%;\n            &:hover {\n                cursor: pointer;\n                transform: scale(1.20);\n            }\n        "]);return O=function(){return n},n}var j=function(n){function e(){return Object(v.a)(this,e),Object(x.a)(this,Object(g.a)(e).apply(this,arguments))}return Object(E.a)(e,n),Object(h.a)(e,[{key:"render",value:function(){var n=s.a.button(O()),e=s.a.i(y(),this.props.fontSize||"28px",this.props.color);return a.a.createElement(n,{onClick:this.props.action,disabled:this.props.disabled},a.a.createElement(e,{className:this.props.className}))}}]),e}(r.Component);function w(){var n=Object(c.a)(["\nheight: 90%;\nwidth: 98%;\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nalign-items: center;\n/* border-top: 1px solid rgba(0, 0, 0, 0.2); */\nborder-bottom: 1px solid rgba(0, 0, 0, 0.2);\nborder-radius: 10px;\n/* background-color: white; */\n"]);return w=function(){return n},n}function N(){var n=Object(c.a)(["\nmin-height: 54px;\nmin-width: 97%; /* 220px */\nmax-height: 7vh;\n/* max-width: 80%; */\n/* border: 1px solid blue; */\nborder-radius: 15px;\nmargin-bottom: 0.5vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n/* background-color: red; */\n"]);return N=function(){return n},n}var I=s.a.div(N()),C=s.a.div(w());function L(n){var e=Object(r.useContext)(u),t=e.state,o=e.dispatch,i=n.details.mainColor,c=n.details.palette,l=n.details.isPaletteOpen,s=function(){var e=Object(p.a)(t.savedPalettes).map((function(e){return e.id===n.details.id&&(e.isPaletteOpen=!e.isPaletteOpen),e}));o({type:"UPDATE_PALETTE_LIST",payload:Object(d.a)({},t,{savedPalettes:e})})},f=a.a.createElement(C,null,c.map((function(n){return a.a.createElement(b,{key:n,color:n})})),a.a.createElement(j,{className:"fas fa-angle-left",fontSize:"23px",action:s})),m=a.a.createElement(C,null,a.a.createElement(b,{color:i}),a.a.createElement("p",{style:{fontSize:"15px"}},i),a.a.createElement("span",{style:{width:"21%",display:"flex",justifyContent:"space-between",alignItems:"center",marginRight:"5px"}},a.a.createElement(j,{className:"far fa-trash-alt",action:function(){var e=Object(p.a)(t.savedPalettes).filter((function(e){return e.id!==n.details.id}));o({type:"UPDATE_PALETTE_LIST",payload:Object(d.a)({},t,{savedPalettes:e})})},fontSize:"16px",color:"#ee1169"}),a.a.createElement(j,{className:"fas fa-angle-right",fontSize:"21px",action:s})));return a.a.createElement(I,null,l?f:m)}function P(){var n=Object(c.a)(["\n    padding: 2vh 0 2vh 0;\n    min-width: 80%;\n    min-height: 20%;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: auto;\n    /* background-color: lavender; */\n    "]);return P=function(){return n},n}function k(){var n=Object(c.a)(["\n    padding: 2vh 0 7vh 0;\n    width: 20%;\n    min-width: 260px;\n    display: flex;\n    flex-direction: column;\n    justify-content: stretch;\n    align-items: center;\n    /* border: 1px solid black; */\n"]);return k=function(){return n},n}var T=s.a.div(k()),A=s.a.div(P());function _(){var n,e=Object(r.useContext)(u).state;try{n=e.savedPalettes}catch(t){console.log(t)}return a.a.createElement(T,null,a.a.createElement("h2",{className:"title"},"Saved List"),a.a.createElement(A,null,n&&n.map((function(n){return a.a.createElement(L,{key:n.id,details:n})}))))}function S(){var n=Object(c.a)(["\n    height: 300px;\n    width: 300px;\n    background-color: ",";\n    border: 3px solid ",";\n    border-radius: 25%;\n    display: inline-block;\n"]);return S=function(){return n},n}var G=s.a.div(S(),(function(n){return n.color}),(function(n){var e,t=function(n){return n<0&&(n=0),n};if(n.color){var r=t(parseInt(n.color.substring(1,3),16)-20),a=t(parseInt(n.color.substring(3,5),16)-20),o=t(parseInt(n.color.substring(5,7),16)-20);e="rgba(".concat(r,", ").concat(a,", ").concat(o,", 0.2)")}else e="white";return e}));function z(){var n,e=Object(r.useContext)(u).state;try{n=e.colorList[e.currentIndex].mainColor}catch(t){n=null}return a.a.createElement(G,{color:n})}function M(){var n=Object(c.a)(["\nwidth: 100%;\nheight: 80%;\n\ndisplay: flex;\nflex-direction: row;\njustify-content: space-around;\nalign-items: center;\n"]);return M=function(){return n},n}function D(){var n=Object(c.a)(["\nwidth: 80%;\nheight: 55px;\nmargin: 5% auto 5% auto;\n\ndisplay: flex;\nalign-items: center;\n/* border: 1px solid black; */\n"]);return D=function(){return n},n}var R=s.a.div(D()),H=s.a.div(M());function W(){var n=Object(r.useContext)(u),e=n.state,t=n.dispatch,o=[],i=null;try{o=e.colorList[e.currentIndex].palette,i=e.colorList[e.currentIndex].mainColor}catch(m){o=[],i=null}var c=e.isMainPaletteOpen,l=Object(r.useRef)(),s=a.a.createElement(H,{ref:l},o.map((function(n){return a.a.createElement(b,{key:n,color:n})})));Object(r.useEffect)((function(){return document.addEventListener("mousedown",f),function(){document.removeEventListener("mousedown",f)}}));var f=function(n){l.current&&l.current.contains(n.target)&&t({type:"TOGGLE_MAIN_PALETTE",payload:Object(d.a)({},e,{isMainPaletteOpen:!1})})};return a.a.createElement(R,null,c?s:a.a.createElement(H,null,a.a.createElement(j,{className:"fas fa-angle-right",action:function(){t({type:"TOGGLE_MAIN_PALETTE",payload:Object(d.a)({},e,{isMainPaletteOpen:!0})})}}),a.a.createElement("p",null,i),a.a.createElement(j,{className:"fas fa-plus-circle",action:function(){var n=e.colorList[e.currentIndex];if(e.savedPalettes.find((function(e){return e.id===n.id})))alert("Palette with ".concat(n.mainColor," as main color is already in the list."));else{var r=Object(d.a)({},n,{isPaletteOpen:!1}),a=[].concat(Object(p.a)(e.savedPalettes),[r]);t({type:"SAVE_PALETTE",payload:Object(d.a)({},e,{savedPalettes:a,forceNewColor:!0})})}}})))}var X=t(5),J=t.n(X),U=t(16),B=t.n(U),V=t(17),Z=t.n(V);function $(){var n=Object(c.a)(["\n  font-size: 18px;\n  border-radius: 25px;\n  padding: 15px;\n  outline: none;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return $=function(){return n},n}function q(){var n=Object(c.a)(['\n  width: 100%;\n  display: "block";\n  font-size: "32px";\n  /* border: 1px solid black; */\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n']);return q=function(){return n},n}var F=s.a.span(q()),K=s.a.button($());var Q=function(){var n=Object(r.useContext)(u),e=n.state,t=n.dispatch,o=Object(r.useCallback)((function(){var n,r,a,o,l,s,u,f,m;return J.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:return n="#"+Math.random().toString(16).slice(2,8),r=parseInt(n.substring(1,3),16),a=parseInt(n.substring(3,5),16),o=parseInt(n.substring(5,7),16),b.next=6,J.a.awrap(i(r,a,o));case 6:l=b.sent,s=c(l.result),n=s[0],u={id:B()(),mainColor:n,palette:s},f=[].concat(Object(p.a)(e.colorList),[u]),m=f.length-1,t({type:"NEW_COLOR",payload:Object(d.a)({},e,{colorList:f,currentIndex:m,firstLoad:!1,forceNewColor:!1})});case 13:case"end":return b.stop()}}))}),[e,t]);Object(r.useEffect)((function(){return e.firstLoad&&o(),e.forceNewColor&&o(),function(){}}),[e.firstLoad,e.forceNewColor,o]);var i=function(n,e,t){var r,a;return J.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return"http://colormind.io/api/",r={model:"default",input:[[n,e,t],"N","N","N","N"]},o.next=4,J.a.awrap(Z()("http://colormind.io/api/",{method:"POST",referrerPolicy:"no-referrer",body:JSON.stringify(r)}));case 4:return a=o.sent,o.abrupt("return",a.json());case 6:case"end":return o.stop()}}))},c=function(n){var e=[];return n.forEach((function(n){var t="#";n.forEach((function(n){var e=t+n.toString(16);e.length%2===0&&(e=t+"0"+n.toString(16)),t=e})),e.push(t)})),e};return a.a.createElement(F,null,a.a.createElement(j,{className:"fas fa-arrow-left",action:function(){var n=e.currentIndex-1;t({type:"CHANGE_INDEX",payload:Object(d.a)({},e,{currentIndex:n})})},disabled:0===e.currentIndex}),a.a.createElement(K,{onClick:o},"Random Color"),a.a.createElement(j,{className:"fas fa-arrow-right",action:function(){var n=e.currentIndex+1;t({type:"CHANGE_INDEX",payload:Object(d.a)({},e,{currentIndex:n})})},disabled:e.currentIndex===e.colorList.length-1}))};function Y(){var n=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    margin: auto;\n    padding: 2%;\n    text-align: center;\n    /* border: 2px solid blue; */\n"]);return Y=function(){return n},n}var nn=s.a.div(Y());function en(){return a.a.createElement(nn,null,a.a.createElement("h2",{style:{fontSize:"38px"},className:"title"},"Main Color"),a.a.createElement(z,null),a.a.createElement(W,null),a.a.createElement(Q,null))}function tn(){var n=Object(c.a)(["\n  min-width: 35px;\n  min-height: 35px;\n  max-width: 2.4vw;\n  max-height: 2.4vw;\n  margin: 3px;\n  align-self: center;\n  background-color: ",";\n  border-radius: 25%;\n  transition: transform 0.12s ease;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(c.a)(["\n  min-height: 26%;\n  /* margin-right: 0.5vw; */\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  overflow-y: auto;\n"]);return rn=function(){return n},n}function an(){var n=Object(c.a)(["\n  width: 35%;\n  margin-right: 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  /* border: 1px solid purple; */\n"]);return an=function(){return n},n}function on(){var n=Object(c.a)(["\n  padding: 2vh 0 7vh 0;\n  min-width: 20%;\n  /* border-left: 1px solid orange; */\n  display: flex;\n  justify-content: flex-end;\n"]);return on=function(){return n},n}var cn=s.a.div(on()),ln=s.a.div(an()),sn=s.a.div(rn()),un=s.a.div(tn(),(function(n){return n.color}));function dn(){var n=Object(r.useContext)(u),e=n.state,t=n.dispatch,o=e.colorList;return a.a.createElement(cn,null,a.a.createElement(ln,null,a.a.createElement("h2",{className:"title"},"History"),a.a.createElement(sn,null,o.map((function(n){var r=o.indexOf(n);return a.a.createElement(un,{key:n.id,color:n.mainColor,onClick:function(){return function(n){t({type:"CHANGE_INDEX",payload:Object(d.a)({},e,{currentIndex:n})})}(r)}})})))))}t(37);function fn(){var n=Object(c.a)(["\n    height: 100vh;\n    display: flex;\n  "]);return fn=function(){return n},n}var pn=function(){var n=Object(r.useContext)(u),e=Object(r.useReducer)(f,n),t=Object(l.a)(e,2),o=t[0],i=t[1],c=s.a.div(fn());return a.a.createElement(u.Provider,{value:{state:o,dispatch:i}},a.a.createElement(c,{className:"App"},a.a.createElement(_,null),a.a.createElement(en,null),a.a.createElement(dn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(pn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.564b34f4.chunk.js.map