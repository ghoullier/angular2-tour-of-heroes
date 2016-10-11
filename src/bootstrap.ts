// Allow production mode
import { enableProdMode } from '@angular/core'
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { environment } from './environments/environment'

const platform = platformBrowserDynamic()

// Compile and launch the module
export const bootstrap = (module) => {
  if (environment.production) {
    enableProdMode()
  }
  console.time('bootstrapModule')
  platform.bootstrapModule(module)
  console.timeEnd('bootstrapModule')
}