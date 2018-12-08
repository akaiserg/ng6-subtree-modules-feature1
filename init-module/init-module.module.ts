import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InitModuleRoutingModule } from "./init-module-routing.module";

import { Init } from "./init/init.component";

@NgModule({
  imports: [CommonModule, InitModuleRoutingModule],
  declarations: [Init],
})
export class InitModule {}
