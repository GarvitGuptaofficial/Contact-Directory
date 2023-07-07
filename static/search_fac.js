function search(){
    const name=document.getElementById('name').value;
    const collegeId=document.getElementById('collegeId').value;
    const phoneNumber=document.getElementById('phoneNumber').value;

    if(collegeId!=''){
        var data = {
            "collegeId": collegeId
          };
          fetch("http://localhost:5000/searchfac", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(data =>{
            if(data.length==0){
              const w=document.getElementById('noresults');
              w.innerText="No Match Found";
           }else{
            const w=document.getElementById('noresults');
            w.innerText="";
           }
            const tableBody = document.getElementById("table-body");
            tableBody.innerHTML = "";  
            data.forEach(student => {
              const row = document.createElement("tr");
              row.innerHTML = `
                <td>${student[0]}</td>
                <td>${student[1]}</td>
                <td>${student[2]}</td>
                <td>${student[3]}</td>
                <td>${student[4]}</td>
                <td>${student[5]}</td>
                <td>${student[6]}</td>
              `;
              tableBody.appendChild(row);
            });
          })
          .catch(error => {
            console.error(error);
          });  
          
    }else if(phoneNumber!=''){
        var data = {
            "phoneNumber": phoneNumber
          };
          console.log(data);
          fetch("http://localhost:5000/searchfac", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
          .then(response =>  response.json())
          .then(data =>{
            if(data.length==0){
              const w=document.getElementById('noresults');
              w.innerText="No Match Found";
           }else{
            const w=document.getElementById('noresults');
            w.innerText="";
           }
            const tableBody = document.getElementById("table-body");
            tableBody.innerHTML = "";  
            data.forEach(student => {
              const row = document.createElement("tr");
              row.innerHTML = `
                <td>${student[0]}</td>
                <td>${student[1]}</td>
                <td>${student[2]}</td>
                <td>${student[3]}</td>
                <td>${student[4]}</td>
                <td>${student[5]}</td>
                <td>${student[6]}</td> 
              `;
              tableBody.appendChild(row);
            });
          })
          .catch(error => {
            console.error(error);
          });  
    }else if(name!='' && collegeId=='' && phoneNumber==''){
        var data = {
            "name": name
          };
          console.log(data);
          fetch("http://localhost:5000/searchfac", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(data =>{
            if(data.length==0){
              const w=document.getElementById('noresults');
              w.innerText="No Match Found";
           }else{
            const w=document.getElementById('noresults');
            w.innerText="";
           }
            const tableBody = document.getElementById("table-body");
            tableBody.innerHTML = "";  
            data.forEach(student => {
              const row = document.createElement("tr");
              row.innerHTML = `
                <td>${student[0]}</td>
                <td>${student[1]}</td>
                <td>${student[2]}</td>
                <td>${student[3]}</td>
                <td>${student[4]}</td>
                <td>${student[5]}</td>
                <td>${student[6]}</td> 
              `;
              tableBody.appendChild(row);
            });
          })
          .catch(error => {
            console.error(error);
          });  
    }

    

}