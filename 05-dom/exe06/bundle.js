        const emailInput = document.querySelector('.email');
        const firstnameInput = document.querySelector('.firstname');
        const lastnameInput = document.querySelector('.lastname');
        const saveButton = document.querySelector('.btn');
        const titleName = document.querySelector('.title-name');
        const printedForm = document.querySelector('.printedform');

        document.addEventListener('DOMContentLoaded', () => {
            const savedData = localStorage.getItem('formData');
            
            if (savedData) 
                const data = JSON.parse(savedData);
                
                emailInput.value = data.email || '';
                firstnameInput.value = data.firstname || '';
                lastnameInput.value = data.lastname || '';
                le upon reloading
                titleName.textContent = data.firstname || '';
            }
        }n the button is clicked
        saveButton.addEventListener('click', () => {

            const formData = {
                email: emailInput.value.trim(),
                firstname: firstnameInput.value.trim(),
                lastname: lastnameInput.value.trim()
            };

            localStorage.setItem('formData', JSON.stringify(formData));

            titleName.textContent = formData.firstname;

            printedForm.textContent = `Dati salvati con successo per ${formData.firstname}!`;
        });