import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/colors';

const styles = StyleSheet.create({
  wrapLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: Colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  cta: {
    marginLeft: 8,
    color: Colors.blue,
    fontSize: 14,
    fontWeight: '700',
  },
});
export default styles;
