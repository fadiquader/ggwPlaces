import * as React from 'react';
import { View, TextInput } from 'react-native';
//
import styles from './styles';

const Input = ({ containerStyle, inputStyle, ...rest }) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <TextInput {...rest} style={[styles.input, inputStyle]} />
    </View>
  )
};

Input.defaultProps = {
  containerStyle: {},
  inputStyle: {},
};

export default Input;
