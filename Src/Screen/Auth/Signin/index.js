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
import Separator from '../../../Components/Separator';

const Signin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <AuthHeader title={'Sign In'} />
        <Input label={'Email'} placeholder="example@gmail.com" />
        <Input label={'Password'} placeholder="xxxxx" isPassword={true} />
        <Gap height={36} />
        <Button isText={true} title={'Sign In'} color={Colors.blue} />
        <Gap height={36} />
        <Separator text={'Or sign in with'} />
        <Gap height={36} />
        <Button icon={IconGoogle} style={styles.IconGoogle} />
      </View>
      <View style={{height: 40}}>
        <Link
          label={'Don’t have an account?'}
          CTA="Sign Up"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};

export default Signin;
