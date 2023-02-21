import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cacheKey = 'firebase-sign-in-object';

  constructor() { }

  storeSignInObject(signInObject: any) {
    const cache = window.caches.open('my-app-cache');
    cache.then(cache => {
      cache.put(this.cacheKey, new Response(JSON.stringify(signInObject)));
    });
  }

  getSignInObject() {
    const cache = window.caches.open('my-app-cache');
    return cache.then(cache => {
      return cache.match(this.cacheKey).then(response => {
        return response?.json();
      });
    });
  }
}
