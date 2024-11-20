import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import GreenCustomBtn from "../ui/GreenCustomBtn";
import InputField from "../formik fields/InputField";
import { Formik } from "formik";
import AuthButton from "../ui/AuthButton";

const Signin = () => {
  const theme = useColorScheme() ?? "light";

  return (
    <View style={styles.outerWrapper}>
      <Image
        source={require("../../assets/images/pattern.png")}
        style={styles.pattern}
        resizeMode="cover"
      />
      <View style={styles.wrapper}>
        <Image
          source={
            theme === "light"
              ? require("../../assets/images/logo.png")
              : require("../../assets/images/logo-dark.png")
          }
          style={styles.img}
        />
        <View style={styles.miniWrapper}>
          <ThemedText type="bold" style={styles.title}>
            Login To Your Account
          </ThemedText>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            // validationSchema={LoginValidation}
            onSubmit={() => {
              // router.push("/(main)/(tabs)");
            }}
          >
            {({ handleSubmit }) => (
              <>
                <View style={styles.inputWrapper}>
                  <InputField
                    name="email"
                    placeholder="Email"
                    inputProps={{
                      placeholder: "abc@email.com",
                    }}
                  />
                  <InputField
                    name="password"
                    placeholder="Password"
                    // rightIcon={
                    //   <Entypo
                    //     name="eye-with-line"
                    //     size={24}
                    //     color={Colors.light.Grey80}
                    //   />
                    // }
                    inputProps={{
                      placeholder: "Your password",
                    }}
                    isPassword
                  />
                </View>
                {/*  */}
                <ThemedText type="bold" style={styles.orText}>
                  Or Continue With
                </ThemedText>
                <View style={styles.authBtnWrapper}>
                  <AuthButton
                    text="Facebook"
                    imgSource={require("../../assets/images/facebook.png")}
                  />
                  <AuthButton
                    text="Google"
                    imgSource={require("../../assets/images/google.png")}
                  />
                </View>

                <Text style={styles.forgotText}>Forgot Your Password?</Text>

                <GreenCustomBtn text="Login" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    // backgroundColor: "yellow",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    gap: 60,
    padding: 25,
  },
  pattern: {
    width: "100%",
    height: 250,
    // backgroundColor: "red",
    position: "absolute",
    top: 0,
  },
  img: {
    // flex: 0.3,
    width: 188,
    height: 200,
  },
  miniWrapper: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginBottom: 40,
  },
  inputWrapper: {
    gap: 12,
  },
  orText: {
    fontSize: 12,
    marginVertical: 20,
  },
  authBtnWrapper: {
    flexDirection: "row",
    gap: 16,
  },
  forgotText: {
    fontSize: 12,
    fontFamily: "BentonSansRegular",
    marginTop: 20,
    marginBottom: 36,
    color: "#53E88B",
  },
  LoginWrapper: {},
});
