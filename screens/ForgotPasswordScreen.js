import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import * as Yup from 'yup';


import Form from '../components/Forms/Form';
import FormField from '../components/Forms/FormField';
import FormButton from '../components/Forms/FormButton';
import IconButton from '../components/IconButton';
import { passwordReset } from '../components/Firebase/firebase';
import FormErrorMessage from '../components/Forms/FormErrorMessage';
import useStatusBar from '../hooks/useStatusBar';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email')
});

export default function ForgotPasswordScreen({ navigation }) {
  useStatusBar('light-content');

  const [customError, setCustomError] = useState('');

  async function handlePasswordReset(values) {
    const { email } = values;

    try {
      await passwordReset(email);
      navigation.navigate('Welcome');
    } catch (error) {
      setCustomError(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Forgot Password</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerTextView}>
          <Text style={styles.footerText}>Enter your email address to{"\n"}recover your password.</Text>
        </View>
        <View style={styles.footerFormView}>
          <Form
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={values => handlePasswordReset(values)}
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
            <FormButton title="Reset Password" />
            {<FormErrorMessage error={customError} visible={true} />}
          </Form>
          <IconButton
            style={styles.backButton}
            iconName="keyboard-backspace"
            color='#468189'
            size={40}
            onPress={() => navigation.goBack()}
          />
          </View>
          <Image source={require('../assets/housemate-logo-lightblue.png')} style={styles.logo}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: "#031926"
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },

  footer: {
    flex: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  footerText: {
    fontSize: 20,
    textAlign: "center"
  },
  footerTextView: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
    paddingVertical: 20,
  },
  footerFormView: {
    width: '75%%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: "#f4e9cd",
    fontSize: 40
  },

  logo: {
    width: 48,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    right: 16,
    bottom: 5
  }
});
