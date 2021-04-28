import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function getPersonById(req, res) {
    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database,
    });
    if (req.method === 'PUT') {
        const result = await statement.run(req.body.name, req.body.email, req.query.id);
        const statement = await db.prepare('update person set name = ?, email= ? where id = ?');
    };
    const person = await db.get('select * from person where id = ?', [req.query.id]);
    res.json(person);
}