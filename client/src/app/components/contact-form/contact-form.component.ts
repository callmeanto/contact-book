import { Component, HostBinding, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

contact: Contact = {
  id: 0,
  name: '',
  last_name: '',
  email: '',
  phone_number: 0
};

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
  }

  saveContact(){
    console.log(this.contact)
  }

}
