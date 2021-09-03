class Contact {
    // remember objects
        static all = []
        static contactsContainer = document.getElementById("contacts-container")
        static contactForm = document.getElementById("contact-form-container")
        
        constructor({id, first_name, last_name, role, email, podcast_id}){
            this.id = id
            this.first_name = first_name
            this.last_name = last_name
            this.role = role
            this.email = email
            this.podcast_id = podcast_id
            this.element = document.createElement('li')
            this.element.dataset.id = this.id
            this.element.id = `contact-${this.id}`
            Contact.all.push(this)
        }

        // contactHTML(){
        //     this.element.innerHTML = `
        //         <div>
        //             <h4>${this.first_name} ${this.last_name}</h4>
        //             <p><strong>Role:</strong> ${this.role}</p>
        //             <p><strong>Email:</strong> ${this.email}</p>
        //         </div>
        //         <button class='delete-contact-button' data-contact-id='${this.id}'>Delete</button>
        //     `
        
        //     return this.element
        // }

        slapOnDom(){
            if (document.querySelector(`#contact-${this.id}`)){
                return
            }
            const contactsContainer = document.querySelector(`#podcast-${this.podcast_id}-contacts-container`)
            const contactContainer = document.createElement('div')
            contactContainer.id = `contact-${this.id}`
            contactContainer.innerHTML = `
                <div>
                    <h4>${this.first_name} ${this.last_name}</h4>
                    <p><strong>Role:</strong> ${this.role}</p>
                    <p><strong>Email:</strong> ${this.email}</p>
                </div>
                <button class='delete-contact-button' data-contact-id='${this.id}'>Delete</button>
            `
            contactsContainer.appendChild(contactContainer)
            const deleteButton = contactContainer.querySelector('.delete-contact-button')
            deleteButton.addEventListener('click', ContactService.deleteContact)
        }

        static renderForm(){
            Contact.contactForm.innerHTML += `
                <form id="new-contact-form">
                    First Name: <input type='text' id='first_name'>
                    Last Name: <input type='text' id='last_name'>
                    Role: <input type='text' id='role'>
                    Email: <input type='text' id='email'>
                    <input type='submit' id='create'>
                </form>
            `
            document.querySelector('#new-contact-form').addEventListener('submit', ContactService.createContact)   
        }
    
}