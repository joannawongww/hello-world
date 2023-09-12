import { StyleSheet, View, Text, TextInput, Button, Alert, ScrollView } from "react-native";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const alertMyText = () => {
    Alert.alert(text)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder="type something here"
      />
      <Text style={styles.textDisplay}>You wrote: {text}</Text>
      <Button
        onPress={() => {
          alertMyText();
        }}
        title="Press Me"
      />
      <ScrollView>
        <Text style={{fontSize: 110}}>Text inside ScrollView!</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItem: 'center',
    justifyContent: 'center'
  },
  textInput: {
    width: '88%',
    borderWidth: 1,
    height: 50,
    padding:10
  },
  textDisplay: {
    height: 50,
    lineHeight:50
  }

});

export default App;
