import { HttpInterceptorFn } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoadingService } from '../services/loading-service';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  const loading_service = inject(LoadingService)
  loading_service.busy();

  return next(req).pipe( 
    finalize(() => {loading_service.idle()}) 
  );
};
