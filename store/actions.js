var ChatActions = {};

ChatActions.addMessage = function(message)
{
   return { type: "AddMessage", payload: message };
}

export default ChatActions;