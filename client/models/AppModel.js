// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    // THIS IS A MODEL
    this.set('currentSong', new SongModel());

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

    params.library.on('enqueue', function(){
      this.get('songQueue').push(this.get('currentSong'));
      // push the song into songQueue collection
    }, this);

    params.library.on('dequeue', function(){
      // removes first song in songQueue collection
      this.get('songQueue').shift();
      // console.log(this.get('songQueue'));
    }, this);

    params.library.on('ended', function(){
      console.log('ended');
      // call dequeue
      this.model.dequeue();
      console.log(this.get('songQueue'));
      // check if the song queue is not empty
      //  if there is a song, set the first song in the queue to currentSong
    }, this);

  }

});
