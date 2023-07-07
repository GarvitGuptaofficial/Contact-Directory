#!/usr/bin/python3
import sqlite3
from urllib.parse import urlencode
from flask_cors import CORS
from flask import Flask, flash, request, json, render_template, redirect, url_for, json, jsonify, url_for, send_from_directory
app = Flask(__name__, template_folder='webpages')
CORS(app,origin="*")
app.secret_key = "abacsfaasjnavfgegaeakscbb"

@app.route("/")
def mainPage() -> str:
	return render_template("HomePage.html")

@app.route("/logo")
def logo():
    return send_from_directory(app.static_folder, 'IIITlogo.png')

@app.route('/addPage.html')
def addPage():
    return render_template("addPage.html")

@app.route('/addStudent.html')
def addStudentForm():
    return render_template("addStudent.html")

@app.route('/addFaculty.html')
def addFacultyForm():
    return render_template("addFaculty.html")

@app.route("/studentAdded", methods = ['POST'])
def addStudent():
    name = request.form.get("name")
    gender = request.form.get("gender")
    rollNumber = int(request.form.get("rollNum"))
    age = request.form.get("age")
    email = request.form.get("email")
    phoneNum = int(request.form.get("phoneNum"))
    hostel = request.form.get("Hostel")
    program = request.form.get("program")
    degree = request.form.get("degree")
    batch = request.form.get("Batch")    
    
    with sqlite3.connect('static/database.db') as database:
            cursor = database.cursor()

            query = f"SELECT college_id FROM students WHERE college_id = {rollNumber}"
            cursor.execute(query)
            data = cursor.fetchall()

            if len(data) != 0:
                flash(f"A student with roll number {rollNumber} is already in the database")
                return render_template("failedToAdd.html")
            else:
                cursor.execute("INSERT INTO students (name, gender, college_id, age, email, phone_number, degree, hostel, program, batch) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", (name, gender, rollNumber, age, email, phoneNum, degree, hostel, program, batch))
                database.commit()
                
                flash(f"{name} has been succesfully added into the database!")
                return render_template("succesfulAdd.html")

@app.route("/facultyAdded", methods = ['POST'])
def addFaculty() -> str:
    name = request.form.get("name")
    # gender = request.form.get("gender")
    facID = int(request.form.get("facID"))
    email = request.form.get("email")
    phoneNum = int(request.form.get("phoneNum"))
    resArea = request.form.get("resArea")
    desig = request.form.get("designation")
    quals = request.form.get("quals")
    
    with sqlite3.connect('static/database.db') as database:
            cursor = database.cursor()

            query = f"SELECT faculty_id FROM faculty WHERE faculty_id = {facID}"
            cursor.execute(query)
            data = cursor.fetchall()

            if len(data) != 0:
                flash(f"A faculty member with id {facID} is already in the database")
                return render_template("failedToAdd.html")
            else:
                cursor.execute("INSERT INTO faculty (name, faculty_id, email, phone_number, research_areas, designation, qualifications) VALUES (?, ?, ?, ?, ?, ?, ?)", (name, facID, email, phoneNum, resArea, desig, quals))
                database.commit()
            
                flash(f"{name} has been succesfully added into the database!")
                return render_template("succesfulAdd.html")

@app.route('/deleteAndReAddStudent/<rollNum>', methods = ['POST'])
def delAndReAddStudent(rollNum):
    deleteStudentData(rollNum)
    data = request.form
    query_string = urlencode(data)
    return redirect(url_for('reAddStudent') + '?' + query_string)
    
@app.route("/reAddStudent", methods = ['GET', 'POST'])
def reAddStudent():
    name = request.args.get("name")
    gender = request.args.get("gender")
    rollNumber = int(request.args.get("rollNum"))
    age = request.args.get("age")
    email = request.args.get("email")
    phoneNum = int(request.args.get("phoneNum"))
    hostel = request.args.get("Hostel")
    program = request.args.get("program")
    degree = request.args.get("degree")
    batch = request.args.get("Batch")    
    
    with sqlite3.connect('static/database.db') as database:
            cursor = database.cursor()

            query = f"SELECT college_id FROM students WHERE college_id = {rollNumber}"
            cursor.execute(query)
            data = cursor.fetchall()

            if len(data) != 0:
                flash(f"A student with roll number {rollNumber} is already in the database")
                return render_template("failedToAdd.html")
            else:
                cursor.execute("INSERT INTO students (name, gender, college_id, age, email, phone_number, degree, hostel, program, batch) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", (name, gender, rollNumber, age, email, phoneNum, degree, hostel, program, batch))
                database.commit()
                
                flash(f"{name} has been succesfully added into the database!")
                return render_template("succesfulAdd.html")

@app.route('/deleteAndReAddFac/<rollNum>', methods = ['POST'])
def delAndReAddFac(rollNum):
    deleteFacultyData(rollNum)
    data = request.form
    query_string = urlencode(data)
    return redirect(url_for('reAddFac') + '?' + query_string)
    
