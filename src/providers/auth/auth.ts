import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider extends BaseRequestOptions {

  constructor() {
    super();
    this.headers.set('Content-Type', 'application/json');
  }

  /*merge(options?: RequestOptionsArgs): RequestOptions {

    let newOptions = super.merge(options);
    let accessToken = locationStorage.getItem('accessToken');
    if (accessToken !== null && accessToken !== undefined) {
      let token: AcessTokenResponse = JSON.parse(accessToken);
      newOptions.headers.set('Authorization', token.token_type + ' ' + token.access_token);
    }

    return newOptions;
  }*/
}