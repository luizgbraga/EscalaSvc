import React, { useState, Component } from 'react';
import {
    View,
    Text,
    TextInput,
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

    const [search, setSearch] = useState('');

    const lupa = require('../../assets/search.png');
    
    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_300Light,
    });

    function handle(txt) {
        setSearch(txt);
        props.export(txt);
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

    return(
        <View style={styles.containerSearchBar}>
            <Image source={lupa} style={styles.lupa}></Image>
            <BetterTextInput 
                placeholder='Pesquisar'
                value={search}
                onChangeText={(txt) => handle(txt)}
                style={{ 
                    width: 1300,
                    height: 50,
                    borderRadius: 20,
                    paddingLeft: 60,
                    color: '#000000',
                    fontFamily: 'Montserrat_500Medium',
                    fontSize: 20 }}>
                </BetterTextInput>
        </View>
    )
}}