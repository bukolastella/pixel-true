import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import InputField from "../formik fields/InputField";
import { Formik } from "formik";
import GreenCustomBtn from "../ui/GreenCustomBtn";

interface Props {
  onNext: () => void;
}

const BioSection: FC<Props> = ({ onNext }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
      }}
      // validationSchema={LoginValidation}
      onSubmit={onNext}
    >
      {({ handleSubmit }) => (
        <>
          <InputField name="firstName" placeholder="First Name" />
          <InputField name="lastName" placeholder="Last Name" />
          <InputField name="phoneNumber" placeholder="Mobile Number" />

          <View
            style={{
              marginTop: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GreenCustomBtn text="Next" onPress={handleSubmit} />
          </View>
        </>
      )}
    </Formik>
  );
};

export default BioSection;

const styles = StyleSheet.create({});
