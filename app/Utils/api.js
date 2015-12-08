var api = {
  getEvents(){
    var url = 'http://event-finder.dev/api/v1/events';
    return fetch(url).then((res) => res.json())
  },
  getEvent(eventId){
    var url = 'http://event-finder.dev/api/v1/events?nid=' + eventId ;
    return fetch(url).then((res) => res.json())
  },

};

module.exports = api;