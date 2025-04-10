import { LabelInput } from "./components/Labels"
import { styleVariant } from "../@utils/derived-inputs"
import type { InputTextProp } from "../@types/inputs"

function Input(props: InputTextProp) {
  const {
    dataSize = "lg",
    dataLabel,
    dataIcon,
    dataHint,
    ...rest
  } = props
  const styles = styleVariant({
    dataSize,
    dataIcon,
    dataHint,
  })
  return (
    <label className={`${styles.general} flex flex-col gap-1.5 h-fit border-input-color text-input-text`}>
      <div className="peer relative border border-inherit rounded-md outline-offset-1 outline-emphasis focus-within:outline-2 has-invalid:focus-within:outline-emphasis-error has-disabled:cursor-not-allowed overflow-hidden">

        <input
          className={`${styles.input} peer appearance-none w-full outline-none placeholder:text-input-text/25 placeholder:select-none disabled:text-input-text/25 disabled:cursor-not-allowed inset-shadow-hack inset-shadow-shadow-color`}
          {...rest}
        />

        {dataIcon && (
          <span className={`${styles.icon} absolute top-0 flex items-center justify-center peer-disabled:opacity-25 peer-placeholder-shown:opacity-25 select-none pointer-events-none`}>
            {dataIcon.icon}
          </span>
        )}

      </div>

      <LabelInput
        styleVariant={styles}
        dataLabel={dataLabel}
        dataHint={dataHint}
        isRequired={props.required}
      />
    </label>
  )
}

export default Input