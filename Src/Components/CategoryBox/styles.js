import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.grey,
  },
  image: {
    width: 32,
    height: 32,
  },
  imageContainer: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default styles;
