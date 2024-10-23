import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import React from "react";
import { useSignIn } from "@clerk/clerk-expo";
import { useRouter, Link } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn("");
  const router = useRouter();
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignIn = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password: password,
      });
      if (signInAttempt.status === "complete") {
        await setActive({
          session: signInAttempt.createdSessionId,
        });
        router.push("/(tabs)");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      console.error("Sign in err", err + " ", JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);
  return (
    <View style={styles.container}>
      <View style={styles.signInArea}>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        keyboardType="email-address"
        placeholder="Email Address"
        onChangeText={setEmailAddress}
      />
      <TextInput
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
      />
      <Button style={styles.signInBtn} mode="outlined" onPress={onSignIn}>
        <Text >Sign In</Text>
      </Button>
      
    </View>
    <View style={styles.needAccount}>
        <View >
          <Text>Don't have an account?</Text>
          <Link style={styles.signUpButton} href="/sign-up"><Text>Sign Up</Text></Link>
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding:20,
    backgroundColor:"#F2EED8"
  },
  signInArea:{
    marginTop:20
  },
  signInBtn:{
    backgroundColor: "#385802",
    color: "#fff",
    textDecoration: "none",
    marginTop:20
  },

  needAccount:{
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  signUpButton:{
    textAlign:"center",
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:30,
    paddingRight:30,
    backgroundColor: Colors.DEV_PRIMARY,
    color: "#fff",
    borderRadius:20
  }
});
