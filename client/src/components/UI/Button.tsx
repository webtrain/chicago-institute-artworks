import { css } from '@emotion/react'
import styled from '@emotion/styled'
import type { SerializedStyles } from '@emotion/serialize'
import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
  type ButtonTypeMap,
  type Theme
} from '@mui/material'
import { type OverridableComponent } from '@mui/material/OverridableComponent'
import React, { forwardRef, type ForwardRefRenderFunction } from 'react'
import { CircularProgress } from './CircularProgress'

interface ExtraProps {
  isLoading?: boolean
  childrenWrapStyle?: React.CSSProperties
}

export type ButtonProps = MuiButtonProps & ExtraProps

const Button: ForwardRefRenderFunction<any, ButtonProps> = (
  {
    isLoading,
    children,
    disabled,
    childrenWrapStyle,
    variant = 'contained',
    color = 'primary',
    ...rest
  },
  ref
) => {
  const Root = variantMap[variant]

  return (
    <Root
      ref={ref}
      disableElevation
      disabled={isLoading ? true : disabled}
      variant={variant}
      color={color}
      {...rest}
    >
      <ChildrenWrap $isLoading={isLoading} style={childrenWrapStyle}>
        {children}
      </ChildrenWrap>
      {isLoading && <StyledCircularProgress size='1.2em' />}
    </Root>
  )
}

const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
  color: inherit;
`

const ChildrenWrap = styled.span<{ $isLoading?: boolean }>`
  opacity: ${(props) => (props.$isLoading ? 0 : 1)};
`

export default forwardRef(
  Button as OverridableComponent<ButtonTypeMap<ExtraProps>>
)

const VERTICAL_SPACING = 1
const HORIZONTAL_SPACING = 4

const buttonStyles = (theme: Theme): SerializedStyles => css`
  transition: all 150ms;
  text-transform: uppercase;
  font-weight: 600;
  padding: ${theme.spacing(VERTICAL_SPACING, HORIZONTAL_SPACING)};
  border-radius: 5px;
  position: relative;
  font-size: 0.9rem;
  &:focus-visible {
    outline: solid 1px ${theme.palette.primary.main};
  }
`

const TextButton = styled(MuiButton)`
  ${(props) => buttonStyles(props.theme)}

  &:hover {
    background: none;
  }
`

const OutlinedButton = styled(MuiButton)`
  ${(props) => buttonStyles(props.theme)}
  /* border correction */

    border: 2px solid ${(props) => props.theme.palette.primary.dark};
  &:hover,
  &:active,
  &.Mui-disabled {
    border: 2px solid ${(props) => props.theme.palette.primary.dark};
    background-color: rgb(255 255 255 / 15%);
    color: ${(props) => props.theme.palette.primary.dark};
  }
  &.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.Mui-disabled {
    opacity: 0.5;
  }

  color: ${(props) => props.theme.palette.text.primary};
`

const ContainedButton = styled(MuiButton)`
  ${(props) => buttonStyles(props.theme)}

  background-color: ${(props) => props.theme.palette.primary.main};
  border: 2px solid ${(props) => props.theme.palette.primary.main};

  color: white;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }

  &.Mui-disabled {
    opacity: 0.7;
    background-color: ${(props) => props.theme.palette.primary.dark};
    border: 2px solid ${(props) => props.theme.palette.primary.dark};
    color: white;
  }
`

const variantMap: Record<
NonNullable<MuiButtonProps['variant']>,
  typeof TextButton | typeof ContainedButton | typeof OutlinedButton
> = {
  text: TextButton,
  contained: ContainedButton,
  outlined: OutlinedButton
}
