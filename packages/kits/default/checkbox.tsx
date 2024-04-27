import { Container, ContainerProperties } from '@react-three/uikit'
import { Check } from '@react-three/uikit-lucide'
import React, { useState } from 'react'
import { borderRadius, colors } from './theme.js'

export type CheckboxProperties = Omit<ContainerProperties, 'children'> & {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  onCheckedChange?(checked: boolean): void
}

export function Checkbox({
  defaultChecked,
  checked: providedChecked,
  disabled = false,
  onCheckedChange,
  ...props
}: CheckboxProperties) {
  const [uncontrolled, setUncontrolled] = useState(defaultChecked ?? false)
  const checked = providedChecked ?? uncontrolled
  return (
    <Container
      alignItems="center"
      justifyContent="center"
      cursor={disabled ? undefined : 'pointer'}
      onClick={
        disabled
          ? undefined
          : () => {
              if (providedChecked == null) {
                setUncontrolled(!checked)
              }
              onCheckedChange?.(!checked)
            }
      }
      borderRadius={borderRadius.sm}
      width={16}
      height={16}
      borderWidth={1}
      borderColor={colors.primary}
      backgroundColor={checked ? colors.primary : undefined}
      backgroundOpacity={disabled ? 0.5 : undefined}
      borderOpacity={disabled ? 0.5 : undefined}
      {...props}
    >
      <Check
        color={checked ? colors.primaryForeground : undefined}
        opacity={checked ? (disabled ? 0.5 : undefined) : 0}
        width={14}
        height={14}
      />
    </Container>
  )
}
