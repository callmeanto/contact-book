import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any = [];
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {

    this.contactsService.getContacts().subscribe(
      res => {
        this.contacts = res;
      },
      err => console.error(err)
    );
  }

}
