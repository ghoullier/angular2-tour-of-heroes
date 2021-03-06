import { NgModule }            from '@angular/core'
import { CommonModule }        from '@angular/common'
import { FormsModule }         from '@angular/forms'

import { AwesomePipe }         from './awesome.pipe'
import { HighlightDirective }  from './highlight.directive'
import { CacheService }        from './cache.service'

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AwesomePipe, HighlightDirective ],
  exports:      [ AwesomePipe, HighlightDirective, CommonModule, FormsModule ],
  providers:    [ CacheService ]
})
export class SharedModule { }
