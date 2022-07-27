import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default StyleSheet.create({
    sideBar: {
        width: 100,
        height: windowHeight * 0.9999,
        backgroundColor: '#1E5128',
        alignItems: 'center'
    },

    mainBackground: {
        width: windowWidth - 100,
        height: windowHeight * 0.9999,
        backgroundColor: '#191A19',
    },

    row: {
        flexDirection: 'row'
    },

    anosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 540
    },

    header: {
        marginLeft: 790,
        marginTop: 30
    },

    containerTitle: {
        marginTop: 12,
        marginLeft: 30
    },

    sideIcon: {
        width: 34,
        height: 34
    },

    disabledIcon: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(216, 233, 168, 0.7)',
        borderRadius: 10
    },

    containerIconsSideBar: {
        height: 280,
        marginTop: 76,
        justifyContent: 'space-between'
    },

    boxEscala: {
        width: 764,
        height: 360,
        borderRadius: 20,
        backgroundColor: '#4E9F3D',
        marginTop: 20,
        marginLeft: 30
    },

    scrollEscala: {
        width: 762,
        height: 358
    },

    boxPostos: {
        width: 580,
        height: 360,
        borderRadius: 20,
        backgroundColor: '#4E9F3D',
        marginTop: 20,
        marginLeft: 30,
    },

    scrollPostos: {
        width: 578,
        height: 358,
        flexGrow: 1,
        alignItems: 'center',
    },

    boxBaixados: {
        width: 368,
        height: 190,
        borderRadius: 20,
        backgroundColor: '#4E9F3D',
        marginTop: 20,
        marginLeft: 30
    },

    scrollBaixados: {
        width: 366,
        height: 188,
        flexGrow: 1,
        alignItems: 'center',
    },

    boxTrocas: {
        width: 418,
        height: 190,
        borderRadius: 20,
        backgroundColor: '#4E9F3D',
        marginTop: 20,
        marginLeft: 30
    },

    scrollTrocas: {
        width: 416,
        height: 188
    },

    boxTuCmdo: {
        width: 528,
        height: 190,
        borderRadius: 20,
        backgroundColor: '#4E9F3D',
        marginTop: 20,
        marginLeft: 30
    },

    scrollTuCmdo: {
        width: 526,
        height: 188,
        paddingLeft: 36,
    },

    containerPostos: {
        marginBottom: 16
    },

    iconPostos: {
        width: 26,
        height: 26,
        marginLeft: 12
    },

    iconSave: {
        width: 24,
        height: 24,
        marginLeft: 12,
        marginTop: 2
    },

    containerIconsPostos: {
        flexDirection: 'row-reverse',
        marginBottom: 8,
    },
    
    containerTitlePostos: {
        marginTop: 20,
        flexDirection: 'row'
    },

    containerTitleBaixados: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
    },

    containerTitleTuCmdo: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
    },

    iconPlus: {
        width: 36,
        height: 36,
        marginLeft: 20,
        marginTop: 2
    },

    iconChange: {
        width: 36,
        height: 36,
        marginLeft: 20,
        marginTop: 2
    },

    overlayStyle: {
        backgroundColor: '#0B3914',
        borderRadius: 10
    },

    containerTitleForms: {
        width: 500,
        justifyContent: 'center',
        marginTop: 6,
        alignItems: 'center',
        marginBottom: 20
    },

    containerAllInputs: {
        width: 500,
        alignItems: 'center'
    },

    upperTextContainer: {
        width: 400,
        height: 30, 
        justifyContent: 'center',
    },

    inputContainer: {
        flexDirection: 'row',
        width: 400,
        height: 60
    },

    containerImage: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightColor: '#000000',
        borderRightWidth: 1,
        backgroundColor: '#D8E9A8',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12
    },

    textInputContainer: {
        width: 340,
        height: 60,
        backgroundColor: '#4E9F3D',
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12
    },

    iconInput: {
        width: 32,
        height: 32
    },

    totalInputContainer: {
        marginBottom: 20
    },

    buttonAdicionar: {
        width: 180,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8E9A8',
        marginTop: 20
    },

    buttonSalvar: {
        width: 140,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8E9A8',
        marginTop: 20
    },
    
    
    containerNomeBaixado: {
        width: 240,
        height: 30,
        backgroundColor: 'rgba(30, 81, 40, 0.7)',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#FFFFFF',
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },

    containerNomeBaixadoTitle: {
        width: 240,
        height: 30,
        backgroundColor: 'rgba(30, 81, 40, 0.7)',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#FFFFFF',
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        borderTopLeftRadius: 10
    },

    containerNomeBaixadoBottom: {
        width: 240,
        height: 30,
        backgroundColor: 'rgba(30, 81, 40, 0.7)',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#FFFFFF',
        paddingLeft: 20,
        borderBottomLeftRadius: 10,
        marginBottom: 20
    },

    containerDiasBaixado: {
        width: 60,
        height: 30,
        backgroundColor: 'rgba(30, 81, 40, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },

    containerDiasBaixadoTitle: {
        width: 60,
        height: 30,
        backgroundColor: 'rgba(30, 81, 40, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        borderTopRightRadius: 10,
    },

    containerDiasBaixadoBottom: {
        width: 60,
        height: 30,
        backgroundColor: 'rgba(30, 81, 40, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 10,
        marginBottom: 20
    },

    containerNomeTu: {
        width: 200,
        height: 30,
        backgroundColor: 'rgba(30, 81, 40, 0.7)',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#FFFFFF',
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },

    containerNomeTuTitle: {
        width: 200,
        height: 30,
        backgroundColor: 'rgba(30, 81, 40, 0.7)',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#FFFFFF',
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        borderTopLeftRadius: 10
    },

    containerNomeTuBottom: {
        width: 200,
        height: 30,
        backgroundColor: 'rgba(30, 81, 40, 0.7)',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#FFFFFF',
        paddingLeft: 20,
        borderBottomLeftRadius: 10,
        marginBottom: 20
    },

    containerFuncao: {
        width: 240,
        height: 30,
        backgroundColor: 'rgba(30, 81, 40, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },

    containerFuncaoTitle: {
        width: 240,
        height: 30,
        backgroundColor: 'rgba(30, 81, 40, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        borderTopRightRadius: 10,
    },

    containerFuncaoBottom: {
        width: 240,
        height: 30,
        backgroundColor: 'rgba(30, 81, 40, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 10,
        marginBottom: 20
    },

    correct: {
        width: 20,
        height: 20,
        marginLeft: 296,
        marginTop: 20,
        position: 'absolute',
    },
    
    wrong: {
        width: 20,
        height: 20,
        marginLeft: 296,
        marginTop: 20,
        position: 'absolute',
    },

    nomeCompleto: {
        width: 480,
        height: 50,
        backgroundColor: 'rgba(78, 159, 61, 1)',
        justifyContent: 'center',
        paddingLeft: 20,
        borderRightColor: '#FFFFFF',
        borderRightWidth: 1
    },

    nomeCompletoShadow: {
        width: 480,
        height: 50,
        backgroundColor: 'rgba(78, 159, 61, 0.8)',
        justifyContent: 'center',
        paddingLeft: 20,
        borderRightColor: '#FFFFFF',
        borderRightWidth: 1
    },

    nomeCompletoTitle: {
        width: 480,
        height: 50,
        backgroundColor: 'rgba(30, 81, 40, 1)',
        justifyContent: 'center',
        paddingLeft: 20,
        borderRightColor: '#FFFFFF',
        borderRightWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1
    },

    nomeCompletoBottom: {
        width: 480,
        height: 50,
        backgroundColor: 'rgba(78, 159, 61, 1)',
        justifyContent: 'center',
        paddingLeft: 20,
        borderRightColor: '#FFFFFF',
        borderRightWidth: 1,
        borderBottomLeftRadius: 10
    },

    nomeCompletoBottomShadow: {
        width: 480,
        height: 50,
        backgroundColor: 'rgba(78, 159, 61, 0.8)',
        justifyContent: 'center',
        paddingLeft: 20,
        borderRightColor: '#FFFFFF',
        borderRightWidth: 1,
        borderBottomLeftRadius: 10
    },

    nomeDeGuerra: {
        width: 260,
        height: 50,
        backgroundColor: 'rgba(78, 159, 61, 1)',
        justifyContent: 'center',
        paddingLeft: 20,
        borderRightColor: '#FFFFFF',
        borderRightWidth: 1
    },

    nomeDeGuerraTitle: {
        width: 260,
        height: 50,
        backgroundColor: 'rgba(30, 81, 40, 1)',
        justifyContent: 'center',
        paddingLeft: 20,
        borderRightColor: '#FFFFFF',
        borderRightWidth: 1,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1
    },

    nomeDeGuerraShadow: {
        width: 260,
        height: 50,
        backgroundColor: 'rgba(78, 159, 61, 0.8)',
        justifyContent: 'center',
        paddingLeft: 20,
        borderRightColor: '#FFFFFF',
        borderRightWidth: 1
    },

    ultimoSvc: {
        width: 220,
        height: 50,
        backgroundColor: 'rgba(78, 159, 61, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        borderRightColor: '#FFFFFF',
        borderRightWidth: 1
    },

    ultimoSvcTitle: {
        width: 220,
        height: 50,
        backgroundColor: 'rgba(30, 81, 40, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        borderRightColor: '#FFFFFF',
        borderRightWidth: 1,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1
    },

    ultimoSvcShadow: {
        width: 220,
        height: 50,
        backgroundColor: 'rgba(78, 159, 61, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        borderRightColor: '#FFFFFF',
        borderRightWidth: 1
    },


    isBaixado: {
        width: 120,
        height: 50,
        backgroundColor: 'rgba(78, 159, 61, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    isBaixadoTitle: {
        width: 120,
        height: 50,
        backgroundColor: 'rgba(30, 81, 40, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderTopRightRadius: 10
    },

    isBaixadoShadow: {
        width: 120,
        height: 50,
        backgroundColor: 'rgba(78, 159, 61, 0.8)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    isBaixadoBottom: {
        width: 120,
        height: 50,
        backgroundColor: 'rgba(78, 159, 61, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 10
    },

    isBaixadoBottomShadow: {
        width: 120,
        height: 50,
        backgroundColor: 'rgba(78, 159, 61, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 10
    },

    containerAlunos: {
        marginTop: 20,
        marginLeft: 30 
    },

    checkbox: {
        width: 20,
        height: 20
    },

    containerSearchBar: {
        width: 1300,
        height: 50,
        borderRadius: 24,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginBottom: 10
    },

    lupa: {
        width: 22,
        height: 22,
        position: 'absolute',
        marginTop: 2,
        marginLeft: 20
    }
})