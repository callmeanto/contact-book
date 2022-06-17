import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {

  contacts: any = [];
  constructor(private contactsService: ContactsService) { }

  collapsed = true;

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(){
    this.contactsService.getContacts().subscribe(
      res => {
        this.contacts = res;
      },
      err => console.error(err)
    ); 
  }

  deleteContact(id:number){
    this.contactsService.deleteContact(id)
    .subscribe(
      res => {
        console.log(res);
        this.getContacts();
      },
      err => console.error(err)
    )
  }

  collapseElement(id:string){
    this.collapsed = !this.collapsed;
  }
}
