import { StyleSheet, View, Text, Image, FlatList } from "react-native";

const DATA = [
  {
    id: "1",
    text: "Your game is live",
    time: "12th Sep 2021 , 12:00 pm",
  },
  {
    id: "2",
    text: "Your Contest Results are out",
    time: "12th Sep 2021 , 12:00 pm",
  },
];

export default function Notification() {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.notificationContainer}>
        <Image
          source={require("../assets/Notification/arrow.jpg")}
          style={{
            width: 30,
            height: 30,
            margin: "auto",
            backgroundColor: "white",
          }}
          style={{
            backgroundColor: "#F9F9F9",
            width: 55,
            opacity: 0.7,
            height: 55,
            borderRadius: "50%",
            transform: "rotate(-180deg)",
          }}
        />
        <Text
          style={{
            margin: "auto",
            marginTop: -40,
            color: "white",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Notification
        </Text>
      </View>
      <View style={{ width: "95%", height: "auto", margin: "auto" }}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 15 }}>
                <View
                  style={{
                    width: "100%",
                    height: 65,
                    backgroundColor: "white",
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#082032",
                      width: 45,
                      height: 45,
                      borderRadius: "50%",
                      marginTop: 10,
                      marginLeft: 20,
                      marginRight: 30,
                    }}
                  >
                    <Image
                      source={require("../assets/Notification/bell.png")}
                      style={{ width: 20, height: 20, margin: "auto" }}
                    />
                  </View>
                  <Text
                    style={{
                      color: "black",
                      marginTop: -35,
                      marginLeft: 85,
                      fontWeight: 600,
                      fontSize: 18,
                    }}
                  >
                    {item.text}
                  </Text>
                </View>
                <Text
                  style={{
                    position: "relative",
                    marginTop: 5,
                    left: "89%",
                    color: "#7E7E7E",
                    fontWeight: 600,
                  }}
                >
                  {item.time}
                </Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    width: "95%",
    marginTop: "5%",
    marginBottom: "5%",
    height: 55,
    margin: "auto",
  },
});
