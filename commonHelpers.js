import{i as c,S as u}from"./assets/vendor-0fc460d7.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();function d(e){return e.map(p).join("")}function p(e){return`
  <div class="image-container">
    <a href="${e.largeImageURL}">
      <img src="${e.webformatURL}" alt="${e.tags}" title="" />
    </a>
    
    <div class="stats">
      <div class="stat">
        <span class="label">Likes</span>
        <span class="value">${e.likes}</span>
      </div>
      <div class="stat">
        <span class="label">Views</span>
        <span class="value">${e.views}</span>
      </div>
      <div class="stat">
        <span class="label">Comments</span>
        <span class="value">${e.comments}</span>
      </div>
      <div class="stat">
        <span class="label">Downloads</span>
        <span class="value">${e.downloads}</span>
      </div>
    </div>
  </div>`}function m(e){const a="https://pixabay.com/api/",r="44003480-04272ce3fae5ad0292fb853b7",o=new URLSearchParams({key:r,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=`${a}?${o}`;return fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const f="/goit-js-hw-11/assets/blocked-295d98f9.svg";function g(){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",color:"red",position:"topRight",timeout:3e3,close:!0,progressBar:!0,iconUrl:f})}function h(e){c.error({title:"Error",position:"topRight",message:e})}const y=new u(".gallery a",{captionsData:"alt",captionDelay:250}),v=document.querySelector(".js-request-form"),l=document.querySelector(".js-gallery"),i=document.querySelector(".js-loader");v.addEventListener("submit",e=>{e.preventDefault();const a=e.currentTarget.elements.query.value.trim();l.innerHTML="",i.classList.add("loader"),m(a).then(r=>{r.total===0?g():l.innerHTML=d(r.hits),y.refresh(),i.classList.remove("loader")}).catch(r=>{h(r.message),i.classList.remove("loader")}),e.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
