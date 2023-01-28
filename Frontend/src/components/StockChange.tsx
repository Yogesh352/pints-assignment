import { StatusBar } from "expo-status-bar";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface StockChangeProps {
  imageUri: string | undefined;
  symbol: string;
  companyName: string;
  currentPrice: number;
  priceChange: number;
  percentageChange: number;
}

export default function StockChange(StockChangeProps: StockChangeProps) {
  generateBoxShadowStyle(-2, 4, "#171717", 0.2, 3, 4, "#171717");
  return (
    <View style={[styles.box, styles.boxShadow]}>
      <Image
        fadeDuration={1000}
        style={styles.logo}
        source={{
          uri: StockChangeProps.imageUri,
        }}
      />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          width: "35%",
          height: "100%",
          marginRight: 15
        }}
      >
        <Text style={styles.symbol}>{StockChangeProps.symbol}</Text>
        <Text style={styles.companyName} numberOfLines={1}>
          {StockChangeProps.companyName}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          width: "35%",
          height: "100%",
        }}
      >
        <Text style={styles.currentPrice}>
          ${StockChangeProps.currentPrice}
        </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              flexGrow: 1,
            }}
          >
            {StockChangeProps.priceChange < 0 ? (
              <Ionicons name="arrow-up-outline" size={12} color={"red"} />
            ) : (
              <Ionicons name="arrow-up-outline" size={12} color={"green"} />
            )}

            <Text
              style={[
                styles.priceChange,
                StockChangeProps.priceChange < 0
                  ? styles.decreasedPriceChange
                  : styles.increasedPriceChange,
              ]}
            >
              {StockChangeProps.priceChange}
            </Text>
          </View>
          <Text
            style={[
              styles.percentageChange,
              StockChangeProps.percentageChange < 0
                ? styles.decreasedPercentageChange
                : styles.increasedPercentageChange,
            ]}
          >
            {StockChangeProps.percentageChange}%
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 20,
    paddingLeft: 20,
    width: "100%",
    marginBottom: 10,
    height: 100,
  },
  boxShadow: {},
  logo: {
    width: "17%",
    height: "100%",
    borderRadius: 400 / 2,
    marginRight: 15,
    borderWidth: 5,
    borderColor: "lightgrey",
  },
  symbol: {
    fontWeight: "bold",
    fontSize: 25,
  },
  companyName: {
    fontWeight: "400",
    color: "#808080",
  },
  currentPrice: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#5A5A5A",
  },
  priceChange: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    fontSize: 10,
  },
  increasedPriceChange: {
    color: "green",
  },
  decreasedPriceChange: {
    color: "red",
  },
  percentageChange: {
    fontSize: 10,
  },
  increasedPercentageChange: {
    color: "green",
  },
  decreasedPercentageChange: {
    color: "red",
  },
});

const generateBoxShadowStyle = (
  xOffset: number,
  yOffset: number,
  shadowColorIos: string,
  shadowOpacity: number,
  shadowRadius: number,
  elevation: number,
  shadowColorAndroid: string
) => {
  if (Platform.OS === "ios") {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === "android") {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};
