import { Text } from "react-native";

export default function Header(prop) {
    return (
        <>

            <Text style={{
                marginTop: "auto",
                marginBottom: "auto",
                fontSize: 30,
                textAlign: "center",
                fontWeight: 500,
                letterSpacing: 10,
                color: "grey",
                textShadowColor: '#000000',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
            }}>
                Todo-App
            </Text >

        </>

    )
}
