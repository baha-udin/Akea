import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
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
    paddingVertical: 20,
    width: '75%',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
