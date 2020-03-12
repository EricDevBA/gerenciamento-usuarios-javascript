class UserController {
    constructor (formId) {

        this.formEl = document.getElementById(formIdCreate);
        //this.formUpdateEl = document.getElementById(formIdUpdate);
        //this.tableEl = document.getElementById(tableId)
    }

     Onsubmit () {  //Evento para ser acionado ao formulário

        this.formEl.addEventListener("submit", event => {
            event.preventDefault();
            this.getValues();

        });         
     }

    getValues() { // Retornar o usuário

        let user = {};
        
        this.formEl.elements.forEach(function (field, index) {
            if(field.name == "gender" ){
                user[field.name] = field.value;
            }
            else{

            user[field.name] = field.value
        }

        });

           return  new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email
           ) 


    }




}