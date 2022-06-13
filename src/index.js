document.addEventListener("DOMContentLoaded", () => {
  console.log('load complete: Code and documentation by Osagiede Nosakhare .A.')
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let user_text = e.target.new_task_description.value
    displayUserText(user_text, e)
  })
});


function displayUserText(text, event){

  if (text === ''){
    alert('Enter text!!!!')
  }else{
    //initialise elements
    let userTextField = document.createElement('h4')
    let deleteButton = document.createElement('button')
    let select = document.createElement('select')
    let option1 = document.createElement('option')
    let option2 = document.createElement('option')
    let option3 = document.createElement('option')
    let form = document.querySelector('#create_task_form')
    let background = document.querySelector("#main-content")


    //assign values
    deleteButton.addEventListener('click',deleteItem)
    deleteButton.textContent = "delete"

    background.style.background = 'yellow';

    //dynamic dropdown
    select.style.margin = '5px'
    option1.value = 'black'
    option1.textContent = 'default'
    option1.style.color = 'black'
    option2.value = 'red'
    option2.textContent = 'red'
    option2.style.color = 'red'
    option3.value = 'blue'
    option3.textContent = 'blue'
    option3.style.color = 'blue'

    select.addEventListener('click', e => userTextField.style.color = e.target.value) //define current value and assign to text

    userTextField.textContent = `${text}   `;
    userTextField.style.height = "50px"
    userTextField.style.padding = "5px"

    //append elements to parent nodes
    
    form.appendChild(userTextField)
    userTextField.appendChild(deleteButton)
    userTextField.appendChild(select)
    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)

  }
  
  
}

//delete callback function
function deleteItem(e){
  e.target.parentNode.remove()
}



