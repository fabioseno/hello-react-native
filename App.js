import React from 'react';
import { KeyboardAvoidingView, Alert, TouchableHighlight, TouchableWithoutFeedback, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import ActionButton from './src/components/core/ActionButton'; 

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			text: ""
		};
	}

	save() {
		alert('oi2');
	}

	render() {
		return (
			<KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#cccccc' }} behavior="padding">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.container}>
						<Text>{this.state.text}</Text>
						<Text style={{ height: 100, backgroundColor: "#eeeeee" }}>Changes you make will automatically reload.</Text>
						<Text style={{ height: 50, backgroundColor: "#cccccc" }}>Shake your phone to open the developer menu.</Text>
						<TextInput placeholder="Digite alguma coisa" onChangeText={(text) => this.setState({ text })} value={this.state.text} style={{ borderColor: 'gray', borderWidth: 1 }}></TextInput>
						<ActionButton style={this.props.buttonStyle} value="Salvar" onPress={this.save}></ActionButton>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
});

