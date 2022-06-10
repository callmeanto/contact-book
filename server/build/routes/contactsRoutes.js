"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactsControllers_1 = __importDefault(require("../controllers/contactsControllers"));
class ContactsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', contactsControllers_1.default.getContacts);
        this.router.get('/:id', contactsControllers_1.default.getContact);
        this.router.post('/', contactsControllers_1.default.create);
        this.router.delete('/:id', contactsControllers_1.default.delete);
        this.router.put('/:id', contactsControllers_1.default.update);
    }
}
const contactsRoutes = new ContactsRoutes();
exports.default = contactsRoutes.router;
