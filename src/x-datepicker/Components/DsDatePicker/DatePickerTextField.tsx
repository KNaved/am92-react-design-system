import { useThemeProps } from '@mui/system'
import { DateFieldProps } from '@mui/x-date-pickers'
import { FunctionComponent } from 'react'
import { DsTextField, DsTextFieldProps } from '../../../Components'

export interface IDatePickerTextFieldProps
  extends Omit<
    DsTextFieldProps,
    'margin' | 'onInvalid' | 'onKeyDown' | 'onBlur' | 'onKeyUp' | 'ref'
  > {
  setOpen?: (open: boolean) => void
  InputProps?: DateFieldProps['InputProps']
  ref?: DateFieldProps['ref']
  focused?: boolean
}

const DatePickerTextField: FunctionComponent<IDatePickerTextFieldProps> = (
  props: IDatePickerTextFieldProps
) => {
  const mergedProps = useThemeProps({
    props: props,
    name: 'MuiPickersInput'
  })

  const { setOpen, ref, InputProps, focused, ...other } =
    mergedProps
  const { readOnly } = InputProps || {}
  return <DsTextField readOnly={readOnly} {...other} />
}

export default DatePickerTextField
