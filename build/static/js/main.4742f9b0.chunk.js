(this["webpackJsonpguild-chat-app"]=this["webpackJsonpguild-chat-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(35)},23:function(e,t,a){},24:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(17),c=a.n(r),i=(a(23),a(24),a(8)),u=a(9),o=a(11),l=a(10),p=a(12);var h=function(e){var t=e.messageItem,a=e.currentUser,n=t.message,r=t.user;return s.a.createElement("span",{className:a===r?"sentMessage chatMessage":"receivedMessage chatMessage"},n)},m=a(14);m.initializeApp({apiKey:"AIzaSyDGT3qQa-brMROyi0wxdaFPao2Yo9XmMGs",authDomain:"guild-chat-app.firebaseapp.com",databaseURL:"https://guild-chat-app.firebaseio.com",projectId:"guild-chat-app",storageBucket:"guild-chat-app.appspot.com",messagingSenderId:"989822746315",appId:"1:989822746315:web:d16c3ebb698c87f133254e"});var g=m.database().ref("/"),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={value:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"sendMessage",value:function(e){g.push({user:e,message:this.state.value})}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleOnClick",value:function(e){this.sendMessage(e),this.setState({value:""})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chatInputWrapper"},s.a.createElement("input",{type:"text",id:"chatInput",value:this.state.value,onChange:function(t){return e.handleChange(t)}}),s.a.createElement("button",{onClick:function(){return e.handleOnClick(e.props.currentUser)}},"Submit"))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={currentUser:"Jamie",messages:{}},a.getMessages(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getMessages",value:function(){var e=this;g.on("value",(function(t){e.setState({messages:t.val()})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chatApp"},Object.keys(this.state.messages).map((function(t){return s.a.createElement(h,{key:e.state.messages[t].message,messageItem:e.state.messages[t],currentUser:e.state.currentUser})})),s.a.createElement(d,{currentUser:this.state.currentUser}))}}]),t}(n.Component);var f=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.4742f9b0.chunk.js.map