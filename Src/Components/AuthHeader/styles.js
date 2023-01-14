import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  image: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.blue,
    paddingHorizontal: 16,
  },
});

export default styles;
