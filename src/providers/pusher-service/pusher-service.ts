import { HttpClient } from '@angular/common/http';
    import { Injectable } from '@angular/core';

    declare const Pusher: any;
    @Injectable()
    export class PusherServiceProvider {
      public _pusher : any;
      constructor(public http: HttpClient) {
        this._pusher = new Pusher("PUSHER_KEY", {
          cluster: "CLUSTER",
          encrypted: true
        });
      }

      getPusher(){
        return this._pusher;
      }
    }