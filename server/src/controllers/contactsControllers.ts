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
        return res.status(404).json({message: 'The contact does not exist'});
    }

    public async create(req: Request, res: Response): Promise<any>{
        try{
            const connection = await pool.query('INSERT INTO contacts set ?',[req.body]);
            return res.json({message: 'Contact saved'});
        } catch (err:any) {
            console.log(`SQL error (code: ${err.code}, message: ${err.sqlMessage}) while executing query: ${err.sql}`);

            let msg: string = "";
            if(err.sqlMessage.includes("contacts.first_name")){
                msg = "Full name has been already entered"
            }
            if(err.sqlMessage.includes("contacts.email")){
                msg = "Email has been already entered"
            }
            if(err.sqlMessage.includes("contacts.phone")){
                msg = "Phone number has been already entered"
            }

            return res.status(500).json({ message: msg });
      }
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