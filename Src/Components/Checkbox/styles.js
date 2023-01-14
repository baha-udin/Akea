import {Platform, StyleSheet, Dimensions} from 'react-native';
import {Colors} from './../../Utils/colors';
import {ResWidth, ResHeight} from '../../Utils/responsive';

const styles = StyleSheet.create({
  wrapCheck: {
    backgroundColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width > 600 ? 36 : 20,
    height: Dimensions.get('window').width > 600 ? 36 : 20,
    borderRadius: 4,
  },
  iconCheck: {
    width: Dimensions.get('window').width > 600 ? 24 : 12,
    height: Dimensions.get('window').width > 600 ? 24 : 12,
  },
});
export default styles;
