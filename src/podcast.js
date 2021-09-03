
class Podcast {

    static all = []
    static podcastsContainer = document.getElementById('podcasts-container')
    static podcastForm = document.getElementById('podcast-form-container')

    constructor({name, id}) {
        this.id = id
        this.name = name
        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id =  `podcast-${this.id}`
        Podcast.all.push(this)
    }
    
    podcastHTML(){

        this.element.innerHTML += `
            <div>
                <h3 class='p-4'>
                    <span data-podcast-id="${this.id}">${this.name}</span>
                </h3>
                <div id="podcast-${this.id}-contacts-container">
                </div>
            </div>
        `
        return this.element
    }

    slapOnDom(){
        Podcast.podcastsContainer.append(this.podcastHTML())
        const podcastSpan = document.querySelector(`#podcast-${this.id} span`)
        podcastSpan.addEventListener('click', ContactService.toggleDiv)
    }

    static renderForm(){
        Podcast.podcastForm.innerHTML += `
            <form id="new-podcast-form">
                Podcast Name: <input type='text' id='name'>
                <input type='submit' id='create'>
            </form>
        `
        document.querySelector('#new-podcast-form').addEventListener('submit', PodcastService.createPodcast)   
    }

}   
