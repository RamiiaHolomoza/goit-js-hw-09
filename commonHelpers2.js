import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r="feedback-form-state",o=document.querySelector(".feedback-form"),a={email:"",message:""};m();o.addEventListener("input",l);o.addEventListener("submit",s);function l(e){const t=e.target.value.trim(),n=e.target.name.trim();a[n]=t,localStorage.setItem(r,JSON.stringify(a)),console.log(n,t)}function m(){const e=JSON.parse(localStorage.getItem(r));if(e)for(const t in e)o.elements[t].value=e[t],a[t]=e[t]}function s(e){if(e.preventDefault(),!a.email||!a.message){alert("Fill please all fields");return}localStorage.removeItem(r),e.currentTarget.reset()}
//# sourceMappingURL=commonHelpers2.js.map