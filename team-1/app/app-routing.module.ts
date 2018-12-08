import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  
  {
    path: "",
    loadChildren: "../../init-module/init-module.module#InitModule",
    pathMatch: "full",
  },
  {
    path: "my-module",
    loadChildren: "../../module-1.module#Module1Module",
    pathMatch: "full",
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
