(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/bright-headshot-small.cd74df75.jpg"},function(e){e.exports=JSON.parse('[{"id":1,"name":"D&D Initiative Tracker","image":"https://github.com/JohnNielsen1221/dd-initiative-tracker/blob/master/assets/images/ddscreenshot1.jpg?raw=true","github":"https://github.com/JohnNielsen1221/dd-initiative-tracker","deploy":"https://johnnielsen1221.github.io/dd-initiative-tracker/","description":"Keep the battle in control","skills":"HTML, CSS, JS"},{"id":2,"name":"In Memorium","image":"https://github.com/JohnNielsen1221/memorial/blob/master/public/images/memorial-home.png?raw=true","github":" https://github.com/JohnNielsen1221/memorial/","deploy":" https://alwaysremember.herokuapp.com/","description":"Remember those you love","skills":"JS, AWS, MySQL, Express"},{"id":3,"name":"Budget Tracker","image":"https://github.com/JohnNielsen1221/budget-tracker/blob/master/budget-tracker-ss.png?raw=true","github":"https://github.com/JohnNielsen1221/budget-tracker","deploy":"https://calm-gorge-84926.herokuapp.com/","description":"Know what you spend","skills":"JS, MongoDB, Mongoose"},{"id":4,"name":"RoloDeck","image":"https://github.com/TRemigi/Roll-a-Jazz/blob/master/client/src/assets/images/dark-rolo-ss.png?raw=true","github":"https://github.com/JohnNielsen1221/Roll-a-Jazz","deploy":"https://rolodeck.herokuapp.com/","description":"Connect like a professional","skills":"MERN, JS, CSS"},{"id":5,"name":"Tech Blog","image":"https://github.com/JohnNielsen1221/tech-blog/blob/master/public/screenshots/tech-ss-3.png?raw=true","github":"https://github.com/JohnNielsen1221/tech-blog","deploy":" https://sleepy-badlands-17864.herokuapp.com","description":"Keep up with the tech","skills":"JS, MySQL, Express, Handlebars"},{"id":6,"name":"Portfolio Lite","image":"https://github.com/JohnNielsen1221/JHN-Portfolio/blob/master/portfolio-ss.png?raw=true","github":"https://github.com/JohnNielsen1221/JHN-Portfolio","deploy":"https://johnnielsen1221.github.io/JHN-Portfolio/","description":"Look at me... again","skills":"HTML, CSS, JS"}]')},,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),o=a.n(r),i=(a(14),a(1)),s=(a(15),a(6)),c=a.n(s),m=function(){return l.a.createElement("section",{className:"my-5"},l.a.createElement("h1",{id:"about"},"Pleased to meet you. Hope you guessed my name..."),l.a.createElement("img",{src:c.a,className:"my-2",style:{width:"25%"},alt:"headshot"}),l.a.createElement("p",{className:"about"},"While everything went bonkers in 2020, it gave me the opportunity to step back and see where I wanted to be and what I wanted to do. I love learning. I love teaching. I love collaberating. It seems that the things I love all lead to Web Development. So here I am, fresh off a BootCamp and ready to apply my continuingly growing skills.\n\n                As I have progressed through my career as an adult human, I have found that while all my past positions have been connected where one leads to the other, they have all been very different. Different in their duties; Different in their fields; Different in their environments. This diverse employment history has been a blessing and a curse. On one hand, I know a lot of things about a lot of things. On the other, however, it's been hard for me to decide how I want to proceed with my professional career moving forward.\n                \n                Enter Web Development."))};var u=function(e){e.navSelected;var t=e.setNavSelected;return l.a.createElement("header",{className:"flex-row px-2 "},l.a.createElement("h2",null,l.a.createElement("a",{className:"my-name",href:"#about"},"John Hayes Nielsen")),l.a.createElement("nav",null,l.a.createElement("ul",{className:"flex-row"},l.a.createElement("li",{className:"mx-2"},l.a.createElement("a",{href:"#about",onClick:function(){return t("about")}},"About Me")),l.a.createElement("li",{className:"mx-2"},l.a.createElement("a",{href:"#portfolio",onClick:function(){return t("portfolio")}},"Portfolio")),l.a.createElement("li",{className:"mx-2"},l.a.createElement("a",{href:"#resume",onClick:function(){return t("resume")}},"Resume")),l.a.createElement("li",{className:"mx-2"},l.a.createElement("a",{href:"#contact",onClick:function(){return t("contact")}},"Contact")))))};var h=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{alt:e.name,src:e.image})),l.a.createElement("div",{className:"card-content"},l.a.createElement("p",{className:"card-title"},e.name),l.a.createElement("p",null,e.description),l.a.createElement("p",null,e.skills),l.a.createElement("p",null,l.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://img.icons8.com/nolan/48/github.png",alt:"Repository",id:"project-icon"})),l.a.createElement("a",{href:e.deploy,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://img.icons8.com/nolan/48/monitor.png",alt:"Deployed Site",id:"project-icon"})))))},p=a(7);function d(e){return l.a.createElement("div",{className:"wrapper space-between"},e.children)}var g=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"text-center portfolio-title"},"It's been a hard days night...")),l.a.createElement(d,null,p.map((function(e){return l.a.createElement(h,{key:e.id,name:e.name,image:e.image,description:e.description,skills:e.skills,github:e.github,deploy:e.deploy})}))))},b=a(2),f=a(3),E=a(8),v=a.n(E);var k=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=a.name,s=a.email,c=a.message,m=Object(n.useState)(""),u=Object(i.a)(m,2),h=u[0],p=u[1],d=Object(n.useState)(""),g=Object(i.a)(d,2),E=g[0],k=g[1];function y(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),p(t?"":"Your email is invalid.")}else e.target.value.length?p(""):p("".concat(e.target.name," is required."));h||r(Object(f.a)(Object(f.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))}return l.a.createElement("section",null,l.a.createElement("h1",null,"Hello... Is it me you're looking for?"),l.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),Object.values(a).filter((function(e){return e})).length<1?p("You must enter a valid response for all fields"):(k("Thank you for your email! I will be in touch shortly."),console.log(a),v.a.sendForm("reactportfolio","reacttemplateid",e.target,"user_nQdRIXM2uJaHbqFwNIvI6").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),r({name:"",email:"",message:""}))}},l.a.createElement("div",null,l.a.createElement("label",{className:"form-name",htmlFor:"name"},"Name:"),l.a.createElement("input",{type:"text",defaultValue:o,onBlur:y,name:"name"})),l.a.createElement("div",null,l.a.createElement("label",{className:"form-email",htmlFor:"email"},"Email address:"),l.a.createElement("input",{type:"email",defaultValue:s,onBlur:y,name:"email"})),l.a.createElement("div",{className:"form-message"},l.a.createElement("label",{htmlFor:"message"},"Message:"),l.a.createElement("textarea",{name:"message",defaultValue:c,onBlur:y,rows:"5"})),h&&l.a.createElement("div",null,l.a.createElement("p",{className:"error-text"},h)),E&&l.a.createElement("div",null,l.a.createElement("p",{className:"error-text"},E)),l.a.createElement("button",{"data-testid":"buttontag",type:"submit"},"Submit")),l.a.createElement("h2",{className:"email-contact"}," You may also reach me at johnhayesnielsen@gmail.com"))};var y=function(){return l.a.createElement("section",null,l.a.createElement("h1",{className:"resume-title"},"Taking care of business and working overtime. Workout..."),l.a.createElement("div",{className:"resume-page"},l.a.createElement("h4",null,"Download my ",l.a.createElement("a",{className:"resume-link",href:"https://github.com/JohnNielsen1221/react-portfolio/blob/master/src/assets/JohnHayesNielsenResume.pdf"},"resume")),l.a.createElement("br",null),l.a.createElement("div",{className:"proficiencies"},l.a.createElement("h3",null,"Front-End Proficiencies"),l.a.createElement("p",null,"HTML",l.a.createElement("br",null),"CSS (Bootstrap, Materialize, custom)",l.a.createElement("br",null)," JavaScript",l.a.createElement("br",null)," jQuery",l.a.createElement("br",null)," React",l.a.createElement("br",null)," IndexedDB")),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Back-End Proficiencies"),l.a.createElement("p",null,"Node",l.a.createElement("br",null)," Express",l.a.createElement("br",null)," SQL (sqlite, mySQL)",l.a.createElement("br",null)," Sequelize",l.a.createElement("br",null)," NoSQL (MongoDB, Mongoose)",l.a.createElement("br",null)," API's"))))},N=function(){return l.a.createElement("footer",null,l.a.createElement("h3",{className:"footer-head"},"Don't stop believin'..."),l.a.createElement("a",{href:"https://github.com/JohnNielsen1221",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://img.icons8.com/nolan/64/github.png",alt:"Github"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/johnhayesnielsen/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://img.icons8.com/nolan/64/linkedin.png",alt:"LinkedIn"})),l.a.createElement("a",{href:"https://www.facebook.com/john.h.nielsen.7",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://img.icons8.com/nolan/64/facebook-new.png",alt:"Facebook"})))};var w=function(){var e=Object(n.useState)("about"),t=Object(i.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement(u,{navSelected:a,setNavSelected:r}),l.a.createElement("main",null,function(){switch(a){case"about":return l.a.createElement(m,null);case"portfolio":return l.a.createElement(g,null);case"resume":return l.a.createElement(y,null);case"contact":return l.a.createElement(k,null);default:return l.a.createElement(m,null)}}()),l.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.0116b0df.chunk.js.map