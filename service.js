var cachename="pwa";
var filescache=[
  '/',
  'index.html'

]

self.addEventListener('install',function(e){
  console.log("installed successfully......");
e.waitUntil(
  caches.open(cachename).then(function(ca){
    console.log("catching files from cache");
return ca.addAll(filescache);

  })
  )

})
self.addEventListener('activate',function(e){

console.log("activated successfully......");
e.waitUntil(
  caches.keys().then(function (c) {
    return Promise.all(c.map(function (thiscache) {
      if(thiscache !==cachename){
        return caches.delete(thiscache);
        console.log("service worker removing files");
      }

    }))

  })
)


})
self.addEventListener('fetch',function(e){
  console.log("fetched successfully......");
e.respondWith(
  caches.match(e.request).then(function(response){

      if (!response) {
      console.log("");
          return response;
      }


  var rc=e.request.clone();
  fetch(rc).then(function(response){
    if (!response) {
    console.log("no response  from fetch");
        return response;
    }
rc=response.clone();
caches.open(cachename).then(function (cache) {
  cache.put(e.request,rc);
  return  response;

})
  })
  .catch(function (error) {
console.log("error occured",error);
  })
})
)

})
