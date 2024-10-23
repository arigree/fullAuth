import { Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./../assets/images/Hiking_Club_Logo_NoBG.png")}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.tagLineTop}>
          Learn <Text style={styles.brownText}>CODE</Text>
        </Text>
        <Text style={styles.tagLineTop}>Come and check us out!</Text>
        <Text style={styles.tagLine}>
          We are located in the middle of Indianapolis. This is where is all
          happens.
        </Text>
        <Button mode="text" style={styles.btn} onPress={() => router.push("/(auth)/sign-in")}>
          <Text style={styles.whiteText}>Sign In</Text>
        </Button>
        <Button mode="text" style={styles.btn} onPress={() => router.push("/(auth)/sign-up")}>
          <Text style={styles.whiteText}>Sign Up Today</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
   backgroundColor:"#F2EED8"
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: -50,
  },
  logo: {
    width: 250,
    height: 250,
  },
  subContainer: {
    padding: 20,
    marginTop: -20,
  },
  tagLineTop: {
    fontSize: 30,
    textAlign: "center",
  },
  tagLine: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 15,
    color: Colors.DEV_GRAY,
  },
  brownText: {
    color: Colors.DEV_PRIMARY,
  },
  btn:{
    backgroundColor: "#385802",
    padding: 10,
    borderRadius: 50,
    marginTop:50,
  },
  whiteText:{
    color: "#fff",
    textAlign: "center",
  },
});
