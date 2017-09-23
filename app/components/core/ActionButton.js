import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';

import colors from '../../styles/colors';

export default class ActionButton extends React.Component {
    render() {
        return (
            <View style={styles.buttonContainer}>
                <TouchableHighlight style={styles.button} onPress={this.props.onPress}>
                    <Text style={styles.buttonText}>{this.props.value}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },
    button: {
        flex: 1,
        height: 50,
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    buttonText: {
        fontSize: 18,
        color: colors.primaryColorContrast
    }
});