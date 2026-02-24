import{a as m,S as p,i as c}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="54777791-355634ca1663ab6ad364842b0";async function h(o){const r={key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(g,{params:r})).data}const l=document.querySelector(".gallery"),a=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:d})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${e}"
            loading="lazy"
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${t}</p>
          <p class="info-item"><b>Views</b> ${n}</p>
          <p class="info-item"><b>Comments</b> ${f}</p>
          <p class="info-item"><b>Downloads</b> ${d}</p>
        </div>
      </li>
`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML=""}function w(){a&&a.classList.remove("is-hidden")}function q(){a&&a.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){c.warning({message:"Please enter a search query",position:"topRight"});return}S(),w(),h(r).then(i=>{const s=i.hits;if(s.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s)}).catch(()=>{c.error({message:"Something went wrong. Please try again.",position:"topRight"})}).finally(()=>{q(),u.reset()})}
//# sourceMappingURL=index.js.map
