   const emailInput = document.querySelector('.email');
        const firstnameInput = document.querySelector('.firstname');
        const lastnameInput = document.querySelector('.lastname');
        const saveButton = document.querySelector('.btn');
        const titleName = document.querySelector('.title-name');
        const printedForm = document.querySelector('.printedform');

        document.addEventListener('DOMContentLoaded', () => {
            const savedData = sessionStorage.getItem('userFormData');
            
            if (savedData) {
                const data = JSON.parse(savedData);
                
                emailInput.value = data.email || '';
                firstnameInput.value = data.firstname || '';
                lastnameInput.value = data.lastname || '';
                
                titleName.textContent = data.firstname || '';
            }
        });

        saveButton.addEventListener('click', () => {
            
            const formData = {
                email: emailInput.value.trim(),
                firstname: firstnameInput.value.trim(),
                lastname: lastnameInput.value.trim()
            };

            sessionStorage.setItem('userFormData', JSON.stringify(formData));
            titleName.textContent = formData.firstname;

            printedForm.textContent = "Dati salvati con successo nella sessione!";
        }); 