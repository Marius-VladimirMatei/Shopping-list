const input_field = document.getElementById("input_field");
const list_container = document.getElementById("list_container");

function add_item(){
    if(input_field.value === ''){
        alert("You must enter an item")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_field.value;
        list_container.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // clear the inpt field after add
    input_field.value = '';

    // automatically place the cursor on the input field
    input_field.focus();

    save_data();
    
} 

// X delete function
list_container.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

        save_data();
    }
});


// store the items
function save_data(){
    localStorage.setItem("data", list_container.innerHTML);
}

function showSavedData(){
    list_container.innerHTML = localStorage.getItem("data");
}
showSavedData();


// click add new item on click
document.getElementById('add_button').addEventListener('click', add_item);

// enter add new item on enter
document.getElementById('input_field').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        add_item();
    }
})