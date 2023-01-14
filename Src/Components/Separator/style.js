import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/colors';
import {ResWidth, ResHeight} from '../../Utils/responsive';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gray,
    opacity: 0.6,
  },
  text: {
    marginHorizontal: 16,
    color: Colors.blue,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default styles;
