const URL =  window.location.hostname.includes('localhost')
? 'http://localhost:8080' : "https://esportlix.herokuapp.com";

export default {
    URL
}