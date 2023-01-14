import {StyleSheet} from 'react-native';
import {Colors} from '../../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    height: '100%',
  },
  wrapCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreementText: {
    marginLeft: 16,
    fontSize: 14,
    color: Colors.blue,
    fontWeight: '400',
  },
  linkTerms: {
    fontWeight: '700',
  },
  option: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: Colors.blue,
  },
});

export default styles;
