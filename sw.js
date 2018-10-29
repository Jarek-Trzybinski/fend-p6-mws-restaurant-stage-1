let cacheName = "restaurantApp-v25";

// listen for service worker's install event
self.addEventListener('install', function(event){
    
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log("[Service Worker]: Cache opened");
            // add files to the cache
            return cache.addAll([
                "./",
                "./index.html",
                "./restaurant.html",
                "./data/restaurants.json",
                "./js/dbhelper.js",
                "./js/main.js",
                "./js/restaurant_info.js",
                "./css/styles.css",
                "./img/1.jpg",
                "./img/2.jpg",
                "./img/3.jpg",
                "./img/4.jpg",
                "./img/5.jpg",
                "./img/6.jpg",
                "./img/7.jpg",
                "./img/8.jpg",
                "./img/9.jpg",
                "./img/10.jpg",
            ]).catch(function(error){
                console.log(`[Service Worker]: Cache Open Error: {error}`);
            });
        })
    );
});

// listen for service worker's activate event
self.addEventListener('activate', function(event) {
    console.log("[Service Worker] activation successful");
    
    event.waitUntil(
        // caches.keys create array of cache names
        caches.keys().then(function(cachesNames) {
            //map cachesNames.map call defines function on each element of array
            return cachesNames.map(function(thisCacheName){
                //if cache name in cache storage is different than cacheName will be deletaed
                if (thisCacheName !== cacheName) {
                    console.log("[Service Worker Cache] " + thisCacheName + " removed");
                    return caches.delete(thisCacheName);
                }
            });
        })
    );
});

// listen for service worker's fetch 
self.addEventListener('fetch', function(event){
    console.log("[Service Worker] Fetch", event.request.url);
    
    const requestURL = new URL(event.request.url);
   
    if (requestURL.pathname.startsWith("/restaurant.html")) {
        // fetch in case of restaurant.html with id parameter
        console.log("requestURL: " + requestURL);
        event.respondWith(caches.match("/restaurant.html"));
        return;

    }
    else {
        // default fetch
        event.respondWith(
            caches.match(event.request).then(function(response) {
                return response || fetch(event.request);
            }).catch(function(error){
                console.log("error", event.request.url);
            })
        );
    }

    
});