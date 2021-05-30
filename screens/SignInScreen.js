import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import * as Yup from "yup";

import Form from "../components/Forms/Form";
import FormField from "../components/Forms/FormField";
import FormButton from "../components/Forms/FormButton";
import IconButton from "../components/IconButton";
import { loginWithEmail } from "../components/Firebase/firebase";
import FormErrorMessage from "../components/Forms/FormErrorMessage";
import useStatusBar from "../hooks/useStatusBar";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a registered email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
});

export default function SignInScreen({ navigation }) {
  useStatusBar("light-content");

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [loginError, setLoginError] = useState("");

  function handlePasswordVisibility() {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  }

  async function handleOnLogin(values) {
    const { email, password } = values;

    try {
      await loginWithEmail(email, password);
    } catch (error) {
      setLoginError(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign In</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerTextView}>
          <Text style={styles.footerText}>
            Enter your email address{"\n"}and password to sign in.
          </Text>
        </View>

        <View style={styles.footerFormView}>
          <Form
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleOnLogin(values)}
          >
            <FormField
              name="email"
              leftIcon="email"
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus={true}
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
            <View style={styles.footerButtonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text style={styles.forgotPasswordButtonText}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <FormButton title={"Sign In"} />
            {<FormErrorMessage error={loginError} visible={true} />}
          </Form>
        </View>
        <Text style={styles.footerSignInText}>
          Don't have an account?
          <Text
            style={{ color: "#468189", fontWeight: "700" }}
            onPress={() => navigation.navigate("Sign Up")}
          >
            {" "}
            Sign Up
          </Text>
        </Text>

        <Image
          source={require("../assets/housemate-logo-darkblue.png")}
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
    backgroundColor: "#9dbebb",
  },
  footerButtonContainer: {
    marginBottom: 8,
    justifyContent: "center",
    right: 75,
    alignItems: "center",
  },
  forgotPasswordButtonText: {
    color: "#468189",
    fontSize: 15,
    fontWeight: "600",
  },
  backButton: {
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#468189",
    fontSize: 40,
  },
  footer: {
    flex: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
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
  footerFromButtonText: {
    color: "white",
    fontSize: 30,
    paddingVertical: 10,
    maxHeight: 60,
  },
  footerText: {
    fontSize: 20,
    textAlign: "center",
  },
  footerSignInText: {
    paddingTop: 10,
    color: "#676767",
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
