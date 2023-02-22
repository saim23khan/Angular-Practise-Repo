import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cacheKey = 'firebase-sign-in-object';

  constructor() { }

  storeCache(signInObject: any) {
    const cache = window.caches.open('my-app-cache');
    cache.then(cache => {
      cache.put(this.cacheKey, new Response(JSON.stringify(signInObject)));
    });
  }

  getCache() {
    const cache = window.caches.open('my-app-cache');
    return cache.then(cache => {
      return cache.match(this.cacheKey).then(response => {
        return response?.json();
      });
    });
  }

  clearCache(cacheName:any) {
    const cache = window.caches.open(cacheName);
    cache.then(cache => {
      cache.delete(this.cacheKey);
      console.log('cache cleared');
    });
  }
}
