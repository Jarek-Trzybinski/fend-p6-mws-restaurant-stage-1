let cacheName = "restaurantApp2";

// listen for service worker's install event
self.addEventListener('install', function(event){
    
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log("[Service Worker]: Cache opened");
            // add files to the cache
            return cache.addAll([
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
    )
})

// listen for service worker's activate event
self.addEventListener('activate', function(event) {
    console.log("[Service Worker] Activation succeed");
    event.waitUntil(
        // caches.keys() method returns all the names of caches we have
        caches.keys().then(function(names){
            // The Promise.all(iterable) method returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.
            Promise.all(
                // The filter() method creates an array filled with all array elements that pass a test (provided as a function).
                names.filter(function(name){
                    return name!==cacheName;
                }).map(function(name){
                    return caches.delete(name);
                })
            )
            

        })

    )
})

// listen for service worker's fetch event
self.addEventListener('fetch', function(event) {

    // The respondWith() method of FetchEvent prevents the browser's default fetch handling, and allows you to provide a promise for a Response yourself.
   event.respondWith(
       caches.open(cacheName).then(function(cache){
           return cache.match(event.request);
       })
   );
})

