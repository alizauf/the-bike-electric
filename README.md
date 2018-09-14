# Is there an electric Citi Bike near you?

This is the project that powers the website: [https://www.i-want-to-ride-an-electric-citi.bike](https://www.i-want-to-ride-an-electric-citi.bike) and https://the-cabi-electric.glitch.me/

Citi Bike operates the bike share in NYC. They've recently introduced electric bikes (⚡️🚲!)  and they are elusive as heck. After a weekend of not being able to find one, I made this app.

Made by [Aliza Aufrichtig](https://www.twitter.com/alizauf).

## Want to run it locally?

Clone this repo, then run:

```
npm install
npm run dev
```

The app is written using [Svelte](https://github.com/sveltejs/svelte), [Leaflet](https://leafletjs.com/), and [Citi Bike's Real Time Data API](https://www.citibikenyc.com/system-data). It is not affiliated with, approved by, endorsed by, or sponsored by Citi Bike. 

## I hope you find an ⚡️🚲!

## Want to run it for another city?
[Daniel Schep](https://www.twitter.com/schep_) updated the bike electric to work more easily with any
bikeshare operator with electric bikes that provides [GBFS](https://github.com/NABSA/gbfs) feeds.

See `config/nyc.js` and `config/dc.js` for examples of how to configure the bike electric for different cities.
Create your own config at `config/CITYNAME.js` and run locally with: 
```
npm install
CONFIG=./config/CITYNAME.js npm run dev
```
And compile a production version with:
```
CONFIG=./config/CITYNAME.js npm run build
```
