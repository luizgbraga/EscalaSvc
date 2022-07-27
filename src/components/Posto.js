import React, { Component, useState, useEffect } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput
} from 'react-native'

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_400Regular
} from '@expo-google-fonts/montserrat';

import { connect } from 'react-redux';
import styles from '../styles';

import * as actions_postos from '../store/actions/setPostos';

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

const Posto = ({ nome, efetivo, prioridade, postos, isArchived, dispatch }) => {

    const trash = require('../../assets/trash.png');
    const edit = require('../../assets/edit.png');
    const archived = require('../../assets/archive.png');
    const not_archived = require('../../assets/archives.png');
    const save = require('../../assets/save.png');

    const [editable, setEditable] = useState(false);
    const [posto, setPosto] = useState(nome);
    const [efetivoB, setEfetivo] = useState(efetivo);
    const [prioridadeB, setPrioridade] = useState(prioridade);

    function handleEdit() {
        if(!editable) {
            setEditable(true);
        } else {
            dispatch(actions_postos.edit_posto(nome, posto, efetivoB, prioridadeB));
            setEditable(false);
        }
    }

    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

    return(
        <View style={styles.containerPostos}>
            <View style={styles.containerIconsPostos}>
                <TouchableOpacity onPress={() => dispatch(actions_postos.delete_posto(nome))}>
                    <Image source={trash} style={styles.iconPostos}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleEdit()}>
                    <Image source={editable ? save : edit} style={editable ? styles.iconSave : styles.iconPostos}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => dispatch(actions_postos.archive_posto(nome))}>
                    <Image source={isArchived ? archived : not_archived} style={styles.iconPostos}></Image>
                </TouchableOpacity>
            </View>
            <View style={{
                        width: 500,
                        height: 50,
                        backgroundColor: isArchived ? 'rgba(30, 81, 40, 0.4)' : 'rgba(30, 81, 40, 0.7)' ,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: isArchived ? 'rgba(255, 255, 255, 0.4)' : 'rgb(255, 255, 255)',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
            }}>
                <Text style={isArchived ? my_styles.atxt : my_styles.txt}>Posto</Text>
                {
                    editable ? <BetterTextInput
                                    value={posto}
                                    onChangeText={(txt) => setPosto(txt)}
                                    style={{
                                        height: 50,
                                        width: 300,
                                        borderTopRightRadius: 12,
                                        paddingLeft: 30,
                                        fontFamily: 'Montserrat_400Regular',
                                        fontSize: 22,
                                        color: 'rgba(255, 255, 255, 0.8)'
                                    }}>
                                </BetterTextInput> : <Text style={isArchived ? my_styles.abtxt : my_styles.btxt}>{nome}</Text>
                }
            </View>
            <View style={{
                        width: 500,
                        height: 50,
                        backgroundColor: isArchived ? 'rgba(30, 81, 40, 0.4)' : 'rgba(30, 81, 40, 0.7)',
                        borderBottomWidth: 1,
                        borderBottomColor: isArchived ? 'rgba(255, 255, 255, 0.4)' : 'rgb(255, 255, 255)',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
            }}>
                <Text style={isArchived ? my_styles.atxt : my_styles.txt}>Efetivo</Text>
                {
                    editable ? <BetterTextInput
                                    value={efetivoB}
                                    onChangeText={(txt) => setEfetivo(txt)}
                                    style={{
                                        height: 50,
                                        width: 300,
                                        borderTopRightRadius: 12,
                                        paddingLeft: 30,
                                        fontFamily: 'Montserrat_400Regular',
                                        fontSize: 22,
                                        color: 'rgba(255, 255, 255, 0.8)'
                                    }}>
                                </BetterTextInput> : <Text style={isArchived ? my_styles.abtxt : my_styles.btxt}>{efetivo}</Text>
                }
            </View>
            <View style={{
                        width: 500,
                        height: 50,
                        backgroundColor: isArchived ? 'rgba(30, 81, 40, 0.4)' : 'rgba(30, 81, 40, 0.7)',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
            }}>
                <Text style={isArchived ? my_styles.atxt : my_styles.txt}>Prioridade</Text>
                {
                    editable ? <BetterTextInput
                                    value={prioridadeB}
                                    onChangeText={(txt) => setPrioridade(txt)}
                                    style={{
                                        height: 50,
                                        width: 300,
                                        borderTopRightRadius: 12,
                                        paddingLeft: 30,
                                        fontFamily: 'Montserrat_400Regular',
                                        fontSize: 22,
                                        color: 'rgba(255, 255, 255, 0.8)'
                                    }}>
                                </BetterTextInput> : <Text style={isArchived ? my_styles.abtxt : my_styles.btxt}>{prioridade}</Text>
                }
            </View>
        </View>
    )
}}

export default connect(state => ({ postos: state.postos.postos }))(Posto);

const my_styles = StyleSheet.create({
    txt: {
        color: 'rgb(255, 255, 255)', 
        fontFamily: 'Montserrat_500Medium', 
        fontSize: 22,
        marginLeft: 16
    },

    atxt: {
        color: 'rgba(255, 255, 255, 0.4)', 
        fontFamily: 'Montserrat_500Medium', 
        fontSize: 22,
        marginLeft: 16
    },

    btxt: {
        color: '#FFFFFF', 
        fontFamily: 'Montserrat_600SemiBold', 
        fontSize: 22,
        marginRight: 16
    },

    abtxt: {
        color: 'rgba(255, 255, 255, 0.4)', 
        fontFamily: 'Montserrat_600SemiBold', 
        fontSize: 22,
        marginRight: 16
    },
})