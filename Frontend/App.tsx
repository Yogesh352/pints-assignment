import axios from "axios";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  View,
  StatusBar,
} from "react-native";
import StockChange from "./src/components/StockChange";

export default function App() {
  const baseUrl = "http://10.0.2.2:3000";
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStock = async () => {
      await axios
        .get(`http://10.0.2.2:3000/stock`)
        .then(async (response) => {
          await setStocks(response?.data);
        })
        .catch((error) => console.log(error.response));
    };
    fetchStock();
  }, []);


  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
    >
      {stocks.map((stock: any) => {
        return (
          <StockChange
            key={stock.symbol}
            symbol={stock.symbol}
            imageUri={`https://storage.googleapis.com/iex/api/logos/${stock.symbol}.png`}
            companyName={stock.companyName}
            currentPrice={stock.latestPrice}
            percentageChange={
              (stock.latestPrice - stock.previousClose) / stock.previousClose
            }
            priceChange={stock.latestPrice - stock.previousClose}
          />
        );
      })}
    </ScrollView>
  );
}
const StatusBarheight = StatusBar?.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 10,
    paddingBottom: 100,
  },
});
