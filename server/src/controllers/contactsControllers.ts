import {Request, Response} from 'express';
import pool from '../database';


class ContactsController {

    public async getContacts(req: Request, res: Response): Promise<void>{
        const contacts = await pool.query('SELECT * FROM contacts');
        res.json(contacts);
    }

    public async getContact(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const contacts = await pool.query('SELECT * FROM contacts WHERE id = ?', [id]);   
        if (contacts.length > 0){
            return res.json(contacts[0]);
        }
        res.status(404).json({text: "The contact does not exist"});
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO contacts set ?',[req.body]);
        res.json({message: 'Contact saved'});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM contacts WHERE id = ?', [id]);
        res.json({message: 'Contact deleted'});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE contacts set ? WHERE id = ?', [req.body, id]);
        res.json({text: 'Updating contact ' + req.params.id});
    }
}

const contactsController = new ContactsController();
export default contactsController;