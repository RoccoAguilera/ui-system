import type { TextAreaProp, LabelProps } from "../@types/type-inputs"
import { styleDerived } from "../@utils/util-inputs"

function Textarea(props: TextAreaProp) {
  const { label, hintConfig, ...rest } = props
  const { hint } = styleDerived(props)
  return (
    <label className="flex flex-col gap-xs h-fit border-gry-200 text-sm">
      <textarea
        className="peer appearance-none min-h-[37px] px-2.5 py-[7.5px] field-sizing-content whitespace-pre-wrap break-words border border-inherit rounded-xs outline-hidden outline-offset-1 focus:outline-pur-700 placeholder:text-black/25 placeholder:select-none disabled:text-black/25 invalid:focus:outline-tom-600 disabled:cursor-not-allowed inset-shadow-hack inset-shadow-white overflow-hidden"
        style={{ wordBreak: 'break-word', }}
        rows={1}
        {...rest}
      />
      {label && <Label label={label} hint={hint} hintText={hintConfig?.text} />}
    </label>
  )
}

function Label({ label, hint, hintText }: LabelProps) {
  return (
    <div className="order-first flex justify-between gap-xs border-inherit peer-disabled:text-black/25">
      <span>{label}</span>
      {hint && (
        <span className="h-fit border border-inherit rounded-xs px-2.5 text-xs/4.5 select-none">
          {hintText ?? "Required"}
        </span>
      )}
    </div>
  )
}

export default Textarea