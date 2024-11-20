import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "../ThemedText";
import { Formik } from "formik";
import InputField from "../formik fields/InputField";
import GreenCustomBtn from "../ui/GreenCustomBtn";
import { router } from "expo-router";
import CheckTextBox from "./CheckTextBox";
import { Colors } from "@/constants/Colors";

const Signup = () => {
  const [checked, setChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);

  const onSwitch = () => {
    router.push("/auth/signin");
  };

  const onEmailChecked = () => {
    setEmailChecked((prev) => !prev);
  };

  return (
    <>
      <ThemedText type="bold" style={styles.title}>
        Sign Up For Free
      </ThemedText>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        // validationSchema={LoginValidation}
        onSubmit={() => {
          router.push("/signup-process");
        }}
      >
        {({ handleSubmit }) => (
          <>
            <View style={styles.inputWrapper}>
              <InputField
                name="name"
                placeholder="Name"
                inputProps={{
                  placeholder: "John",
                }}
              />
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
            <View style={styles.checkWrapper}>
              <CheckTextBox
                text={"Keep Me Signed In"}
                onChange={() => setChecked(!checked)}
                checked={checked}
              />
              <CheckTextBox
                text={"Email Me About Special Pricing"}
                onChange={onEmailChecked}
                checked={emailChecked}
              />
            </View>

            <GreenCustomBtn text="Create Account" onPress={handleSubmit} />
            <Pressable onPress={onSwitch}>
              <Text style={styles.switch}>Already have an account?</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </>
  );
};

export default Signup;

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
  switch: {
    fontSize: 12,
    fontFamily: "BentonSansRegular",
    marginTop: 20,
    color: Colors.green53,
  },
  loginWrapper: {},
  checkWrapper: {
    gap: 13,
    marginRight: "auto",
    marginVertical: 25,
  },
});
