import {
  StyleSheet,
  Dimensions,
  Platform,
  View,
  StatusBar,
} from "react-native";
import StockChange from "./src/components/StockChange";

export default function App() {
  return (
    <View style={styles.container}>
      <StockChange
        symbol={"AAPL"}
        imageUri={"https://storage.googleapis.com/iex/api/logos/AAPL.png"}
        companyName={"Apple Inc. Comm..."}
        currentPrice={161.50}
        percentageChange={-3.06}
        priceChange={-4.93}
      />
      <StockChange
        symbol={"AAPL"}
        imageUri={"https://storage.googleapis.com/iex/api/logos/AAPL.png"}
        companyName={"Netflix, Inc Commasdasdm"}
        currentPrice={161.50}
        percentageChange={-3.06}
        priceChange={-4.93}
      />
      <StockChange
        symbol={"AAPL"}
        imageUri={"https://storage.googleapis.com/iex/api/logos/AAPL.png"}
        companyName={"Apple Inc. Comm lasldasldlasdasldasldlasdlas"}
        currentPrice={161.50}
        percentageChange={2.06}
        priceChange={4.93}
      />
    </View>
  );
}
const StatusBarheight = StatusBar?.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
