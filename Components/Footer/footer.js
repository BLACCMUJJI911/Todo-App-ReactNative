import { StyleSheet, Text, View } from "react-native";

export default function Footer(prop) {
    return (
        <>

<Text style={{color:"#B7BAC3",textAlign:"center", fontSize:18, padding:4}}>Made By Mujtaba</Text>

            <View style={styles.mainDiv}>

                    <Text style={{color:"#BBBAB8"}}>All Copyrights Reserved | By BM911 .</Text>
                

            </View>

        </>

    )
}

const styles = StyleSheet.create({

    mainDiv: ({

        display: "flex",
        marginTop:"auto",
        alignItems:"center",
        padding:2,

    }),


    contact:({

        

    })


})