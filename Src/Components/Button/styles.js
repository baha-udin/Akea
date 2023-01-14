import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../Utils/colors';
import {ResWidth, ResHeight} from '../../Utils/responsive';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    paddingVertical: Dimensions.get('window').width > 600 ? 24 : 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
