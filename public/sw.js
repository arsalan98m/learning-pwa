let cacheName = "app-v2 ";
let assets = [
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
 " /static/js/vendors~main.chunk.js",
  "/static/js/0.chunk.js",
  "/index.html",
  "/",
  "/users"
];

// Install event
this.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});


// fetch event

this.addEventListener("fetch", (e)=>{
  if(!navigator.onLine){
  e.respondWith(
    caches.match(e.request).then((result)=>{
      if(result){
         return result;
      }

      let requestUrl = e.request.clone();
      return fetch(requestUrl);
     
     }
     
   
     )

    
  )
  }

})