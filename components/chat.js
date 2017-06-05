
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
	KeyboardAvoidingView,
  View
} from 'react-native';
import Colours from '../styles/colours.js';
import { connect } from 'react-redux';

import ChatActions from '../store/actions.js';

class Chat extends Component {
  render() {
    return (
        <View style={chatStyles.container}>
            <MessageHistory messages={this.props.messages}/>
            <MessageEntry />
        </View>
    )
  }
}

class MessageHistory extends Component {
  render()
  {
		var messages = this.props.messages;
		var i = 0;
    return (
    <KeyboardAvoidingView  style={chatStyles.messageHistory}>
			<ScrollView>
				{ messages.map(message => 
					<Message key={i++} message={message} />
				)}
			</ScrollView>
    </KeyboardAvoidingView  >
    )
  }
}

class Message extends Component {
	render() {
		var message = this.props.message;
		if (message.local) return <MessageLocal content={message.content} />;
		return <MessageRemote content={message.content} />
	}
}


var MessageEntry = connect(store => (store), dispatch => ({dispatch }))(
	class extends Component {
		sendMessage(message)
		{
			var myMessage = {local: true, content: message};
			var maysMessage = {local: false, content: "Strong and Stable!"};

			this.props.dispatch(ChatActions.addMessage(myMessage))
			this.props.dispatch(ChatActions.addMessage(maysMessage))

			this.setState({text: ""});
			this._textInput.setNativeProps({text: ''});

		}
		render()
		{
			return (
			<View style={chatStyles.messageEntry}>
					<TextInput
					ref={component => this._textInput = component}
					style={{height: 40}}
					placeholder="Message"
					onChangeText={(text) => this.setState({text})}
					onSubmitEditing={(text) => this.sendMessage(this.state.text)}
					/>
			</View>
			);
		}
	}
)

class MessageRemote extends Component {
  render()
  {
    return (
      <View style={[chatStyles.messageRemote, chatStyles.message]}>
        <Text>
           {this.props.content}
        </Text>
      </View>
    );
  }
}

class MessageLocal extends Component {
  render()
  {
    return (
      <View style={[chatStyles.messageLocal, chatStyles.message]}>
        <Text style={{ textAlign: 'right'}}>
          {this.props.content}
        </Text>
      </View>
    );
  }
}


const chatStyles = StyleSheet.create({
container: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colours.backgroundMain
  },
  messageHistory: {
    flex: 11,
  },
  message: {
    margin: 10,
    marginBottom: 5,
    marginTop: 5,
    padding: 10,
    borderRadius: 10
  },
  messageRemote: {
    backgroundColor: Colours.messageRemote,
  },
  messageLocal: {
    backgroundColor: Colours.messageLocal,
  },
    messageEntry: {
    margin: 10
  },
});


export default connect(store => (store), dispatch => ({dispatch }))(Chat)