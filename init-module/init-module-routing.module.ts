import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Init } from "./init/init.component";

const routes: Routes = [{ path: "", component: Init, pathMatch: "full" }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitModuleRoutingModule {}
