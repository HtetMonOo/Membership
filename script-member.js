// ********** ADDING NEW MEMBERS ************

const member = {
    Username: '',
    Name: '',
    Team: '',
}
var row=null

function addMember(user, name, team){
    member.Username=user
    member.Name=name
    member.Team=team
    memberString = JSON.stringify(member)
    if (typeof window !== "undefined") {
        localStorage.setItem(member.Username, memberString)
    }
    return member
}

addMember('mama','Ma Ma','DK')
addMember('koko', 'Ko Ko', 'DB')

function showMember(key){   
    var memberObj=JSON.parse(localStorage.getItem(key))
    var table=document.getElementById('membersTable')
    var tr=table.insertRow()
    var td1=tr.insertCell(0)
    var td2=tr.insertCell(1)
    var td3=tr.insertCell(2)
    var td4=tr.insertCell(3)
    print(td1);
    td1.innerHTML=memberObj.Username
    td2.innerHTML=memberObj.Name
    td3.innerHTML=memberObj.Team
    td4.innerHTML= '<button title="Edit" onclick="editMember(this)"> <i class="fas fa-user-edit"></i> </button>  <button onclick="deleteMember(this)" title="Delete"> <i class="fas fa-trash-alt"></i> </button>'

}

showMember('mama')
showMember('koko')

function resetForm(){
    document.getElementById("username").value = ""
    document.getElementById("name").value = ""
    document.getElementById("team").value = ""
}

function editMember(td){
    row = td.parentElement.parentElement
    document.getElementById('username').value = row.cells[0].innerHTML
    document.getElementById('name').value = row.cells[1].innerHTML
    document.getElementById('team').value = row.cells[2].innerHTML

    document.querySelector("#add-button").innerHTML= 'Edit'
}

function updateMember(input){
    if(confirm("Are you sure to edit this member?")){
        row.cells[0].innerHTML = input.Username
        row.cells[1].innerHTML = input.Name
        row.cells[2].innerHTML = input.Team
        row = null
        document.querySelector("#add-button").innerHTML= 'Add'
    }
}

function deleteMember(td){
    if(confirm("Are you sure to delete this member?")){
        var index = td.parentNode.parentNode.rowIndex
        document.querySelector("table").deleteRow(index)
    }
}

function duplicate(user){
    var n=0
    console.log(localStorage.key.length)
    while(n<10){
        if( user === localStorage.key(n)){
            return true
        }
        n++;
    }
    return false
}

function getMember(){
    var username = document.getElementById("username").value
    var name = document.getElementById("name").value
    var team = document.getElementById("team").value
    
    if(row != null){
        var data=addMember(username, name, team)
        updateMember(data)      
        resetForm()
    }else if(duplicate(username)){
        alert("This username was already in use. Choose another one!!")
    }else if((username === '') || (name ==='')){
        alert("Type username and name to add a new member!!")
    }else{
        addMember(username, name, team)
        alert("A new member is added")
        resetForm()
        showMember(username)
    }
}