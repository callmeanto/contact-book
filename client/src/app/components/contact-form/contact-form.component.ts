import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';
import * as _ from 'lodash';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {

@HostBinding('class') classes = 'row';

contact: Contact | null = null;
isEditForm: Boolean = false;

contactForm = new FormGroup({
  id: new FormControl(undefined),
  first_name: new FormControl('', Validators.required),
  last_name: new FormControl('',Validators.required),
  email: new FormControl('',[Validators.required,Validators.email]),
  phone: new FormControl('', [Validators.required,Validators.minLength(8)])
})

get first_name() { return this.contactForm.get('first_name') as FormArray; }
get last_name() { return this.contactForm.get('last_name') as FormArray; }
get email() { return this.contactForm.get('email') as FormArray; }
get phone() { return this.contactForm.get('phone') as FormArray; }



  constructor(
    private activatedRoute: ActivatedRoute, 
    private contactsService: ContactsService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   const params = this.activatedRoute.snapshot.params;
   if(params['id']) {
    this.isEditForm = true;
    this.contactsService.getContact(params['id'])
      .subscribe(
        res => {
          console.log(res);
          this.contact = res as Contact;
          this.initializeForm(this.contact);
        },
        err => console.error(err)
      )
   }
  }

  saveContact(){
    let contact : Contact = this.contactForm.getRawValue();

    this.contactsService.saveContact(contact)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/contacts'])
      },
      err => 
      {
        console.log(err);
        confirm(err.error.message);
      }
    )
  }

  notChanges(){
    return _.isEqual(this.contact,[this.contactForm.getRawValue()]);
  }

  initializeForm(contact:any){
    this.contactForm = this.formBuilder.group({
      id: [contact[0].id],
      first_name: [contact[0].first_name, Validators.required],
      last_name: [contact[0].last_name, Validators.required],
      email: [contact[0].email, Validators.required],
      phone: [contact[0].phone, Validators.required],
    })
  }

}
