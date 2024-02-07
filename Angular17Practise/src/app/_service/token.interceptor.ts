import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE3MDczMjc0MjgsImV4cCI6MTcwNzMzMTAyOCwiaWF0IjoxNzA3MzI3NDI4fQ.FLhZiYpnmr0rPrxVTwiN9E5_zIWIPhuip27MFXsJcUc';
  let jwt = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
  return next(jwt);
};
