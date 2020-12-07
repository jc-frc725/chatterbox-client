var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');

    // when Submit button is clicked, something should happen here?
    // take in whatever user types into form box (Controller), and make it a message,
    // that will be sent to server

    // server will take in message (Model), then Viewers must update?
    var message = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      roomname: 'lobby'
    };

    // sending to server => Need Parse.create()?
    // need message object in given format {username, text, room}
    // where to get username, text, room properties?
    // username = App.username <-- whatever user types at start
    // text = whatever user types into form box
    // room = ???
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};