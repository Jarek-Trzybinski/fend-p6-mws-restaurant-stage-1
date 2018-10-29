# Restaurant Review Website

## About Project:
In this project I need to convert a static webside from https://github.com/udacity/mws-restaurant-stage-1 to mobile-ready web application. 

My goal was to  take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. I also add a service worker to begin the process of creating a seamless offline experience for your users.

## How to run this website
1. If you have Python installed open project folder and use command `python -m SimpleHTTPServer 8000`.
2. Open browser and type `http://localhost:8000`

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). 

## Criteria

All criteria I needed to apply website:
1. Responsive Design
* All content is responsive and displays on a range of display sizes,
* Content should make use of available screen real estate and should display correctly at all screen sizes,
* An image's associated title and text renders next to the image in all viewport sizes,
* Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size,
* On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.
2. Accessibility 
* All content-related images include appropriate alternate text that clearly describes the content of the image,
* Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus,
* Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined, 
3. Offline Availability
* When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

## Author
Jarosław Trzybiński