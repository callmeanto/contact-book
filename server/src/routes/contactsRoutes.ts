import { Router } from "express";
import contactsController from "../controllers/contactsControllers";

class ContactsRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/', contactsController.getContacts);
        this.router.get('/:id', contactsController.getContact);
        this.router.post('/', contactsController.create);
        this.router.delete('/:id',contactsController.delete);
        this.router.put('/:id',contactsController.update);

    }
}

const contactsRoutes = new ContactsRoutes();
export default contactsRoutes.router;