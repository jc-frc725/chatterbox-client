var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    // renderMessage: given message obj,
    // applies HTML template, fills out with correct format in HTML
    // appends one message HTML to $chats node in DOM

    // render: given 'data' = object w/ single property called results
    // "results" = array w/ objects representing messages (username, text, roomnate)

    // get the message objects linked to "results" in data object
    var messagesArr = data.results;
    // renderMessage each one; turn into HTML and append $
    // loop thru messagesArr
    for (let i = 0; i < messagesArr.length; i++) {
      var message = messagesArr[i];
      // if message does not contain username, text, or roomname properties
      if (message.username) {
        MessagesView.renderMessage(message);
      }
      // dont render it
      // access 'message' properties
    }
    // on each object at i, invoke renderMessage
  },

  renderMessage: function(message) {

    var $message = MessageView.render(message);
    //console.log(html);
    //console.log(MessagesView.$chats);

    // adds message to $chats.children()
    MessagesView.$chats.append($message);
  }

};