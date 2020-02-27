# leaflet-tilelayer-header
Custom headers on Leaflet TileLayer.
It's a simple plugin that allow to set custom header for leaflet's TileLayer.

It works with javascript and typescript without any dependencies!

Based on https://github.com/Leaflet/Leaflet/issues/2091#issuecomment-302706529.

Derived from https://github.com/ticinum-aerospace/leaflet-wms-header

### Javascript
```sh
$ npm install leaflet git+https://git@github.com/NBurley93/leaflet-wms-header.git
```

```html
<!-- Assuming your project root is "../" -->
<script src="../node_modules/leaflet/dist/leaflet.js"></script> 
<script src="../node_modules/leaflet-wms-header/index.js"></script> 
```

```js

// YOUR LEAFLET CODE

var xhrlayer = L.TileLayer.xhrLayer(
    'https://GEOSERVER_PATH/geoserver/wms?',
    {
        layers: 'ne:ne',
        format: 'image/png',
        transparent: true,
    },
    [
        { header: 'Authorization', value: 'JWT ' + MYAUTHTOKEN },
        { header: 'content-type', value: 'text/plain'},
    ],
    null
).addTo(map);
```

### Typescript
```sh
$ npm install leaflet @types/leaflet leaflet-wms-header --save
```
```ts
import * as L from 'leaflet';
import 'leaflet-wms-header';

// YOUR LEAFLET CODE

let wmsLayer: L.TileLayer.XHRLayer = L.TileLayer.xhrLayer(
    'https://GEOSERVER_PATH/geoserver/wms?',
    {
        layers: layers,
        format: 'image/png',
        transparent: true,
    }, [
        { header: 'Authorization', value: 'JWT ' + MYAUTHTOKEN },
        { header: 'content-type', value: 'text/plain'},
    ],
    null
).addTo(map);
```

### Abort parameter

Abort parameter allow to abort the http request through an Observable. This optimization function might be usefull to stop the http request when it is not necessary anymore, mostly if many requests are pending. An example is provided on /tests/system-tests.html .

See below an example using an Observable as "abort" parameter.

```ts
let tileLayer: L.TileLayer.WMSHeader = L.TileLayer.wmsHeader(
    'https://GEOSERVER_PATH/geoserver/wms?',
    {
        layers: layers,
        format: 'image/png',
        transparent: true,
    }, [
        { header: 'Authorization', value: 'JWT ' + MYAUTHTOKEN },
        { header: 'content-type', value: 'text/plain'},
    ],
    this.abortWMSObservable$.pipe(take(1))
);
```
