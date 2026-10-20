import type { ButtonHTMLAttributes } from 'react'
import { cx } from '../lib/cx'
import { Icon, type IconName } from './Icon'

/** default·primary·dark·small은 DejaFix 원본, ghost·danger·block은 추가 */
export type ButtonVariant = 'default' | 'primary' | 'dark' | 'ghost' | 'danger'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: 'md' | 'small'
  /** 가로 꽉 채우기 */
  block?: boolean
  /** 글자 앞 아이콘 */
  icon?: IconName
  /** 처리 중: 누를 수 없고 aria-busy가 붙는다 */
  loading?: boolean
}

export function Button({
  variant = 'default',
  size = 'md',
  block,
  icon,
  loading,
  type = 'button',
  className,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx('btn', variant !== 'default' && variant, size === 'small' && 'small', block && 'block', className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {icon && <Icon name={icon} size={16} />}
      {children}
    </button>
  )
}

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: IconName
  /** 스크린리더용 이름. 꼭 넣는다. */
  label: string
  /** 오른쪽 위 점 (새 알림 등) */
  dot?: boolean
}

/** 아이콘만 있는 버튼. DejaFix 상단바 알림 버튼(.bell)과 같은 모양 */
export function IconButton({ icon, label, dot, className, type = 'button', ...rest }: IconButtonProps) {
  return (
    <button type={type} className={cx('bell', className)} aria-label={label} title={label} {...rest}>
      <Icon name={icon} size={20} />
      {dot && <i className="bell-dot" aria-hidden="true" />}
    </button>
  )
}
