import { StyleSheet } from "react-native";
export const calculator_style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  displayContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  operationText: {
    fontSize: 24,
    color: "#aaa",
    textAlign: "right",
  },
  input: {
    fontSize: 32,
    color: "#fff",
    textAlign: "right",
    marginTop: 10,
  },
button: {
  display: "flex",
  margin: 10,
  height: 78,
  width: 78,
  borderRadius: 35,
  justifyContent: "center",
  alignItems: "center",
},
  buttonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
