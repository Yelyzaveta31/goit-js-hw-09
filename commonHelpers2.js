import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o=document.querySelector(".feedback-form"),l=document.querySelector("input[type='email']"),r=document.querySelector("textarea[name='message']"),t=JSON.parse(localStorage.getItem("feedback-form-state")),s=()=>{try{if(t===null)return;for(const e in t)o.elements[e].value=t[e];console.log(t)}catch(e){console.log(e)}};s();o.addEventListener("input",()=>{const e={email:l.value,message:r.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))});o.addEventListener("submit",e=>{e.preventDefault();const a=JSON.parse(localStorage.getItem("feedback-form-state"));a.email&&a.message?(console.log(a),localStorage.removeItem("feedback-form-state"),l.value="",r.value="",alert("Thank you for your feedback!")):alert("Please fill in all fields.")});
//# sourceMappingURL=commonHelpers2.js.map