import React, { useEffect } from "react";
import { Button } from "@rneui/themed";
import { useNavigation } from "expo-router";
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet
} from "react-native";

const Index = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.vivaLogo}
          source={require("../../assets/images/viva-mais-logo.png")}
        />
      </View>
      <ImageBackground
        source={require("../../assets/images/welcome-bg.png")}
        style={{ flex: 1 }}
        imageStyle={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        resizeMode="cover"
      >
        <View style={styles.welcomeContainer}>
          <View>
            <Text style={styles.titleText}>Welcome!</Text>
            <Text style={styles.mediumText}>
              Log in to your account or create a new one!
            </Text>
          </View>
          <View style={{ marginTop: 50, width: "100%", gap: 20 }}>
            <Button
              title="Sign in"
              uppercase
              size="lg"
              titleStyle={{ color: "#035629" }}
              buttonStyle={{ backgroundColor: "#E9F0DF", borderRadius: 100 }}
              onPress={() => Alert.alert("Sign in button pressed")}
            />
            <Button
              title="Sign up"
              uppercase
              size="lg"
              titleStyle={{ color: "#035629" }}
              buttonStyle={{ backgroundColor: "#E9F0DF", borderRadius: 100 }}
              onPress={() => Alert.alert("Sign up button pressed")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#E9F0DF",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  vivaLogo: {
    width: 345,
    height: 212,
  },
  titleText: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#E9F0DF",
    textAlign: "center"
  },
  mediumText: {
    fontSize: 14,
    color: "#E9F0DF",
    fontWeight: "medium",
    textAlign: "center"
  }
});

export default Index;
