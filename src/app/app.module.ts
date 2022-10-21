import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlayersComponent } from './main-page/players/players.component';
import { AddPlayerModalComponent } from './main-page/add-player-modal/add-player-modal.component';
import { BoardComponent } from './main-page/board/board.component';
import { NewGameModalComponent } from './main-page/new-game-modal/new-game-modal.component';
import {FormsModule} from "@angular/forms";
import { GeneralModalComponent } from './main-page/general-modal/general-modal.component';
import { EndGameModalComponent } from './main-page/end-game-modal/end-game-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainPageComponent,
    PlayersComponent,
    AddPlayerModalComponent,
    BoardComponent,
    NewGameModalComponent,
    GeneralModalComponent,
    EndGameModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
