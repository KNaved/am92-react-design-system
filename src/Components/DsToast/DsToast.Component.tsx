import { FC } from 'react'
import Alert from '@mui/material/Alert'
import { DsToastProps } from './DsToast.Types'
import { DsRemixIcon } from '../DsRemixIcon'
import { useThemeProps } from '@mui/system'

const CloseIcon = (props: any) => {
  return (
    <DsRemixIcon fontSize="mild" className="ri-close-line" {...props} />
  )
}

export const DsToast: FC<DsToastProps> = (inProps) =>  {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiAlert'
  })

    const { forwardedRef, ...restProps } = props
    
    return (
      <Alert
        ref={forwardedRef}
        {...restProps}
        slots={{ closeIcon: CloseIcon, ...restProps?.slots }}
      />
    )
}
