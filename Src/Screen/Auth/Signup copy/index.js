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

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <AuthHeader title={'Sign Up'} />
        <Input label={'Name'} placeholder="Franky" />
        <Input label={'Email'} placeholder="example@gmail.com" />
        <Input label={'Password'} placeholder="xxxxx" isPassword={true} />
        <View style={styles.wrapCheckBox}>
          <Checkbox />
          <Text style={styles.agreementText}>
            I agree with <Text style={styles.linkTerms}>Terms & Privacy</Text>
          </Text>
        </View>
        <Gap height={36} />
        <Button isText={true} title={'Sign Up'} color={Colors.blue} />
        <Gap height={36} />
        <Text style={styles.option}>Or sign up with</Text>
        <Gap height={36} />
        <Button isImage={true} Icon={IconGoogle} color={Colors.grey} />
      </View>
      <View style={{height: 40}}>
        <Link label={'Already have an account?'} CTA="Sign In" />
      </View>
    </View>
  );
};

export default Signup;
