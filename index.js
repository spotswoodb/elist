const base_url = "http://127.0.0.1:3000"
const podcastService = new PodcastService(base_url)
podcastService.getPodcasts()
Podcast.renderForm()
Contact.renderForm()