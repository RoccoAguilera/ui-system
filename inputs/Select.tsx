import { styleDerived } from "../@utils/derived-inputs"
import type { SelectProp, WrapperProps, LabelProps } from "../@types/inputs"

function Select(props: SelectProp) {
  const { label, iconConfig, hintConfig, ...rest } = props
  const { padding, orientation, hint } = styleDerived(props)
  return (
    <label className="flex flex-col gap-xs h-fit border-input-color outline-emphasis text-sm text-input-text">
      <SelectWrapper
        padding={padding}
        orientation={orientation}
        icon={iconConfig?.icon}
        {...rest}
      />
      {label && <Label label={label} hint={hint} hintText={hintConfig?.text} />}
    </label>
  )
}

function SelectWrapper({ padding, orientation, icon, children, ...rest }: WrapperProps & SelectProp) {
  return (
    <div className="peer relative border border-inherit rounded-xs outline-offset-1 outline-inherit focus-within:outline-2 has-invalid:focus-within:outline-emphasis-error has-disabled:cursor-not-allowed overflow-hidden">
      <select
        className={`${padding} peer appearance-none w-full h-5x7 outline-none placeholder:text-input-text/25 placeholder:select-none disabled:text-input-text/25 disabled:cursor-not-allowed inset-shadow-hack inset-shadow-shadow-color`}
        {...rest}
      >
        {children}
      </select>
      {icon && (
        <span
          className={`${orientation} absolute top-0 flex items-center justify-center size-5x7 peer-disabled:opacity-25 peer-placeholder-shown:opacity-25 select-none pointer-events-none`}
        >
          {icon}
        </span>
      )}
    </div>
  )
}

function Label({ label, hint, hintText }: LabelProps) {
  return (
    <div className="order-first flex justify-between gap-xs border-inherit peer-has-disabled:text-black/25">
      <span>{label}</span>
      {hint && (
        <span className="h-fit border border-inherit rounded-xs px-2.5 text-xs/4.5 select-none">
          {hintText ?? "Required"}
        </span>
      )}
    </div>
  )
}

export default Select