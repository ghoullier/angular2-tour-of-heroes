import { Component }   from '@angular/core'

import { HeroService } from './hero.service'
import { UserService } from '../core/user.service'
import { CacheService } from  '../shared/cache.service'

@Component({
  template: `
    <h2>Heroes of {{userName}}</h2>
    <p>{{this.cache}}</p>
    <router-outlet></router-outlet>
  `,
  providers: [ HeroService ]
})
export class HeroComponent {
  userName: string = ''
  cache: string = ''

  constructor(userService: UserService, cacheService: CacheService) {
    this.userName = userService.userName
    this.cache = cacheService.getCache()
  }
}
