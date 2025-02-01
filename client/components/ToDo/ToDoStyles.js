import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  task: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 3,
  },
  taskText: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    color: "gray",
  },
  timeRemaining: {
    fontSize: 16,
  },
  timeRemainingHigh: {
    color: "green",
  },
  timeRemainingMedium: {
    color: "orange",
  },
  timeRemainingLow: {
    color: "red",
  },
});

export default styles;
