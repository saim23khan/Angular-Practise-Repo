import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE3MDc0MDAwMjMsImV4cCI6MTcwNzQwMzYyMywiaWF0IjoxNzA3NDAwMDIzfQ.MlDo6LvU1A4mBFK8_JVEFJrzL8J2nVj4vdzfeg2SRuI';
  let jwt = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
  return next(jwt);
};
