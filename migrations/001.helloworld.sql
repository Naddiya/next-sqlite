-- UP
CREATE TABLE Person(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);
CREATE TABLE Vehicle(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (name, email) values ('nana', 'nana@medkouri.ma');
INSERT INTO Person (name, email) values ('nanou', 'nanou@medkouri.ma');

INSERT INTO Vehicle (brand, model, ownerId) values ('renault', 'R4', 1);
INSERT INTO Vehicle (brand, model, ownerId) values ('renault', 'R5', 2);
INSERT INTO Vehicle (brand, model, ownerId) values ('citroen', 'ZX', 2);
INSERT INTO Vehicle (brand, model, ownerId) values ('citroen', 'AX', 2);


-- DOWN
DROP TABLE Person;
DROP TABLE Vehicle;