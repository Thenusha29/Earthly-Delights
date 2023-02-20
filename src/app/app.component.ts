import { Component, OnInit, TemplateRef, VERSION } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'XitebTask';
  value: any;
  src: any;
  modalRef!: BsModalRef;

  changed(value: any) {
    this.value = value;
  }

  displayStyle = "none";

  constructor(
    private modalService: BsModalService

  ) { }

  openModal1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.displayStyle = "block";
  } 
 
  openModal2(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.displayStyle = "block";
  }

  openModal3(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.displayStyle = "block";
  }

  openModal4(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.displayStyle = "block";
  }

  openModal5(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.displayStyle = "block";
  }

  openModal6(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.displayStyle = "block";
  }
}
