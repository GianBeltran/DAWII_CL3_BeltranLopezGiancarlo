import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { EpisodiosComponent } from './principal/episodios/episodios.component';
import { FotosComponent } from './principal/fotos/fotos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [

    {path: "principal", component: PrincipalComponent,
        children: [
            {path: "episodios", component: EpisodiosComponent},
            {path: "fotos", component: FotosComponent}
        ]
    },

    {path: "", redirectTo: "principal", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}

];
