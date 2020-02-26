import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  counterText: {
    fontSize: 9,
    textAlign: 'center',
  },
  counterWrap: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 50,
    height: 13,
    justifyContent: 'center',
    position: 'absolute',
    right: 11,
    top: -5,
    width: 13,
    zIndex: 1,
  },
  icon: {
    paddingBottom: 6,
  },
  wrapper: {
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 4,
    justifyContent: 'center',
    width: 55,
  },
  wrapperActive: {
    borderBottomColor: 'orange',
  },
});
