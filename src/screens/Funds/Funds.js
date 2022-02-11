import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const DATA = [
  {
    id: "1",
    text: "Balance",
    amount: "Rs. 10,000",
    title: "Withdraw",
  },
  {
    id: "2",
    text: "Reedemable Cash",
    amount: "Rs. 10,000",
    title: "Redeem",
  },
];

export default function Funds() {
  return (
    <View
      style={{
        flex: 1,
        background: "#247174",
      }}
    >
      <Text
        style={{
          marginTop: 53,
          marginLeft: "5%",
          marginBottom: 43,
          fontSize: 16,
          fontWeight: '600',
          color: "white",
        }}
      >
        Wallet
      </Text>
      <FlatList
        style={{ marginBottom: 5 }}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: "95%",
                height: 200,
                margin: "auto",
                marginBottom: 25,
              }}
            >
              <View
                style={{
                  flex: 3,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <LinearGradient
                  start={{ x: 0.0, y: 0 }}
                  end={{ x: 0.9, y: 0 }}
                  colors={["#4CD3C9", "#009C91"]}
                  style={{
                    flex: 3,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      margin: "auto",
                      color: "#FEFEFE",
                      fontWeight: '600',
                      fontSize: 16,
                    }}
                  >
                    {item.text}
                  </Text>
                  <Text
                    style={{
                      margin: "auto",
                      color: "#FFFFFF",
                      fontWeight: '600',
                      fontSize: 24,
                      marginTop: -35,
                    }}
                  >
                    {item.amount}
                  </Text>
                </LinearGradient>
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: "#FFFFFF",
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 10,
                    backgroundColor: "lightgray",
                    margin: "auto",
                    position: "absolute",
                    top: 12,
                    left: 670,
                  }}
                >
                  <Image
                    source={require("../../assets/Funds/Vector.png")}
                    style={{
                      width: 17,
                      height: 15,
                      margin: "auto",
                    }}
                  />
                </View>
                <Text
                  style={{
                    margin: "auto",
                    color: "#2B7A7E",
                    fontWeight: "bold",
                    fontSize: 16,
                    position: "absolute",
                    top: 15,
                    left: 710,
                  }}
                  onPress={() => alert("You are redirect to Enter Amount Page")}
                >
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          width: "95%",
          height: 70,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          margin: "auto",
          position: "absolute",
          top: 580,
          left: "2.5%",
        }}
      >
        <Image
          source={require("../../assets/Funds/transaction.png")}
          style={{ width: 25, height: 25, margin: 22, marginLeft: 30 }}
        />
        <Text
          style={{
            fontWeight: '600',
            fontSize: 16,
            marginLeft: 75,
            marginTop: -45,
          }}
        >
          UPI ID’s
        </Text>
        <Image
          source={require("../../assets/Funds/angle-arrow.png")}
          style={{
            width: 10,
            height: 15,
            position: "absolute",
            right: 30,
            top: 27,
          }}
          onPress={() => alert("You are redirected to UPI page")}
        />
      </View>
      {/* <View
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "#082032",
          margin: "auto",
          marginTop: -40,
          marginBottom: 10,
        }}
      ></View> */}
    </View>
  );
}
