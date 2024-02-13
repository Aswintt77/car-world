function carrecords(){
    const newcar = {
        cbrand : carbrand.value,
        cprice : carprice.value,
        ckey : carkey.value
    }
    localStorage.setItem(newcar.ckey,JSON.stringify(newcar))
    alert("Car Key Created Successfully.");
    document.getElementById("inpforms").reset();
}

function retrievecar(){
    let key = keyinput.value;

    if(key in localStorage){
        diskey = JSON.parse(localStorage.getItem(key));
        retrieved.innerHTML = `<p>Car Details</p>
        <li>Car Brand : ${diskey.cbrand}</li>
        <li>Car Price : ${diskey.cprice}</li>
        <li>Car Brand : ${diskey.ckey}</li>`
    }else{
        alert('This Key doesnot Exists..!');
    }
}


function deletecar() {
    let key = delkey.value;
    let item = localStorage.getItem(key);

    if (item !== null) {
        localStorage.removeItem(key);
        alert("Item with key " + key + " deleted successfully.");
        retrieved.innerHTML = "";
    } else {
        alert('This Key does not exist in localStorage.');
    }
}

function deleteAll(){
    localStorage.clear();
    alert("All Records been cleared from the Local Storage ")
    retrieved.innerHTML = "";
}