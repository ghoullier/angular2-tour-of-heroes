import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { environment } from './environments/environment'

const platform = platformBrowserDynamic()

// Compile and launch the module
export const bootstrap = (module) => {
  if (environment.production) {
    enableProdMode()
  }
  console.time('bootstrap')
  platform.bootstrapModule(module)
  console.timeEnd('bootstrap')
}
