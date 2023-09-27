import { StyleSheet, Text, View } from "react-native";

export default function Header(prop){
    return(
        <>

                <Text style={{marginTop:"auto",
    marginBottom:"auto",fontSize:30,textAlign:"center", fontWeight:500, letterSpacing:10, color:"#D3FEE"}}>
                    Todo-App
                </Text>


            {/* <View style={styles.mainDiv}>

            </View> */}

        </>

    )
}


const styles = StyleSheet.create({

    mainDiv:({

        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        placeItems:"center"

    })



})