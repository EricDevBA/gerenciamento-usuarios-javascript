class UserController {
    constructor (formId,tableId) {

        this.formEl = document.getElementById(formId);
        //this.formUpdateEl = document.getElementById(formIdUpdate);
        this.tableEl = document.getElementById(tableId)

        this.onSubmit();
    }

     onSubmit () {  //Evento para ser acionado ao formulário

        this.formEl.addEventListener("submit", event => {
            event.preventDefault();
            this.addLine(this.getValues());

        });         
     }

    getValues() { // Retornar o usuário

        let user = {};
        let isValid = true;

        [...this.formEl.elements].forEach(function (field, index) {   // Operador Spread

            if (['name', 'email', 'password'].indexOf(field.name) > -1 && !field.value) {

                field.parentElement.classList.add('has-error');
                isValid = false;

            }

            if (field.name == "gender") {

                if (field.checked) {
                    user[field.name] = field.value;
                }

            } else if(field.name == "admin") {

                user[field.name] = field.checked;

            } else {

                user[field.name] = field.value;

            }

        })
        if (!isValid) {
            return false;
        };


        return new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin
        );

    
    }

    addLine(dataUser) {
        this.tableEl.innerHTML = `
            <tr>
                <td><img




        `;
        



    }





}