//procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField);
//realizar uma ação
function cloneField() {
     // duplicar formulario
    const newFieldsContainer = document.querySelector('.schedule-item')
    .cloneNode(true);
    //pegar formulário
    const fields = newFieldsContainer.querySelectorAll('input, select')
    fields.forEach(function(field) {
        field.value = ""
    });
    //colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}     
