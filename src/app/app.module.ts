import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccountListComponent } from './components/account-list/account-list.component';
import { StoreModule } from '@ngrx/store';
import { TransactionReducer } from './store/transaction.reduce';
import { TransactionEffects } from './store/transaction.effects';
import { EffectsModule } from '@ngrx/effects';
import { SearchPipe } from './pipes/search.pipe';
import { ModalComponent } from './components/modal/modal.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';

export function createTranslateHttpLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TransferFormComponent,
    AccountListComponent,
    SearchPipe,
    ModalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: createTranslateHttpLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({transactions:TransactionReducer}),
    EffectsModule.forRoot([TransactionEffects]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
