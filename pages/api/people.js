import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function getPeople(req, res) {
    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database,
    });
    
    const people = await db.all('select * from person');

    res.json(people);
};