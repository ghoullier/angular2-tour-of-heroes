import './polyfills.ts'

import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { environment } from './environments/environment'

import { AppModule } from './app/app.module'

const platform = platformBrowserDynamic()

if (environment.production) {
  enableProdMode()
}

platform.bootstrapModule(AppModule)
