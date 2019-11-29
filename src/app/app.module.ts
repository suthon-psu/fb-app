import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgReversePipeModule  } from 'angular-pipes';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ChatPaneComponent } from './chat-pane/chat-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatPaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgReversePipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
