import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../Utils/colors';

const styles = StyleSheet.create({
  wrapLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: Colors.blue,
    fontSize: Dimensions.get('window').width > 600 ? 24 : 14,
    fontWeight: '400',
  },
  cta: {
    marginLeft: 8,
    color: Colors.blue,
    fontSize: Dimensions.get('window').width > 600 ? 24 : 14,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
});
export default styles;
