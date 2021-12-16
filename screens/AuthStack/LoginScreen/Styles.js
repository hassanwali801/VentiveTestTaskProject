import { StyleSheet } from 'react-native';
import fonts from '../../../assets/fonts';
import colors from '../../../utils/colors'
export const styles = StyleSheet.create({
  safeStyle: {
    width:'100%',
    height:'100%',
    paddingLeft:22,
    paddingRight:22
  },
  headerText:{
    fontFamily:fonts.Bold,
    fontSize:24,
    lineHeight:36,
    marginTop:15,
    color:colors.black
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:80,
    justifyContent:'space-between',
    marginBottom:30
  },
  loginBtnStyle:{
    width:'35%',
    backgroundColor:colors.white,
    borderWidth:.8,
    borderColor:colors.lightGreen
 },
 
});
