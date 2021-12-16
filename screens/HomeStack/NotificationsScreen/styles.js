import { StyleSheet } from 'react-native';
import fonts from '../../../assets/fonts';
import colors from '../../../utils/colors'

const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
  },
  mainContainerStyle:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  headingStyle:{
    fontFamily:fonts.Black,
    fontSize:20,
    color:colors.black
  }
});

export default styles