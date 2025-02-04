import React, { useState, useEffect } from "react";
import { View, Text, Switch, Button } from "react-native";
import Task from "./task";
import styles from "./ToDoStyles";

export default function ToDo() {
  const futureDates = [
    new Date(Date.now() + 1000 * 60 * 60 * 24 + 1000 * 3), // tomorrow and 3 seconds
    new Date(Date.now() + 1000 * 60 * 60 * 24 + 1000 * 60), // Tomorrow and 1 minute
    new Date(Date.now() + 1000 * 60 * 60 * 24 * 3 + 1000 * 5), // Three days from now 5 seconds
    new Date(Date.now() + 1000 * 60 * 60 * 24 * 3 + 1000 * 20), // 3 days from now 10 seconds
    new Date(Date.now() + 1000 * 60 * 60 * 24 * 4 + 1000 * 10) // Four days from now 10 seconds
  ];

  const [currentTasks, setTasks] = useState([
    new Task("Do hw", "Math hw due", futureDates[0]),
    new Task("Get groceries", "don't waste", futureDates[1]),
    new Task("Extremely long task that requires a very large amount of explanation in the title because the user does not like using the description box", "for some reason", futureDates[2]),
    new Task("Order more chalk", "Use frictionlabs", futureDates[3]),
    new Task("Another task", "arbitrary description that just happens to be extremely  long  because it is a  very hefty and loaded task", futureDates[4]),
  ]);

  // Update the tasks every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks([...currentTasks]);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTasks]);

  const getTimeRemainingStyle = (timeRemaining) => {
    if (timeRemaining > 1000 * 60 * 60 * 24 * 3) { // more than 3 days
      return styles.timeRemainingHigh;
    } else if (timeRemaining > 1000 * 60 * 60 * 24) { // more than 1 day
      return styles.timeRemainingMedium;
    } else { // less than 1 day
      return styles.timeRemainingLow;
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...currentTasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.title}>ToDo</Text>
          <Button style={{ backgroundColor: "#bfbfbf" }} onPress={() => 
            { //TODO: Implement this in a seperate function, preferably in a seperate Tasks class
              for (let i = 0; i < currentTasks.length; i++) {
                if (currentTasks[i].completed) {
                  currentTasks.splice(i, 1);
                  i--;
                }
              }
            }
          } title="Clear completed" />

      </View>
      {currentTasks.map((task, index) => {
        const timeRemaining = task.date - Date.now();
        return (
          <View key={index} style={styles.task}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Switch
                value={task.completed}
                onValueChange={() => toggleTaskCompletion(index)}
              />
              <Text style={styles.title}>{task.getTask()}</Text>
            </View>
            <Text style={styles.debug}>{task.toString()}</Text>
            <Text style={[styles.timeRemaining, getTimeRemainingStyle(timeRemaining)]}>
              Time Remaining: {task.getTimeRemainingString()}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
