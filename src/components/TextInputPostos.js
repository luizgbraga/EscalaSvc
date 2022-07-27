import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    Image
} from 'react-native';
import styles from '../styles';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_300Light,
} from '@expo-google-fonts/montserrat';

class BetterTextInput extends Component {
    constructor(props) {
      super(props);
      this.state = { placeholder: props.value.length == 0 }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(ev) {
      this.setState({ placeholder: ev.nativeEvent.text.length == 0 }); 
      this.props.onChange && this.props.onChange(ev); 
    }
    render() {
      const { placeholderStyle, style, onChange, ...rest } = this.props;
  
      return <TextInput 
        {...rest} 
        onChange={this.handleChange}
        style={this.state.placeholder ? [style, placeholderStyle] : style}
        />
    }
  }

export default props => {

    const correct = require('../../assets/check.png');
    const wrong = require('../../assets/wrong.png');

    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_300Light,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

    return(
        <View style={styles.totalInputContainer}>
            <View style={styles.upperTextContainer}>
                <Text style={{ fontFamily: 'Montserrat_500Medium', color: 'rgba(255, 255, 255, 0.7)', fontSize: 15 }}>{props.upperText}</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.containerImage}>
                    <Image source={props.img} style={{ width: props.d, height: props.d }}></Image>
                </View>
                <View style={styles.textInputContainer}>
                    <Image source={props.valid ? correct : wrong} style={props.valid ? styles.correct : styles.wrong}></Image>
                    <BetterTextInput  
                        placeholder={props.placeholder} 
                        placeholderStyle={{ fontFamily: 'Montserrat_500medium', fontSize: 18 }}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        value={props.value}
                        onChangeText={(txt) => props.setValue(txt)}
                        style={{
                            height: 60,
                            borderTopRightRadius: 12,
                            borderBottomRightRadius: 12,
                            paddingLeft: 30,
                            fontFamily: 'Montserrat_500Medium',
                            fontSize: 18
                        }}></BetterTextInput>
                </View>
            </View>
            {
                !props.tu && props.ef && (!Number(props.value) && props.value.length !== 0) ? <Text style={{ fontFamily: 'Montserrat_300Light', color: 'rgb(255, 255, 255)', marginTop: 6 }}>Insira um número!</Text> : false
            }
            {
                !props.tu && props.pr && (!Number(props.value) && props.value.length !== 0) ? <Text style={{ fontFamily: 'Montserrat_300Light', color: 'rgb(255, 255, 255)', marginTop: 6 }}>Insira um número!</Text> : false
            }
        </View>
    )
}}