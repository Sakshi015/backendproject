const searchName = document.getElementById("search");
const btn = document.getElementById("btn");
console.log(btn);
console.log(searchName);
let users = [];

function ADDuser() {
    //creat a table
    var table = document.getElementById("result_table");

    //get values from form
    var Name = document.getElementById("Name").value;
    var mob_no = document.getElementById("mob_no").value;
    var email = document.getElementById("email").value;

    let newUser = {
        name: Name,
        no: mob_no,
        mail: email,
    };
    users.push(newUser);

    console.log(users);

    if (Name == "" || mob_no == "" || email == "") {
        alert("Please Enter Vaild credentials");
    } else {
        //creat tr tag
        var tr = document.createElement("TR");

        var td = document.createElement("TD");
        var inp_1 = document.createTextNode(Name);
        td.appendChild(inp_1);
        tr.appendChild(td);

        var td_2 = document.createElement("TD");
        var inp_2 = document.createTextNode(mob_no);
        td_2.appendChild(inp_2);
        tr.appendChild(td_2);

        var td_3 = document.createElement("TD");
        var inp_3 = document.createTextNode(email);
        td_3.appendChild(inp_3);
        tr.appendChild(td_3);

        var td_4 = document.createElement("TD");
        var delet = document.createElement("Button");
        var text_btn = document.createTextNode("Delete");
        delet.appendChild(text_btn);
        delet.setAttribute("onclick", "delete_user()");
        td_4.appendChild(delet);

        tr.appendChild(td_4);

        table.appendChild(tr);
    }
}

function delete_user() {
    var td_d = event.target.parentNode;
    var tr_D = td_d.parentNode;
    tr_D.parentNode.removeChild(tr_D);
}

btn.addEventListener("click", searchResults);

function searchResults() {
    let name = searchName.value;
    if (name != "") {
        // let lower = users.map(function (user) {
        //   user.name.toLowerCase();
        // });
        let searchResult = users.filter(function (user) {
            return user.name.startsWith(name);
        });
        showSearchResults(searchResult);
    }
    searchName.value = "";
}

function showSearchResults(searchResult) {
    let tr = "<table>";
    for (let i = 0; i < searchResult.length; i++) {
        tr += "<tr>";
        tr += "<td>" + searchResult[i].name + "</td>";
        tr += "<td>" + searchResult[i].no + "</td>";
        tr += "<td>" + searchResult[i].mail + "</td>";
        tr += "</tr>";
    }
    tr += "</table>";

    let show = document.getElementById("search-result");
    show.innerHTML = tr;
}
