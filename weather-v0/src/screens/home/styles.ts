import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'black',
    },

    containerInformacoesPrincipais: {
        width: '100%',
        height: '70%',
        marginBottom: 5,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: '#1a1a1a',

    },

    containerInformacoesClima: {
        flex: 1,
        width: '100%',
        height: '20%',
        flexDirection: 'row',
    },

    containerDiasSemana: {
        flex: 1,
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        borderRadius: 50,
        marginTop: 5,
        marginBottom: 5,
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
        overflow: "hidden",
    },

    containerBackgroundImage: {
        flex: 1,
        width: '100%',
        backgroundColor: 'gold'
    },

    parteDeCima: {
        flex: 1,
        flexDirection: 'row',
        height: '25%',
    },

    parteDoMeio: {
        flex: 1,
        height: '50%',
    },

    parteDeBaixo: {
        flex: 1,
        height: '25%',
    },

    agrupamentoTexto: {
        flex: 1,
        height: '40%',
        flexDirection: 'row',
        alignSelf: 'center',
    },

    textoDiaMes: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    textoDiaSemana: {
        fontSize: 20,
    },

    textoTemperatura: {
        fontWeight: 'bold',
        fontSize: 90,
        alignSelf: 'flex-end',
        marginTop: 50,
    },

});
