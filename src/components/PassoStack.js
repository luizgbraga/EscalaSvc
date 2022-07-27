import React from 'react';
import {
    View
} from 'react-native';

export default props => (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }}>
        {props.children}
    </View>
)