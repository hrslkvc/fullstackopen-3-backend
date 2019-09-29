(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(13),o=n.n(u),c=n(14),l=n(3),i=function(e){return a.a.createElement("p",null,"Filter shown ",a.a.createElement("input",{value:e.filter,onChange:e.onChange}))},m=function(e){return a.a.createElement("form",{onSubmit:e.onSubmit},a.a.createElement("div",null,"name:",a.a.createElement("input",{value:e.newName,onChange:e.handleNameInput})),a.a.createElement("div",null,"number:",a.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberInput})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))},f=function(e){var t=e.peopleToShow,n=e.deletePerson;return t.map((function(e){return a.a.createElement("p",{key:e.name},e.name," ",e.number,a.a.createElement("button",{onClick:function(){return n(e)}},"Delete"))}))},s=function(e){var t=e.message;if(t){var n={color:"error"===t.type?"red":"green",borderStyle:"solid",borderRadius:5,padding:5,backgroundColor:"lightgray"};return a.a.createElement("div",{style:n},a.a.createElement("p",null,t.text))}return null},d=n(2),p=n.n(d),b="/api/persons",h=function(){return p.a.get(b)},w=function(e){return p.a.post(b,e)},O=function(e){return p.a.put("".concat(b,"/").concat(e.id),e)},g=function(e){return p.a.delete("".concat(b,"/").concat(e))};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var v=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],u=t[1],o=Object(r.useState)(""),d=Object(l.a)(o,2),p=d[0],b=d[1],v=Object(r.useState)(""),y=Object(l.a)(v,2),j=y[0],S=y[1],P=Object(r.useState)(""),k=Object(l.a)(P,2),C=k[0],N=k[1],D=Object(r.useState)(""),x=Object(l.a)(D,2),I=x[0],T=x[1];Object(r.useEffect)((function(){h().then((function(e){return u(e.data)}))}),[]);var A=C?n.filter((function(e){return e.name.toLowerCase().includes(C)})):n;return a.a.createElement("div",null,a.a.createElement(s,{message:I}),a.a.createElement("h2",null,"Phonebook"),a.a.createElement(i,{value:C,onChange:function(e){return N(e.target.value)}}),a.a.createElement("h2",null,"Add a new number"),a.a.createElement(m,{onSubmit:function(e){if(e.preventDefault(),n.filter((function(e){return e.name===p})).length){if(window.confirm("".concat(p," is already in the phonebook, replace the old number with a new one?"))){var t=n.find((function(e){return e.name===p}));O(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{number:j})).then((function(e){u(n.map((function(n){return n.id===t.id?e.data:n}))),T({text:"Changed number for ".concat(p),type:"success"}),setTimeout((function(){return T(null)}),5e3)})).catch((function(e){T({text:"Information on ".concat(p," is already deleted"),type:"error"}),setTimeout((function(){return T(null)}),5e3),u(n.filter((function(e){return e.id!==t.id})))}))}}else w({name:p,number:j}).then((function(e){u(n.concat(e.data)),T({text:"Added ".concat(p),type:"success"}),setTimeout((function(){return T(null)}),5e3)}));b(""),S("")},newName:p,newNumber:j,handleNameInput:function(e){return b(e.target.value)},handleNumberInput:function(e){return S(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(f,{peopleToShow:A,deletePerson:function(e){window.confirm("Delete person ".concat(e.name,"?"))&&g(e.id).then((function(t){u(n.filter((function(t){return t.id!==e.id}))),T({text:"Deleted ".concat(e.name),type:"success"}),setTimeout((function(){return T(null)}),5e3)}))}}))};o.a.render(a.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c0c2543d.chunk.js.map