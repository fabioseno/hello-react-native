import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import colors from '../../styles/colors';

export default class SushiInput extends React.Component {
    constructor() {
        super();

        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                    value={this.state.text}
                    style={styles.textInput}>
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    textInput: {
        flex: 1,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        borderBottomWidth: 2,
        fontSize: 16
    }
});