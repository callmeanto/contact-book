"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const database_2 = __importDefault(require("../database"));
class ContactsController {
    getContacts(req, res) {
        database_2.default.query('DESCRIBE contacts');
        res.json('contacts');
    }
    getContact(req, res) {
        database_2.default.query('DESCRIBE contacts');
        res.json('contacts');
    }
    async create(req, res) {
        await database_1.default.query('INSERT INTO contacts set ?', [req.body]);
        res.json({ message: 'Contact saved' });
    }
    delete(req, res) {
        res.json({ text: 'Deleting a game' });
    }
    update(req, res) {
        res.json({ text: 'Updating game' + req.params.id });
    }
}
const contactsController = new ContactsController();
exports.default = contactsController;
