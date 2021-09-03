class PodcastService {

    constructor(endpoint){
        this.endpoint = endpoint
    }
    
    getPodcasts(){
        fetch(`${this.endpoint}/podcasts`)
        .then(resp => resp.json())
        .then(podcasts => {
            for (const podcast of podcasts){
                const c = new Podcast(podcast)
                c.slapOnDom()
            }
        })
    }

    static createPodcast(event){
        event.preventDefualt()
        const form = event.target
        const data = {
            podcast: {
                name: form.querySelector(`#name`).value
            }
        }
        form.reset()

        fetch(`${base_url}/podcasts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(podcast => {
            const c = new Podcast(podcast)
            c.slapOnDom()
        })
    }

}
