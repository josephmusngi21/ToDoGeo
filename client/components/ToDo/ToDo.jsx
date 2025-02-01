import React, { Component } from "react";
import { View, Text } from "react-native";

export default function ToDo(tasks) {
  const [currentTasks, setTasks] = useState(tasks);
  return (
    <View>
      <Text>ToDo</Text>
    </View>
  );
}
