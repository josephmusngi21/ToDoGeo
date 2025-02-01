import React, { useState, useEffect } from "react";
import { View, Text, Switch } from "react-native";
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
    new Task("Task 1", "Description 1", futureDates[0]),
    new Task("Task 2", "Description 2", futureDates[1]),
    new Task("Task 3", "Description 3", futureDates[2]),
    new Task("Task 4", "Description 4", futureDates[3]),
    new Task("Task 5", "Description 5", futureDates[4]),
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
      <Text style={styles.title}>ToDo</Text>
      {currentTasks.map((task, index) => {
        const timeRemaining = task.date - Date.now();
        return (
          <View key={index} style={styles.task}>
            <Switch
              value={task.completed}
              onValueChange={() => toggleTaskCompletion(index)}
            />
            <Text style={styles.taskText}>{task.toString()}</Text>
            <Text style={[styles.timeRemaining, getTimeRemainingStyle(timeRemaining)]}>
              Time Remaining: {task.getTimeRemainingString()}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
