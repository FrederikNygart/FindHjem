import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  resultText: {
    flex: 1,
    textAlign: 'left',
    marginLeft: 10,
  },
  centerDescription: {
    flex: 1,
    textAlign: 'left',
    marginLeft: 30,
    marginRight: 30,
  },
  openingHours:{
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 10,
  },
  openingHoursElement: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
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
  buttonContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
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
    width: 80,
    borderColor: 'grey',
    textAlign: 'center',
  },
  listElement: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    padding: 15,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    height: 100,
  },
});