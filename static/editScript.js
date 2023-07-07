document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let memberType = document.querySelector('input[name = "member"]:checked').value;
    let uniqueID = document.getElementById('uniqID').value;
    let divElement = document.getElementById("addTextHere");
    uniqueID = parseInt(uniqueID);

    console.log(`${memberType}`);
    console.log(`${uniqueID}`)
    if(memberType === 'student'){
        fetch(`/getStudentData/${uniqueID}`)
            .then(response => response.json())
            .then(data => {
                if(data.error){
                    divElement.innerHTML = `&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;There is no student with roll number ${uniqueID}. This data cannot be deleted.`
                    console.log('no member')
                } else {
                    console.log(data);
                    let formHTML = `
                    <form method = "POST" action = "/deleteAndReAddStudent/${uniqueID}" id = "studentForm">
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" value = "${data[0][1]}" required><br/><br>
            
            <label for = "gender">Gender: </label>
            <input type = "text" id = "gender" name = "gender" value= "${data[0][2]}"><br/><br/>

            <label for = "rollNum">Roll Number: </label>
            <input type = "number" id = "rollNum" name = "rollNum" value = "${uniqueID}" required><br/><br/>

            <label for = "age">Age: </label>
            <input type = "number" id = "age" name = "age" value="${data[0][4]}" required><br/><br/>

            <label for = "email">Email: </label>
            <input type = "email" id = "email" name = "email" value="${data[0][5]}" required><br/><br/>

            <label for = "phoneNum">Phone Number: </label>
            <input type = "number" id = "phoneNum" name = "phoneNum" value="${data[0][6]}" required><br/><br/>

            <label for = "Hostel">Hostel: </label>
            <input type = "radio" id = "Bakul" name = "Hostel" value = "Bakul Nivas" style = "margin-left: 11%;">
            <label for = "Bakul">Bakul Nivas</label>
            <input type = "radio" id = "NBH" name = "Hostel" value = "New Boys Hostel">
            <label for = "NBH">New Boys Hostel</label>
            <input type = "radio" id = "OBH" name = "Hostel" value = "Old Boys Hostel">
            <label for = "OBH">Old Boys Hostel</label>
            <input type = "radio" id = "Parijat" name = "Hostel" value = "Parijat Nivas">
            <label for = "Parijat">Parijat Nivas</label><br/><br/>
            
            <label for = "program">Program: </label>
            <input type = "text" id = "program" name = "program" value = "${data[0][9]}"><br/><br/>

            <label for = "degree">Degree: </label>
            <input type = "text" id = "degree" name = "degree" value = "${data[0][7]}"><br/><br/>
            
            <label for = "Batch">Batch: </label>
            <input type = "radio" id = "UG1" name = "Batch" value = "UG1" style = "margin-left: 16.5%;">
            <label for = "UG1">UG1</label>
            <input type = "radio" id = "UG2" name = "Batch" value = "UG2">
            <label for = "UG2">UG2</label>
            <input type = "radio" id = "UG3" name = "Batch" value = "UG3">
            <label for = "UG3">UG3</label>
            <input type = "radio" id = "UG4" name = "Batch" value = "UG4">
            <label for = "UG4">UG4</label>
            <input type = "radio" id = "MS" name = "Batch" value = "MS">
            <label for = "MS">MS</label>
            <input type = "radio" id = "PHd" name = "Batch" value = "PHd">
            <label for = "PHd">PHd</label><br/><br/>
            
            <button type = "submit" style = "margin-left: 45%; font-size: 2.5vh">Submit New Data?</button>

        </form>
                    `;

                    divElement.innerHTML = formHTML;
                    
                    var hostel = document.getElementsByName("Hostel");
                    for(var i = 0; i < hostel.length; i++){
                        if(hostel[i].value === data[0][8]) {
                            console.log(hostel[i].value);
                            hostel[i].checked = true;
                        }
                    }

                    var batch = document.getElementsByName("Batch");
                    for(var i = 0; i < batch.length; i++){
                        if(batch[i].value === data[0][10]) {
                            batch[i].checked = true;
                        }
                    }
                    // fetch(`/deleteStudentData/${uniqueID}`)
                    //     .then(response => {
                    //         if(response.ok) {
                    //             console.log('Success');
                    //         } else {
                    //             console.log('L')
                    //         }
                    //     });

                }
            });
    } else if(memberType === 'faculty'){
        fetch(`/getFacultyData/${uniqueID}`)
            .then(response => response.json())
            .then(data => {
                if(data.error){
                    divElement.innerHTML = `&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;There is no faculty member with id ${uniqueID}. This data cannot be deleted.`
                    console.log('no member')
                } else {
                    console.log(data);
                    let formHTML = `
                    <form action = "/deleteAndReAddFac/${uniqueID}" method = "POST" id = "newForm">
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" value = "${data[0][1]}" required><br/><br>
            
            <!-- <label for = "gender">Gender: </label>
            <input type = "text" id = "gender" name = "gender" placeholder= "Enter your gender"><br/><br/> -->

            <label for = "facID">Faculty ID: </label>
            <input type = "number" id = "facID" name = "facID" value = "${uniqueID}" required><br/><br/>

            <label for = "email">Email: </label>
            <input type = "email" id = "email" name = "email" value="${data[0][3]}"><br/><br/>

            <label for = "phoneNum">Phone Number: </label>
            <input type = "number" id = "phoneNum" name = "phoneNum" value="${data[0][4]}" required><br/><br/>

            <label for = "resArea">Research Areas: </label>
            <input type = "text" id = "resArea" name = "resArea" value = "${data[0][5]}"><br/><br/>

            <label for = "designation">Designation: </label>
            <input type = "text" id = "designation" name = "designation" value = "${data[0][6]}"><br/><br/>

            <label for = "quals">Qualfications: </label>
            <input type = "text" id = "quals" name = "quals" value = "${data[0][7]}"><br/><br/>
            
            <button type = "submit" style = "margin-left: 45%; font-size: 2.5vh;">Submit New Data?</button>

        </form>
                    
                    `;

                    divElement.innerHTML = formHTML;
                }
            });
    }
});