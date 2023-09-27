import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// export default function Body() {

//     let [item, setItem] = useState("")
//     let [todo, setTodo] = useState([])


//     const handleChange = text => {
//         setItem(text)
//     }

//     const onAdd = e => {

//         if (item !== "" )
//         {

//             setTodo([...todo, item])
//             setItem("")

//         }



//     }


//     return (
//         <>



//             <View style={styles.inpContainer}>

//                 <View style={styles.inpBtnCont}>

//                     <TextInput placeholder="Enter Todo Items" value={item} onChange={handleChange} style={styles.txtInp} ></TextInput>

//                     <TouchableOpacity onPress={onAdd}  activeOpacity={0.6} style={styles.add}>

//                         <Text>+</Text>

//                     </TouchableOpacity>



//                       {
//                         todo.map((v, i ) => {
//                             return (
//                                 <>

//                                 <Text> {v} </Text>

//                                 </>
//                             )
//                         })
//                       }




//                 </View>

//             </View>



//         </>

//     )
// }


export default function Body() {

    const [item, setItem] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleChange = (text) => {
        setItem(text);
    }

    const onAdd = () => {
        if (item.trim() !== '') {
            setTodoList([...todoList, item]);
            setItem('');
        }
    }

    return (
        <View style={styles.inpContainer}>
            <View style={styles.inpBtnCont}>
                <TextInput
                    placeholder="Enter Todo Items"
                    style={styles.txtInp}
                    value={item}
                    onChangeText={handleChange}
                />

                <TouchableOpacity activeOpacity={0.6} style={styles.add} onPress={onAdd}>
                    <Text>+</Text>
                </TouchableOpacity>


            </View>
            
<View style={styles.listItem}>

                {

                    todoList.map((todo, index) => (

                        <Text style={styles.item} key={index}> {index + 1}.  {todo}</Text>

                    ))
                }

            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    inpContainer: ({

        height: 100 + "%",
        width: 100 + "%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#8CC4DF",
        padding: 8,

    }),

    txtInp: ({

        backgroundColor: "#DFE3EE",
        borderRadius: 50,
        padding: 4,
        width: 50 + "%",


    }),

    add: ({

        backgroundColor: "blue",
        padding: 8,
        width: 15 + "%",
        borderRadius: 20,
        display: "flex",
        alignItems: "center"

    }),

    inpBtnCont: ({

        display: "flex",
        flexDirection: "row",
        gap: 6,
        width: 100 + "%",
        justifyContent: "center"

    }),

    listItem: ({

        padding: 10,
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        marginTop: 10,
        gap: 5,
        width: 100 + "%"


    }),

    item: ({

        color: "black",
        fontSize: 30,
        paddingLeft: 10,


    })

})