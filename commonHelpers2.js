import{s as n,u as o}from"./assets/iziToast-0d52f805.js";import"./assets/vendor-77e16229.js";const c=document.querySelector(".form");c.addEventListener("submit",e=>{e.preventDefault();const t=Number(e.target.elements.delay.value),r=e.target.elements.state.value;l(t,r).then(s=>n(s)).catch(s=>o(s)),e.target.elements.delay.value=""});const l=(e,t)=>(console.log(t),new Promise((r,s)=>{setTimeout(()=>{t==="fulfilled"&&r(e),t==="rejected"&&s(e)},e)}));
//# sourceMappingURL=commonHelpers2.js.map
