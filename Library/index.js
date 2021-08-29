console.log("working");
function book(title,author,type){
    this.name=title;
    this.author=author;
    this.type=type;
}

function display(){

}

display.prototype.add = function(book){
    console.log('adding');
    tableBody=document.getElementById('tableBody');
    let uistring=`<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                </tr>`;
    tableBody.innerHTML+=uistring;
}

display.prototype.validate=function(book){
    if(book.name.length<2||book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}
display.prototype.show=function(type,message){
    let msg=document.getElementById('msg');
    msg.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Messge:</strong> ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
</div>`
setTimeout(function(){
    msg.innerHTML="";
},2000);
}
display.prototype.clear=function(){
    let libraryForm= document.getElementById('libraryForm');
    libraryForm.reset();
}

// add submit evetn listener
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',formSubmit);
function formSubmit(e){
    let name=   document.getElementById('bookName').value;
    let author=document.getElementById('author').value;
    let fiction= document.getElementById('fiction');
    let programming= document.getElementById('programming');
    let cooking= document.getElementById('cooking');

    if(fiction.checked){
        type=fiction.value;
    }
    else if(programming.checked){
        type=programming.value;
    }
    else if(cooking.checked){
        type=cooking.value;
    }
    let book=new book(title,author,type);
    let display= new display();
    if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success','succsessfull');
    }
    else{
        display.show('error','sorry you cannot add');
    }
    e.preventDefault();
}