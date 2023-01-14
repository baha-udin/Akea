import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    paddingVertical: 12,
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
