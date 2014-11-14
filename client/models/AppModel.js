// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    // THIS IS A MODEL
    this.set('currentSong', null);

    // THIS IS A COLLECTION
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song) {
      // add the song into songQueue collection
      this.get('songQueue').add(song);
      console.log(this.get('songQueue'));
      // if the length of song queue is 1
      if (this.get('songQueue').length === 1) {
        song.play();
      }


    }, this);

    params.library.on('dequeue', function(song){
      // removes first song in songQueue collection
      this.get('songQueue').remove(this.get('songQueue').get(song));
      if (this.get('songQueue').length > 0) {
        //  if there is a song, set the first song in the queue to currentSong
        var nextSong = this.get('songQueue').first();
        nextSong.play();
      }
    }, this);

    params.library.on('ended', function(){
      this.get('songQueue').remove(this.get('songQueue').at(0));
      // check if the song queue is not empty
      if (this.get('songQueue').length > 0) {
        //  if there is a song, set the first song in the queue to currentSong
        var nextSong = this.get('songQueue').first();
        nextSong.play();
      }
    }, this);

  }

});
