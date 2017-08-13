import { StyleSheet } from 'react-native';

export const style = {
  openingHours: StyleSheet.create({
    container: {
      margin: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: 'skyblue',
      borderRadius: 10,
    },
    element: {
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 30,
    },
    elementHightligthed: {
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 30,
      borderColor: 'skyblue',
    },
    textDay: {
      textAlign: 'left',
    },
    textHours: {
      marginLeft: 10,
      textAlign: 'center',
    },
    textDayBold: {
      textAlign: 'left',
      fontWeight: 'bold',
    },
    textHoursBold: {
      marginLeft: 10,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    dayContainer: {
      width: 100,
      marginLeft: 40,
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    hoursContainer: {
      width: 100,
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    row: {
      flex: 1,
      flexDirection: 'row',
    }
  }),
  centerInfo: StyleSheet.create({
    container: {
      flex: -1,
      marginTop: 20,
      marginBottom: 10
    },
    row: {
      flex: -1,
      flexDirection: 'row',
    },
    element: {
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 30,
    },
    text: {
      textAlign: 'left',
      marginLeft: 10,
    },
    textContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    iconContainer: {
      width: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
  }),
}

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


