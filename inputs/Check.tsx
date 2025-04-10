import { checkRounded } from "../@utils/derived-inputs"
import type { InputCheckProp, CheckType } from "../@types/inputs"

function Check(props: InputCheckProp) {
  const {
    type,
    dataSize = "lg",
    dataLabel,
    ...rest
  } = props
  const rounded = checkRounded(props.type)
  return (
    <label className="flex gap-2 text-input-text">
      <div className="peer relative has-disabled:cursor-not-allowed">
        <input
          type={type}
          className={`${rounded} peer appearance-none size-4 border border-input-color outline-offset-1 outline-emphasis bg-input-check-background focus:outline-2 invalid:focus:outline-emphasis-error disabled:cursor-not-allowed`}
          {...rest}
        />
        <IconSelection type={type} />
      </div>
      <div className="flex flex-col gap-1 peer-has-disabled:opacity-25">
        <span className="min-h-4.5 pt-0.5 text-sm/4">{dataLabel}</span>
      </div>
    </label>
  )
}

function IconSelection(props: CheckType) {
  const style = "absolute left-0 top-0.5 size-4 border border-transparent opacity-0 peer-checked:opacity-100 peer-disabled:text-input-text/25"

  return props.type == "checkbox" ?
    <span className={`${style} content-center *:mx-auto`}>
      <svg width={12} height={12} viewBox="0 0 16 16">
        <path d="M2 8L6 12L14 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </span>
    :
    <span className={style}>
      <svg viewBox="0 0 16 16">
        <rect x="3" y="3"  width="10" height="10" rx="999" fill="currentColor" />
      </svg>
    </span>
}

export default Check