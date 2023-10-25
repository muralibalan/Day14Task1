function addData(){
    var fnameInput = document.getElementById("firstname");
    var lnameInput = document.getElementById("lastname");
    var addressInput = document.getElementById("address");
    var pcode = document.getElementById("pincode")
    var genderInput = document.querySelector('input[name="Gender"]:checked');
    var foodInput = document.querySelectorAll('input[name="myFood"]:checked');
    var stateSelect = document.getElementById("state");
    var countrySelect = document.getElementById("country");


    var fName = fnameInput.value;
    var lName = lnameInput.value;
    var address = addressInput.value;
    var pincode = pcode.value;
    var gender = genderInput.value;
    var food = Array.from(foodInput).map(input => input.value);
    var state = stateSelect.value;
    var country = countrySelect.value;

    if(food.length<2){
        alert("you Must Choose at least 2 out of 5 options!!!");
    }
    else{
             var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
             var newRow = table.insertRow(table.rows.length);
            
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);
            var cell7 = newRow.insertCell(6);
            var cell8 = newRow.insertCell(7);


            cell1.innerHTML = fName;
            cell2.innerHTML = lName;
            cell3.innerHTML = address;
            cell4.innerHTML = pincode;
            cell5.innerHTML = gender;
            cell6.innerHTML = food.join(', ');
            cell7.innerHTML = state;
            cell8.innerHTML = country;

              // Clear form fields
            fnameInput.value = '';
            lnameInput.value = '';
            addressInput.value = '';
            pcode.value='';
            genderInput.checked = false;
            foodInput.forEach(input => (input.checked = false));
            stateSelect.selectedIndex = 0;
            countrySelect.selectedIndex = 0;

           form.reset();
    }

}