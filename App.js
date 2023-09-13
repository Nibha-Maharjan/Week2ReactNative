import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Switch, useColorScheme } from "react-native";

// Week 2 

export default function HelloWorldApp() {
  const [value, onChangeText] = useState('Enter anything');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDark, setIsDark] = useState(true); // Start with dark mode enabled

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setIsDark(isDarkMode);
  }, [isDarkMode]);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setIsDark((previousState) => !previousState); // Toggle the dark mode
  };

  // Task 1
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? 'black' : 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={[styles.name, { color: isDark ? 'white' : 'black' }]}>Enter your name</Text>
      <TextInput
        style={[styles.edit, { color: isDark ? 'white' : 'black' }, { color: isDark ? 'white' : 'black', borderColor: isDark ? 'white' : 'black' }]}
        onChangeText={(text) => onChangeText(text)}
        clearTextOnFocus={true}
        value={value}
      />
      <Text style={[styles.text, { color: isDark ? 'white' : 'black' }]}>Your name</Text>
      <Text style={[styles.edit, { color: isDark ? 'white' : 'black' }, { color: isDark ? 'white' : 'black', borderColor: isDark ? 'white' : 'black' }]}>{value}</Text>
      
      {/* Task 2 */}
      <Button
        style={styles.button}
        onPress={() => onChangeText(' ')}
        title="Clear"
        color="#25a36f"
      />
      {/* Task 3 */}
      <Switch
        trackColor={{ false: "#ffbc00", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#008000" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    width: "80%",
    padding: 10,
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 20,
  },
  text: {
    width: "80%",
    padding: 10,
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 20,
  },
  edit: {
    width: "80%",
    padding: 10,
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth:1,
  },
});
