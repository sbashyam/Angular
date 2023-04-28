import { NgModule } from "@angular/core";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { Routes,RouterModule } from "@angular/router";
import { AuthGaurd } from "./auth-gaurd.service";
import { CanDeactivateGaurd } from "./servers/edit-server/can-deactivate-gaurd.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";


    const appRoutes:Routes=[
        {path:'users',component:UsersComponent,children:[
          {path:':id/:name',component:UserComponent}
        ]}
        ,
        {path:'',component:HomeComponent},
        // {path:'not-found',component:PageNotFoundComponent},
        {path:'not-found',component:ErrorPageComponent,data:{message:'Page Not Found!'}},
        {path:'servers',
        //canActivate:[AuthGaurd],
        canActivateChild:[AuthGaurd],
        component:ServersComponent,children:[
          {path:':id',component:ServerComponent,resolve:{server:ServerResolver}},
          {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGaurd]}
        ]},
        {path:'**',redirectTo:'/not-found'}
         ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes,{useHash:true})
    ],
    exports:[RouterModule]
})
 export class AppRoutingModule{}