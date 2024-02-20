import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE3MDg0NTQ3MjIsImV4cCI6MTcwODQ1ODMyMiwiaWF0IjoxNzA4NDU0NzIyfQ.w9J4w1u2K4yDaU1b-qD6l6E4-lGJd0VuQJag4dR-IwY';
  let jwt = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
  return next(jwt);
};
