// ** Third Party Imports
import * as yup from 'yup'


const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} is a required field`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}


export const investmentSchema = yup.object().shape({
  name: yup.string().required(' Name of investment is required'),
  month: yup.string().required('Month is required'),
  amount: yup.string().required('Amount Number is required'),
  
})

