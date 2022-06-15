"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ContactsController {
    async getContacts(req, res) {
        const contacts = await database_1.default.query('SELECT * FROM contacts');
        res.json(contacts);
    }
    async getContact(req, res) {
        const { id } = req.params;
        const contacts = await database_1.default.query('SELECT * FROM contacts WHERE id = ?', [id]);
        if (contacts.length > 0) {
            return res.json(contacts[0]);
        }
        res.status(404).json({ text: "The contact does not exist" });
    }
    async create(req, res) {
        await database_1.default.query('INSERT INTO contacts set ?', [req.body]);
        res.json({ message: 'Contact saved' });
    }
    async delete(req, res) {
        const { id } = req.params;
        await database_1.default.query('DELETE FROM contacts WHERE id = ?', [id]);
        res.json({ message: 'Contact deleted' });
    }
    async update(req, res) {
        const { id } = req.params;
        await database_1.default.query('UPDATE contacts set ? WHERE id = ?', [req.body, id]);
        res.json({ text: 'Updating contact ' + req.params.id });
    }
}
const contactsController = new ContactsController();
exports.default = contactsController;
