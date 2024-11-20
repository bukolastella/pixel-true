import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import GreenCustomBtn from "../ui/GreenCustomBtn";
import InputField from "../formik fields/InputField";
import { Formik } from "formik";
import AuthButton from "../ui/AuthButton";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

const Signin = () => {
  const onSwitch = () => {
    router.push("/auth/signup");
  };
  return (
    <>
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
            <Pressable onPress={onSwitch}>
              <Text style={styles.switch}>Create an account?</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </>
  );
};

export default Signin;

const styles = StyleSheet.create({
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
    color: Colors.green53,
  },
  LoginWrapper: {},
  switch: {
    fontSize: 12,
    fontFamily: "BentonSansRegular",
    marginTop: 20,
    color: Colors.green53,
  },
});
