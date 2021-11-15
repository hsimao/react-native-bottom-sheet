import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import { Button, ListItem } from "react-native-elements";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const ModalEmptyArea = styled.View`
  flex: 1;
`;

const ModalContent = styled.View.attrs({
  shadowOffset: {
    width: 0,
    height: -4
  },
  shadowOpacity: 0.25,
  shadowRadius: 4
})`
  margin-top: auto;
`;

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: "List Item 1" },
    { title: "List Item 2" },
    { title: "List Item 3" },
    { title: "List Item 4" },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false)
    }
  ];

  return (
    <Container>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
          <ModalEmptyArea />
        </TouchableWithoutFeedback>

        <ModalContent>
          {list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={l.containerStyle}
              onPress={l.onPress}
            >
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </ModalContent>
      </Modal>
      <Button title="Show Sheet" onPress={() => setIsVisible(true)} />

      <StatusBar style="auto" />
    </Container>
  );
}
