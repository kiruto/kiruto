import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {DTMainModule} from "./module/main.module";
const platform = platformBrowserDynamic();
platform.bootstrapModule(DTMainModule);