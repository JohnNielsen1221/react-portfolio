(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/bright-headshot-small.cd74df75.jpg"},function(e){e.exports=JSON.parse('[{"id":1,"name":"D&D Initiative Tracker","image":"https://github.com/JohnNielsen1221/dd-initiative-tracker/blob/master/assets/images/ddscreenshot1.jpg?raw=true","github":"https://github.com/JohnNielsen1221/dd-initiative-tracker","deploy":"https://johnnielsen1221.github.io/dd-initiative-tracker/"},{"id":2,"name":"In Memorium","image":"https://github.com/JohnNielsen1221/memorial/blob/master/public/images/memorial-home.png?raw=true","github":" https://github.com/JohnNielsen1221/memorial/","deploy":" https://alwaysremember.herokuapp.com/"},{"id":3,"name":"Budget Tracker","image":"https://github.com/JohnNielsen1221/budget-tracker/blob/master/budget-tracker-ss.png?raw=true","github":"https://github.com/JohnNielsen1221/budget-tracker","deploy":"https://calm-gorge-84926.herokuapp.com/"},{"id":4,"name":"Weather Dashboard","image":"https://github.com/JohnNielsen1221/weather-dashboard/blob/master/assets/images/weather-dashboard-screenshot.png?raw=true","github":"https://github.com/JohnNielsen1221/weather-dashboard","deploy":"https://JohnNielsen1221.github.io/weather-dashboard/"},{"id":5,"name":"Tech Blog","image":"https://github.com/JohnNielsen1221/tech-blog/blob/master/public/screenshots/tech-ss-3.png?raw=true","github":"https://github.com/JohnNielsen1221/tech-blog","deploy":" https://sleepy-badlands-17864.herokuapp.com"},{"id":6,"name":"Portfolio Lite","image":"https://github.com/JohnNielsen1221/JHN-Portfolio/blob/master/portfolio-ss.png?raw=true","github":"https://github.com/JohnNielsen1221/JHN-Portfolio","deploy":"https://johnnielsen1221.github.io/JHN-Portfolio/"}]')},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),o=a.n(l),i=(a(13),a(1)),m=(a(14),a(6)),s=a.n(m),c=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("h1",{id:"about"},"Pleased to meet you. Hope you guessed my name..."),r.a.createElement("img",{src:s.a,className:"my-2",style:{width:"25%"},alt:"headshot"}),r.a.createElement("p",{className:"about"},'The standard Lorem Ipsum passage, used since the 1500s\n                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n\n                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'))};var u=function(e){e.navSelected;var t=e.setNavSelected;return r.a.createElement("header",{className:"flex-row px-2 "},r.a.createElement("h2",null,r.a.createElement("a",{className:"my-name",href:"#about"},"John Hayes Nielsen")),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{href:"#about",onClick:function(){return t("about")}},"About Me")),r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{href:"#portfolio",onClick:function(){return t("portfolio")}},"Portfolio")),r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{href:"#resume",onClick:function(){return t("resume")}},"Resume")),r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{href:"#contact",onClick:function(){return t("contact")}},"Contact")))))};var h=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{alt:e.name,src:e.image})),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,e.name),r.a.createElement("p",null,r.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.icons8.com/nolan/48/github.png",alt:"Repository",id:"project-icon"})),r.a.createElement("a",{href:e.deploy,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.icons8.com/nolan/48/monitor.png",alt:"Deployed Site",id:"project-icon"})))))},d=a(7);function p(e){return r.a.createElement("div",{className:"wrapper space-between"},e.children)}var g=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center portfolio-title"},"It's been a hard days night...")),r.a.createElement(p,null,d.map((function(e){return r.a.createElement(h,{key:e.id,name:e.name,image:e.image,github:e.github,deploy:e.deploy})}))))},b=a(2),E=a(3);var f=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],l=t[1],o=a.name,m=a.email,s=a.message,c=Object(n.useState)(""),u=Object(i.a)(c,2),h=u[0],d=u[1];function p(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));h||l(Object(E.a)(Object(E.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))}return r.a.createElement("section",null,r.a.createElement("h1",null,"Hello... Is it me you're looking for?"),r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)}},r.a.createElement("div",null,r.a.createElement("label",{className:"form-name",htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",defaultValue:o,onBlur:p,name:"name"})),r.a.createElement("div",null,r.a.createElement("label",{className:"form-email",htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",defaultValue:m,onBlur:p,name:"email"})),r.a.createElement("div",{className:"form-message"},r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",defaultValue:s,onBlur:p,rows:"5"})),h&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},h)),r.a.createElement("button",{"data-testid":"buttontag",type:"submit"},"Submit")),r.a.createElement("h2",{className:"email-contact"}," You may also reach me at johnhayesnielsen@gmail.com"))};var v=function(){return r.a.createElement("section",null,r.a.createElement("h1",{className:"resume-title"},"Taking care of business and working overtime. Workout..."),r.a.createElement("div",{className:"resume-page"},r.a.createElement("h4",null,"Download my ",r.a.createElement("a",{className:"resume-link",href:"https://github.com/JohnNielsen1221/react-portfolio/raw/master/src/assets/JohnHayesNielsenResume.pdf"},"resume")),r.a.createElement("br",null),r.a.createElement("div",{className:"proficiencies"},r.a.createElement("h3",null,"Front-End Proficiencies"),r.a.createElement("p",null,"HTML",r.a.createElement("br",null),"CSS (Bootstrap, Materialize)",r.a.createElement("br",null)," JavaScript",r.a.createElement("br",null)," jQuery",r.a.createElement("br",null)," React",r.a.createElement("br",null)," IndexedDB")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("h3",null,"Back-End Proficiencies"),r.a.createElement("p",null,"Node",r.a.createElement("br",null)," Express",r.a.createElement("br",null)," SQL (sqlite, mySQL)",r.a.createElement("br",null)," Sequelize",r.a.createElement("br",null)," NoSQL (MongoDB, Mongoose)",r.a.createElement("br",null)," API's (third-party, RESTful, server-side)"))))},N=function(){return r.a.createElement("footer",null,r.a.createElement("h3",{className:"footer-head"},"Don't stop believin'..."),r.a.createElement("a",{href:"https://github.com/JohnNielsen1221",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.icons8.com/nolan/64/github.png",alt:"Github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/johnhayesnielsen/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.icons8.com/nolan/64/linkedin.png",alt:"LinkedIn"})),r.a.createElement("a",{href:"https://www.facebook.com/john.h.nielsen.7",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.icons8.com/nolan/64/facebook-new.png",alt:"Facebook"})))};var w=function(){var e=Object(n.useState)("about"),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(u,{navSelected:a,setNavSelected:l}),r.a.createElement("main",null,function(){switch(a){case"about":return r.a.createElement(c,null);case"portfolio":return r.a.createElement(g,null);case"resume":return r.a.createElement(v,null);case"contact":return r.a.createElement(f,null);default:return r.a.createElement(c,null)}}()),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.753c10ed.chunk.js.map