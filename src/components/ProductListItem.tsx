import Colors from "@/constants/Colors";
import { StyleSheet, Text, View, Image } from "react-native";
import { Product } from "../types";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/dafault.png";

type ProductListItemprops = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemprops) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name} </Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },

  price: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.light.tint,
  },
});
