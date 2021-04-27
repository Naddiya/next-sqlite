import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function getVehicleByPersonId(req, res) {
    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database,
    });
    
    const userVehicles = await db.all('select * from vehicle where ownerId=?', [req.query.id]);

    res.json(userVehicles);
};