// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  initialize: function() {

  },

  ended: function () {
    this.trigger('ended', this);
  },

  //   console.log('ended');
  //   // when the song ends,
  //   this.model.addEventListener("ended", function() {
  //     // remove the first song from the queue

  //     // check if the song queue is not empty
  //     //  if there is a song, set the first song in the queue to currentSong
  //   })

  enqueue: function () {
    this.trigger('enqueue',this);
  },

  dequeue: function () {
    this.trigger('dequeue',this);
  }

});

