import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function getPerson(req, res) {
    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database,
    });

    const person = await db.get('select * from person where id=?', [req.query.id]);
    res.json(person);
};