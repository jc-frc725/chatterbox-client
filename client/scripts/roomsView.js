var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),



  initialize: function() {
  },

  render: function(data) {
    // data.results --> "roomname"
    // render room to HTML
    var messagesArr = data.results;

    for (let i = 0; i < messagesArr.length; i++) {
      var message = messagesArr[i];
      if (message.roomname && RoomsView.$select[0].innerHTML.indexOf(message.roomname) === -1) {
        RoomsView.renderRoom(message.roomname);
      }
      // each message has roomname property
      // how to handle messages with same roomname?
      //
    }
  },

  renderRoom: function(roomname) {
    var html = `<option value="${roomname}">${roomname}</option>`;
    console.log(html);
    //console.log(MessagesView.$chats);

    // adds message to $chats.children()
    RoomsView.$select.append(html);
    console.log(RoomsView.$select);
  }

};
