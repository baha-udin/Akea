import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    height: '100%',
    backgroundColor: Colors.white,
  },
  wrapCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreementText: {
    marginHorizontal: 12,
    fontSize: Dimensions.get('window').width > 600 ? 20 : 14,
    color: Colors.blue,
    fontWeight: '400',
  },
  linkTerms: {
    fontWeight: '700',
    marginHorizontal: 4,
  },
  option: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: Colors.blue,
  },
  IconGoogle: {
    backgroundColor: Colors.grayLight,
  },
});

export default styles;
