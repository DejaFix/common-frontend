import {
  useId,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react'
import { cx } from '../lib/cx'

export interface FieldProps {
  label: ReactNode
  hint?: ReactNode
  /** 있으면 빨간 글씨로 표시하고 입력칸에 aria-invalid를 붙인다 */
  error?: ReactNode
  /** id 등을 받아 입력칸에 붙이는 함수. 라벨·도움말·오류가 입력칸과 연결된다. */
  children: (control: { id: string; 'aria-describedby'?: string; 'aria-invalid'?: true }) => ReactNode
  className?: string
}

/** 라벨 + 입력칸 + 도움말/오류 (DejaFix 로그인 화면 .field). 안의 input·select·textarea는 42px 높이로 맞춰진다. */
export function Field({ label, hint, error, children, className }: FieldProps) {
  const id = useId()
  const hintId = `${id}-hint`
  const errId = `${id}-err`
  const describedBy = [hint && hintId, error && errId].filter(Boolean).join(' ') || undefined
  return (
    <div className={cx('field', className)}>
      <label htmlFor={id}>{label}</label>
      {children({ id, 'aria-describedby': describedBy, 'aria-invalid': error ? true : undefined })}
      {hint && (
        <span className="field-hint" id={hintId}>
          {hint}
        </span>
      )}
      {error && (
        <span className="form-error" id={errId} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

/** Field 안에서 쓰는 입력칸 (스타일은 .field input) */
export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} />
}

/** Field 안에서 쓰는 여러 줄 입력칸 */
export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} />
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[]
}

/** 고르기 상자. 단독으로 쓰면 DejaFix 표 위 필터용 32px, Field 안에서는 42px */
export function Select({ options, className, ...rest }: SelectProps) {
  return (
    <select className={cx('select', className)} {...rest}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )
}

export interface SwitchProps {
  checked: boolean
  onChange: (next: boolean) => void
  /** 스위치 옆 글자. 없으면 ariaLabel을 꼭 넣는다 */
  label?: ReactNode
  ariaLabel?: string
  disabled?: boolean
}

/** 켜기/끄기 스위치 (role="switch") */
export function Switch({ checked, onChange, label, ariaLabel, disabled }: SwitchProps) {
  const btn = (
    <button
      type="button"
      role="switch"
      className="switch"
      aria-checked={checked}
      aria-label={label ? undefined : ariaLabel}
      disabled={disabled}
      onClick={() => onChange(!checked)}
    />
  )
  if (!label) return btn
  return (
    <label className="switch-label">
      {btn}
      {label}
    </label>
  )
}
