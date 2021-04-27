import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function getVehicle(req, res) {
    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database,
    });
    
    const vehicle = await db.all('select * from vehicle where id=?', [req.query.id]);

    res.json(vehicle);
};