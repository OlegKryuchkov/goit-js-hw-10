const e={select:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};e.loader.style.display="block",e.error.style.display="none",e.select.style.display="none",fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((t=>{const r=t.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("");e.select.innerHTML=r,e.loader.style.display="none",e.select.style.display="block"})).catch((t=>{e.error.style.display="block",console.log(t)})),e.select.addEventListener("change",(t=>{var r;e.error.style.display="none",e.catInfo.innerHTML="",e.loader.style.display="block",(r=t.target.value,fetch(`https://api.thecatapi.com/v1/images/search?li123mit=1&breed_ids=${r}&api_key=live_Q4yXZqybCK8L5vuDhRAifSIcFSzZMu6WywD8hknJ7zQqQe6FIJwh3JHCb0k1ob63`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((t=>{if(0===t.length)throw new Error(response.status);e.catInfo.innerHTML=function(e){return e.map((e=>`   <img class="cat-img" src="${e.url}" width="340"/>\n                <div class="cat-description">\n                <h2>${e.breeds[0].name}</h2>\n                <p>${e.breeds[0].description}</p>\n                <p><h3>Temperament:</h3> ${e.breeds[0].temperament}</p>\n            </div>                        \n        `)).join("")}(t),e.loader.style.display="none"})).catch((t=>{console.log("Error"),e.catInfo.innerHTML="",e.loader.style.display="none",e.error.style.display="block",console.log(t)}))}));
//# sourceMappingURL=index.a4b8a86a.js.map