import { baseURL } from '../shared/baseurl';
import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';

import { Observable } from 'rxjs/Observable';

import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular) { }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotions', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({featured: true}).map(dishes => dishes[0]);
  }

}