@app.route("/reAddFac", methods = ['GET', 'POST'])
def reAddFac():
    name = request.args.get("name")
    # gender = request.form.get("gender")
    facID = int(request.args.get("facID"))
    email = request.args.get("email")
    phoneNum = int(request.args.get("phoneNum"))
    resArea = request.args.get("resArea")
    desig = request.args.get("designation")
    quals = request.args.get("quals")
    
    with sqlite3.connect('static/database.db') as database:
            cursor = database.cursor()

            query = f"SELECT faculty_id FROM faculty WHERE faculty_id = {facID}"
            cursor.execute(query)
            data = cursor.fetchall()

            if len(data) != 0:
                flash(f"A faculty member with id {facID} is already in the database")
                return render_template("failedToAdd.html")
            else:
                cursor.execute("INSERT INTO faculty (name, faculty_id, email, phone_number, research_areas, designation, qualifications) VALUES (?, ?, ?, ?, ?, ?, ?)", (name, facID, email, phoneNum, resArea, desig, quals))
                database.commit()
            
                flash(f"{name} has been succesfully added into the database!")
                return render_template("succesfulAdd.html")

@app.route('/getStudentData/<rollNum>')
def getStudentData(rollNum):
    with sqlite3.connect('static/database.db') as database:
        cursor = database.cursor()

        query = "SELECT * FROM students WHERE college_id = ?"
        cursor.execute(query, (rollNum,))
        data = cursor.fetchall()

        print(jsonify(data))
        if len(data) != 0:
            reply = jsonify(data)
            reply.headers.add('Access-Control-Allow-Origin', '*')
            return reply
        else:
            reply = jsonify({'error': 'No data found'})
            reply.headers.add('Access-Control-Allow-Origin', '*')
            return reply
        
@app.route('/deleteStudentData/<rollNum>')
def deleteStudentData(rollNum):
    with sqlite3.connect('static/database.db') as database:
        cursor = database.cursor()

        query = "DELETE FROM students WHERE college_id = ?"
        cursor.execute(query, (rollNum,))

@app.route('/deletePage.html')
def deletePage():
    return render_template("deletePage.html")

@app.route('/getFacultyData/<rollNum>')
def getFacultyData(rollNum):
    with sqlite3.connect('static/database.db') as database:
        cursor = database.cursor()

        query = "SELECT * FROM faculty WHERE faculty_id = ?"
        cursor.execute(query, (rollNum,))
        data = cursor.fetchall()

        print(jsonify(data))
        if len(data) != 0:
            reply = jsonify(data)
            reply.headers.add('Access-Control-Allow-Origin', '*')
            return reply
        else:
            reply = jsonify({'error': 'No data found'})
            reply.headers.add('Access-Control-Allow-Origin', '*')
            return reply

@app.route('/deleteFacultyData/<rollNum>')
def deleteFacultyData(rollNum):
    with sqlite3.connect('static/database.db') as database:
        cursor = database.cursor()

        query = "DELETE FROM faculty WHERE faculty_id = ?"
        cursor.execute(query, (rollNum,))

@app.route('/SearchPage.html')
def getSearchPage():
    return render_template("SearchPage.html")

@app.route('/deleteOrEdit.html')
def getDelOrEdit():
    return render_template("deleteOrEdit.html")

@app.route('/searchStu.html')
def getSearchStu():
    return render_template("searchStu.html")

@app.route('/searchFac.html')
def getSearchFac():
    return render_template("searchFac.html")

@app.route('/editPage.html')
def getEditPage():
    return render_template("editPage.html")

@app.route("/search",methods=['POST'])
def studentsearch():
    student_data = request.get_json()
    conn = sqlite3.connect('static/database.db')
    c = conn.cursor()

    if 'collegeId' in student_data:
         id=student_data['collegeId']
         c.execute(f"SELECT name, gender, college_id, age, email, phone_number, degree, hostel , program, batch, section FROM students WHERE college_id = {id}")
         r=c.fetchall()
         print(r)
         return r

    if 'phoneNumber' in student_data:
         id=student_data['phoneNumber']
         c.execute(f"SELECT name, gender, college_id, age, email, phone_number, degree, hostel , program, batch, section FROM students WHERE phone_number = {id}")
         r=c.fetchall()
         print(r)
         return r 
         
    if 'name' in student_data:
        id=student_data['name']
        c.execute(f"SELECT name, gender, college_id, age, email, phone_number, degree, hostel , program, batch, section FROM students WHERE name= '{id}'")
        r=c.fetchall()
        print(r)
        return r
        
        
    conn.close()
    return student_data

@app.route("/searchfac",methods=['POST'])
def facultysearch():
    student_data = request.get_json()
    conn = sqlite3.connect('static/database.db')
    c = conn.cursor()

    if 'collegeId' in student_data:
         id=student_data['collegeId']
         c.execute(f"SELECT name, faculty_id, email,  phone_number,  research_areas,  designation, qualifications FROM faculty WHERE college_id = {id}")
         r=c.fetchall()
         print(r)
         return r

    if 'phoneNumber' in student_data:
         id=student_data['phoneNumber']
         c.execute(f"SELECT name, faculty_id, email,  phone_number,  research_areas,  designation, qualifications FROM faculty WHERE phone_number = {id}")
         r=c.fetchall()
         print(r)
         return r 
         
    if 'name' in student_data:
        id=student_data['name']
        c.execute(f"SELECT name, faculty_id, email,  phone_number,  research_areas,  designation, qualifications FROM faculty WHERE name = '{id}'")
        r=c.fetchall()
        print(r)
        return r
        
        
    conn.close()
    return student_data


if __name__ == "__main__":
	app.run(debug = True)
