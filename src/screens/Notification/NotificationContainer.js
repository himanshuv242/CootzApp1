import { StyleSheet, View } from "react-native";
import Notification from "./Notification";

export default function NotificationContainer() {
  return (
    <View style={styles.container}>
      <Notification />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#082032",
    alignItems: "center",
  },
});
