import { DsChipProps } from '../DsChip'

export interface DsTagProps
  extends Omit<DsChipProps, 'skipFocusWhenDisabled' | 'clickable' | 'color'> {
  value: any
  selected: boolean
}

export const DsTagDefaultProps: DsTagProps = {
  value: undefined,
  selected: false,
  'ds-variant': ''
}
