var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {

    var test = MessageView.render(message);
    console.log(test);
    //console.log(MessagesView.$chats);

    // adds message to $chats.children()
    MessagesView.$chats.append(test);
  }

};