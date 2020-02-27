import * as L from 'leaflet';
import { Observable } from 'rxjs';

declare module 'leaflet' {
  namespace TileLayer {
    export class XHRLayer extends L.TileLayer {
      constructor(
        baseUrl: string,
        options: any,
        header: { header: string; value: string }[],
        abort: Observable<any>
      );
    }
    export function xhrLayer(
      baseUrl: string,
      options: any,
      header: { header: string; value: string }[],
      abort: Observable<any>
    ): L.TileLayer.XHRLayer;
  }
}
