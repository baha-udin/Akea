import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import AuthHeader from '../../../Components/AuthHeader';
import Input from '../../../Components/Input';
import Checkbox from '../../../Components/Checkbox';
import Button from '../../../Components/Button';
import Gap from '../../../Components/Gap';
import {IconGoogle} from '../../../Assets/icons';
import Link from '../../../Components/Link';
import {Colors} from '../../../Utils/colors';

const Signin = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <AuthHeader title={'Sign In'} />
        <Input label={'Email'} placeholder="example@gmail.com" />
        <Input label={'Password'} placeholder="xxxxx" isPassword={true} />
        <Gap height={36} />
        <Button isText={true} title={'Sign In'} color={Colors.blue} />
        <Gap height={36} />
        <Text style={styles.option}>Or sign in with</Text>
        <Gap height={36} />
        <Button
          isImage={true}
          Icon={IconGoogle}
          color={Colors.grey}
          width="50%"
        />
      </View>
      <View style={{height: 40}}>
        <Link label={'Don’t have an account?'} CTA="Sign Up" />
      </View>
    </View>
  );
};

export default Signin;
