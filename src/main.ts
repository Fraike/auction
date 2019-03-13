import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//使用哪个模块启动
import { AppModule } from './app/app.module'; 
import { environment } from './environments/environment'; //环境配置

if (environment.production) {
  enableProdMode(); //如果是生产环境
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
