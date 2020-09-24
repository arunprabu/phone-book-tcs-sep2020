import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';
import { UpdateArrayPipe } from './shared/pipes/update-array.pipe';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';

// Main switching box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ConceptsComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    EllipsisPipe,
    UpdateArrayPipe,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Step 3: AppModule in turn bootstraps a component -- AppComponent
})
export class AppModule { }
