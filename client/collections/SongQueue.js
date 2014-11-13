// SongQueue.js - Defines a backbone model class for the song queue.
// THIS IS A COLLECTION
var SongQueue = Songs.extend({

  initialize: function(){
    //if songQueue is 1, then play
    // console.log(this.length);

    // this.on("add", function() {
      if (this.length === 1) {
        this.playFirst();
      }
    // }, this)

  },

  playFirst: function () {
    // this.at(0).play();
  },
});
