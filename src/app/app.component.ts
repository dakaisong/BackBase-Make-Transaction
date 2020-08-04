import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ITransactionState } from './store/transaction.state';
import { Store, select } from '@ngrx/store';
import * as fromTransactions from './store';
import * as Actions from './store/transaction.action';
import { Transcation } from './model/transcation';
import { ModalService } from './components/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transactions';
  public isloading:boolean;
  isHidden: false;
  transactionList: Transcation[];
  transactionNew: Transcation;
  modalId:string;
  transactionList$ = this.store.pipe(select(fromTransactions.gettransactionList));

  constructor(private store: Store<ITransactionState>, public modalService: ModalService, private translate: TranslateService){
    translate.setDefaultLang('en');
  }

  ngOnInit(){
    this.store.dispatch(new Actions.GetTransactions);
  }

  ngOnDestroy(){
    
  }

  handleShowUp(event){
    if(event  && event.value){
      const {value} = event
      this.transactionNew = {
        amount: value.amount,
        categoryCode: '#12a580',
        merchant: value.toAccount,
        merchantLogo:'',
        transactionDate: new Date().getTime(),
        transactionType:'Card Payment'
      }

      this.store.dispatch(new Actions.PostTransactionSuccess(this.transactionNew));
    }
  }
}
