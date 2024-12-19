import type { InputCheckProp, LabelProps } from "../@types/type-inputs"
import { checkRounded } from "../@utils/util-inputs"

function Check(props: InputCheckProp) {
  const { label, description, ...rest } = props
  const rounded = checkRounded(props.type)
  return (
    <label className="flex gap-xs hit-fit text-sm">
      <InputWrapper rounded={rounded} {...rest} />
      {label && <Label label={label} description={description} />}
    </label>
  )
}

function InputWrapper({ rounded, ...rest }: { rounded: string } & InputCheckProp) {
  return (
    <div className="peer pt-0.5">
      <div className="relative w-fit h-4 has-disabled:cursor-not-allowed">
        <input
          className={`${rounded} peer appearance-none w-4 h-4 border border-gry-200 outline-transparent outline-2 outline-offset-1 bg-red-white focus:outline-pur-700 invalid:focus:outline-tom-600 disabled:cursor-not-allowed`}
          {...rest}
        />
        {rest.type == "checkbox" ? (
          <svg
            className="absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 size-3 opacity-0 peer-checked:opacity-100 peer-disabled:text-black/25"
            viewBox="0 0 16 16"
          >
            <path d="M2 8L6 12L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        ) : (
          <svg
            className="absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 size-4 opacity-0 peer-checked:opacity-100 peer-disabled:text-black/25"
            viewBox="0 0 16 16"
          >
            <rect x="4" y="4" width="8" height="8" rx="4" fill="black" />
          </svg>
        )}
      </div>
    </div>
  )
}

function Label({ label, description }: { description?: string } & LabelProps) {
  return (
    <div className="flex flex-col peer-has-[:disabled]:opacity-25">
      <span>{label}</span>
      {description && (<span className="text-xs/4.5 text-gry-900">{description}</span>)}
    </div>
  )
}

export default Check