import {Request, Response} from 'express';
import pool from '../database';
import db from '../database';


class ContactsController {

    public async getContacts(req: Request, res: Response): Promise<void>{
        const contacts = await pool.query('SELECT * FROM contacts');
        res.json(contacts);
    }

    public getContact(req: Request, res: Response){
        db.query('DESCRIBE contacts');
        res.json('contacts');
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO contacts set ?',[req.body]);
        res.json({message: 'Contact saved'});
    }

    public delete(req: Request, res: Response){
        res.json({text: 'Deleting a game'});
    }

    public update(req: Request, res: Response){
        res.json({text: 'Updating game' + req.params.id});
    }
}

const contactsController = new ContactsController();
export default contactsController;