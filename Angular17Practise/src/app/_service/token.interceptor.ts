import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE3MDcyMzkyMjAsImV4cCI6MTcwNzI0MjgyMCwiaWF0IjoxNzA3MjM5MjIwfQ.oMbomziqOjY_naDM-5xRc4lVPzx_KHtdBkkIZr05ybQ';
  let jwt = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
  return next(jwt);
};
