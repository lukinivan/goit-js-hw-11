import{i as c,S as u}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function d(s){return s.map(p).join("")}function p(s){return`
  <div class="image-container">
    <a href="${s.largeImageURL}">
      <img src="${s.webformatURL}" alt="${s.tags}" title="" />
    </a>
    
    <div class="stats">
      <div class="stat">
        <span class="label">Likes</span>
        <span class="value">${s.likes}</span>
      </div>
      <div class="stat">
        <span class="label">Views</span>
        <span class="value">${s.views}</span>
      </div>
      <div class="stat">
        <span class="label">Comments</span>
        <span class="value">${s.comments}</span>
      </div>
      <div class="stat">
        <span class="label">Downloads</span>
        <span class="value">${s.downloads}</span>
      </div>
    </div>
  </div>`}function m(s){const r="https://pixabay.com/api/",a="44003480-04272ce3fae5ad0292fb853b7",o=new URLSearchParams({key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${r}?${o}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const f="/goit-js-hw-11/assets/blocked-295d98f9.svg";function g(){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",color:"red",position:"topRight",timeout:3e3,close:!0,progressBar:!0,iconUrl:f})}const h=new u(".gallery a",{captionsData:"alt",captionDelay:250}),y=document.querySelector(".js-request-form"),i=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");y.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget.elements.query.value.trim();i.innerHTML="",l.classList.add("loader"),m(r).then(a=>{a.total===0?g():i.innerHTML=d(a.hits),h.refresh(),l.classList.remove("loader")}),s.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
