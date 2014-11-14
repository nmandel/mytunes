// SongQueue.js - Defines a backbone model class for the song queue.
// THIS IS A COLLECTION
var SongQueue = Songs.extend({

  initialize: function(){

    // if songQueue is 1, then play
    this.on("add", function() {
      if (this.length === 1) {
        // grab song in songqueue and play it
        console.log(this);
        this.trigger('play');
      }
    }, this)


  },

  playFirst: function () {
    this.at(0).play();
  },
});
