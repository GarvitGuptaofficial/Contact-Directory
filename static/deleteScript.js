document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let memberType = document.querySelector('input[name = "member"]:checked').value;
    let uniqueID = document.getElementById('uniqID').value;
    let divElement = document.getElementById("addTextHere");
    uniqueID = parseInt(uniqueID);

    textToAdd = "ok"
    console.log(`${memberType}`);
    console.log(`${uniqueID}`)
    if(memberType === 'student'){
        fetch(`/getStudentData/${uniqueID}`)
            .then(response => response.json())
            .then(data => {
                if(data.error){
                    divElement.textContent = `There is no student with roll number ${uniqueID}. This data cannot be deleted.`
                    console.log('no member')
                } else {
                    console.log('succesful delete')
                    divElement.textContent = `The student with roll number ${uniqueID} has been deleted.`
                    fetch(`/deleteStudentData/${uniqueID}`)
                        .then(response => {
                            if(response.ok) {
                                console.log('Success');
                            } else {
                                console.log('L')
                            }
                        });
                }
            });
    } else if(memberType === 'faculty'){
        fetch(`/getFacultyData/${uniqueID}`)
            .then(response => response.json())
            .then(data => {
                if(data.error){
                    divElement.textContent = `There is no faculty member with id ${uniqueID}. This data cannot be deleted.`
                    console.log('no member')
                } else {
                    console.log('succesful delete')
                    divElement.textContent = `The faculty member with id ${uniqueID} has been deleted.`
                    fetch(`/deleteFacultyData/${uniqueID}`)
                        .then(response => {
                            if(response.ok) {
                                console.log('Success');
                            } else {
                                console.log('L')
                            }
                        });
                }
            });
    }
});