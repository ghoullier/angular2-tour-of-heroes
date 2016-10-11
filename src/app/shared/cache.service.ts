import { Injectable } from '@angular/core';


@Injectable()
export class CacheService {
  getCache(): string {
    return 'cache'
  }
}
