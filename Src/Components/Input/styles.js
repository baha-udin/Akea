import {Platform, StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../Utils/colors';
import {ResWidth, ResHeight} from '../../Utils/responsive';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: Dimensions.get('window').width > 600 ? 24 : ResHeight(15),
    fontWeight: '400',
    color: Colors.blue,
    marginBottom: 8,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: Platform.OS == 'android' ? 8 : ResWidth(12),
    width: '75%',
  },
  icon: {
    width: Dimensions.get('window').width > 600 ? 30 : 18,
    height: Dimensions.get('window').width > 600 ? 30 : 18,
  },
});

export default styles;
