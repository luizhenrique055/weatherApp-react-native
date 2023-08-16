import { Text, View } from "react-native";
import { styles } from "./stylesCard";
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

export default function Card({ name = "cardInformacoes" }) {

    let corGradient: string[] = ['#833f99', '#4289cc'];
    let styleConteudo: object = styles.conteudoInformativo;
    let styleTextoConteudo: object = styles.textoDoConteudoInformativo;

    if (name === "cardSemana") {
        corGradient = ['#1a1a1a', '#1a1a1a'];
        styleConteudo = styles.conteudoSemana;
        styleTextoConteudo = styles.textoDoConteudoSemana;

        return (
            <LinearGradient style={styles.card} colors={corGradient}>
                <View style={styleConteudo}>
                    <Text style={styleTextoConteudo}>
                        Wind
                    </Text>
                    <Entypo style={styleTextoConteudo} name={"cloud"} size={20} color="black" />
                    <Text style={styleTextoConteudo}>
                        5-7 km/h
                    </Text>
                </View>
            </LinearGradient>
        );
    }

    return (
        <LinearGradient style={styles.card} colors={corGradient}>
            <View style={styleConteudo}>
                <Entypo style={styleTextoConteudo} name="cloud" size={20} color="black" />
                <Text style={styleTextoConteudo}>
                    Wind
                </Text>
                <Text style={styleTextoConteudo}>
                    5-7 km/h
                </Text>
            </View>
        </LinearGradient>
    );
} 