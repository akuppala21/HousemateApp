import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as Yup from "yup";
import Form from "../components/Forms/Form";
import FormField from "../components/Forms/FormField";
import FormButton from "../components/Forms/FormButton";
import IconButton from "../components/IconButton";
import FormErrorMessage from "../components/Forms/FormErrorMessage";
import { registerWithEmail } from "../components/Firebase/firebase";
import useStatusBar from "../hooks/useStatusBar";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string()
    .required("Please enter a valid email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must match Password")
    .required("Confirm Password is required"),
});

export default function SignUpScreen({ navigation }) {
  useStatusBar("light-content");

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState("eye");
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(true);
  const [registerError, setRegisterError] = useState("");

  function handlePasswordVisibility() {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  }

  function handleConfirmPasswordVisibility() {
    if (confirmPasswordIcon === "eye") {
      setConfirmPasswordIcon("eye-off");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (confirmPasswordIcon === "eye-off") {
      setConfirmPasswordIcon("eye");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    }
  }

  async function handleOnSignUp(values, actions) {
    const { email, password } = values;
    try {
      await registerWithEmail(email, password);
    } catch (error) {
      setRegisterError(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerTextView}>
          <Text style={styles.footerText}>
            Enter your name, email address,{"\n"}and password to register.
          </Text>
        </View>
        <View style={styles.footerFormView}>
          <Form
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleOnSignUp(values)}
          >
            <FormField
              name="name"
              leftIcon="account"
              placeholder="Enter name"
              autoFocus={true}
            />
            <FormField
              name="email"
              leftIcon="email"
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <FormField
              name="password"
              leftIcon="lock"
              placeholder="Enter password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={passwordVisibility}
              textContentType="password"
              rightIcon={rightIcon}
              handlePasswordVisibility={handlePasswordVisibility}
            />
            <FormField
              name="confirmPassword"
              leftIcon="lock"
              placeholder="Confirm password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={confirmPasswordVisibility}
              textContentType="password"
              rightIcon={confirmPasswordIcon}
              handlePasswordVisibility={handleConfirmPasswordVisibility}
            />
            <FormButton title={"Register"} />
            {<FormErrorMessage error={registerError} visible={true} />}
          </Form>

          <Text style={styles.footerSignInText}>
            Already have an account?
            <Text
              style={{ color: "#468189", fontWeight: "700" }}
              onPress={() => navigation.navigate("Sign In")}
            >
              {" "}
              Sign In
            </Text>
          </Text>

          <IconButton
            style={styles.backButton}
            iconName="keyboard-backspace"
            color="#468189"
            size={40}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Image
          source={require("../assets/housemate-logo-lightblue.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#031926",
  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  footer: {
    flex: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  footerText: {
    fontSize: 20,
    textAlign: "center",
  },
  footerTextView: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
    paddingVertical: 20,
  },
  footerFormView: {
    width: "75%%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  footerSignInText: {
    paddingTop: 10,
    color: "#676767",
  },

  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#f4e9cd",
    fontSize: 40,
  },

  logo: {
    width: 48,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    right: 16,
    bottom: 5,
  },
});
