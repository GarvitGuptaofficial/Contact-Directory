import sqlite3

conn = sqlite3.connect('database.db')
cursor = conn.cursor()
cursor.execute('''CREATE TABLE students(
    id INTEGER PRIMARY KEY,
    name TEXT,
    gender TEXT,
    college_id INTEGER,
    age INTEGER,
    email TEXT,
    phone_number INTEGER,
    degree TEXT,
    hostel TEXT,
    program TEXT,
    batch TEXT,
    section TEXT
);''')
               
cursor.execute('''CREATE TABLE faculty (
    id INTEGER PRIMARY KEY,
    name TEXT,
    faculty_id INTEGER,
    email TEXT,
    phone_number INTEGER,
    research_areas TEXT,
    designation TEXT,
    qualifications TEXT
);''')

#cursor.execute('DELETE FROM songs')
# cursor.execute('SELECT name FROM songs')
# r=cursor.fetchall()
# print(r)
conn.commit()

conn.close()