import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { ContactComponent } from './contact/contact.component';
import { DirectivesComponent } from './directives/directives.component';
import { HeadingComponent } from './heading/heading.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrincingComponent } from './princing/princing.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    ContactDialogComponent,
    ContactComponent,
    DirectivesComponent,
    HeadingComponent,
    PortfolioComponent,
    PrincingComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
