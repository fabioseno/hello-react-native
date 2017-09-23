import React from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import ActionButton from './src/components/core/ActionButton';
import SushiInput from './src/components/core/SushiInput';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            text: ''
        };
    }

    save() {
        alert('oi2');
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#cccccc' }} behavior="padding">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[styles.container]}>
                        <Text style={{ height: 100, backgroundColor: "#eeeeee" }}>Changes you make will automatically reload.</Text>
                        <Text style={{ height: 50, backgroundColor: "#cccccc" }}>Shake your phone to open the developer menu.</Text>
                        {/* <TextInput placeholder="Digite alguma coisa" onChangeText={(text) => this.setState({ text })} value={this.state.text} style={{ borderColor: 'gray', borderWidth: 1 }}></TextInput> */}
                        <TextInput placeholder="Digite algo aqui"
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                            style={styles.textInput}>
                        </TextInput>
                        {/* <SushiInput placeholder="digite aqui" onChangeText={(text) => this.setState({ text })} value={this.state.text}></SushiInput> */}
                        <ActionButton value="Salvar" onPress={this.save}></ActionButton>		
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
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    textInput: {
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        paddingRight: 5,
        paddingBottom: 10,
        paddingLeft: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#a9a9a9',
        fontSize: 14
    }
});

