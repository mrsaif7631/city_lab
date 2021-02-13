nconst formEl = document.querySelector("form");
const tableEl =document.querySelector("table");
function addDetails(e){
    e.preventDefault();
    const ref_id=document.getElementById("ref_id").value;
    const p_details=document.getElementById("p_details").value;
    const d_details=document.getElementById("d_details").value;
    const t_details=document.getElementById("t_details").value;
    const age_details=document.getElementById("age_details").value;
    const date_value=document.getElementById("date_value").value;
    if(!ref_id||!p_details||!d_details||!t_details||!age_details||!date_value){
        alert("please provide all fields data");
        return;
    }
    tableEl.innerHTML += `<tr>
                          <td>${ref_id}</td>
                          <td>${p_details}</td>
                          <td>${d_details}</td>
                          <td>${t_details}</td>
                          <td>${age_details}</td>
                          <td>${date_value}</td>
                        </tr>`  
}

formEl.addEventListener("submit",addDetails);
