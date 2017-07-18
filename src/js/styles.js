import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  resultText: {
    color: '#FFF',
    flex: 1,
    textAlign: 'center'
  },
  flashyBackground: {
    flex: 1,
    backgroundColor: '#FC46AA',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerCentered: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBox: {
    margin: 20
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navBar: {
    height: 30,
  },
  textInput: {
    height: 40,
    width: 40,
    borderColor: 'grey',
    textAlign: 'center',
  }
});