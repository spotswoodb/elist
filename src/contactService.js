class ContactService {
        // 1. Read/Index action

        static getContacts(podcastId){
            fetch(`${base_url}/podcasts/${podcastId}/contacts`)
            .then(resp => resp.json())
            .then(contacts => {
                for (const contact of contacts){
                    const c = new Contact(contact)
                    c.slapOnDom()
                }
            })
        }


        static createContact(event){
            event.preventDefault()
            const form = event.target
            const data = {
                contact: {
                    first_name: form.querySelector(`#first_name`).value,
                    last_name: form.querySelector(`#last_name`).value,
                    role: form.querySelector(`#role`).value,
                    email: form.querySelector(`#email`).value,
                }
            }
            form.reset()

            fetch(`${base_url}/podcasts/${podcastId}/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(resp => resp.json())
            .then(contact => {
                const c = new Contact(contact)
                c.slapOnDom()
            })
        }
 
        static toggleDiv(e) {
            const podcastId = e.target.dataset.podcastId
            const contactContainer = document.querySelector(`#podcast-${podcastId}-contacts-container`)

            if (contactContainer.classList.contains("open")){
                contactContainer.innerHTML = ''
                contactContainer.classList.remove('open')
            } else {
                ContactService.getContacts(podcastId)
                contactContainer.classList.add('open')
            }
        }

        static deleteContact(e){
            const contactId = e.target.dataset.contactId
            document.querySelector(`#contact-${contactId}`).remove()
            fetch(`${base_url}/contacts/${contactId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(json => alert(json.message))
        }
}
