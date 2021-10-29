import { useNavigation, useRoute } from "@react-navigation/core";
import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';
// import { Provider ,Appbar,Card} from 'react-native-paper';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatBox = () => {
    const [messages, setMessages] = React.useState([]);
    const navigation = useNavigation();
    const route = useRoute();
    const onSend = React.useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    React.useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: route.params.message,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Nguyen Huy Hoang',
                    avatar: route.params.avt,
                },
            },
        ])
    }, []);
    return (
        // <Provider>
        <View style={styles.mainbox}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
        // </Provider>
    );
};


const styles = StyleSheet.create({
    mainbox: {
        textAlign: 'center',
        margin: 0,
        flex: 5,
        justifyContent: 'space-between',
    }
});
export default ChatBox;