import { Component, OnInit, Input, ViewChild, ElementRef, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import _ from 'lodash';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  @Input() data: any; 

  query:string;
  defaultSort: { path: string , order:string }

  ngOnInit() {
    this.defaultSort = {path:'transactionDate',order:'asc'};
    this.sort();
  }

  sort(path?){
    if(this.defaultSort.path === path){
      this.defaultSort.order = this.defaultSort.order === 'asc' ? 'desc' : 'asc';
    }else{
      this.defaultSort.path = path;
    }
    this.data = _.orderBy(this.data, this.defaultSort.path, this.defaultSort.order);

  }

  isNumeric(num){
    return !isNaN(num)
  }
  
}
