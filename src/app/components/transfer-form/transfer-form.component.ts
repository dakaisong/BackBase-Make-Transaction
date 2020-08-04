import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {
  defaultAccountAmount = 5824.76;
  transferForm: FormGroup;
  showModal: boolean = false;
  submitted: boolean = false;
  overFlowError: boolean = false;
  modalId:string;

  @Output() showUp = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private modelService: ModalService) {}

  ngOnInit(): void {
    this.transferForm = this.formBuilder.group({
      fromAccount: [''],
      toAccount: ['', Validators.required],
      amount: ['', [Validators.required]]
    })

    // this.transferForm.setValue({fromAccount: this.defaultAccountAmount});
  }

  get f() { return this.transferForm.controls; }

  close() {
    this.modelService.close(this.modalId);
  }
  
  onSubmit() {
    this.modalId = 'custom-modal-1';
    this.submitted = true;

    if(this.transferForm.invalid){
      return;
    }

    if(this.transferForm.valid){
      if((this.defaultAccountAmount - this.transferForm.value['amount']) < -500){
        this.overFlowError = true;
      }else{
        // this.defaultAccountAmount = this.defaultAccountAmount - this.transferForm.value['amount'];
        // this.showUp.emit({ value:this.transferForm.value});
        // this.transferForm.reset();
        // this.submitted = false;
        this.modelService.open(this.modalId);
      }
    }
  }

  submit(){
      this.defaultAccountAmount = this.defaultAccountAmount - this.transferForm.value['amount'];
      this.showUp.emit({ value:this.transferForm.value});
      this.transferForm.reset();
      this.submitted = false;
      this.modelService.close(this.modalId);
  }
}
