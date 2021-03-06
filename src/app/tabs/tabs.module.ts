import { AngularFireDatabase } from '@angular/fire/database';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { CurrencyConverterService } from '../services/currency-converter.service';
import { HttpClientModule} from '@angular/common/http'
import { GetExpensesService } from '../services/get-expenses.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage],
  providers:[CurrencyConverterService, GetExpensesService, AngularFireDatabase]
})
export class TabsPageModule {}
