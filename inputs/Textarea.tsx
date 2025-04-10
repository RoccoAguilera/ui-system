import { LabelInput } from "./components/Labels"
import { styleVariant } from "../@utils/derived-inputs"
import type { TextAreaProp } from "../@types/inputs"

function Textarea(props: TextAreaProp) {
  const {
    dataSize = "lg",
    dataLabel,
    dataHint,
    ...rest
  } = props
  const styles = styleVariant({
    dataSize,
    dataHint,
  })
  return (
    <label className={`${styles.general} flex flex-col gap-1.5 h-fit border-input-color text-input-text`}>

      <textarea
        className={`${styles.input} peer appearance-none field-sizing-content whitespace-pre-wrap break-words border border-inherit rounded-md outline-offset-1 outline-emphasis focus-within:outline-2 placeholder:text-input-text/25 placeholder:select-none disabled:text-input-text/25 invalid:focus:outline-emphasis-error disabled:cursor-not-allowed inset-shadow-hack inset-shadow-shadow-color overflow-hidden`}
        style={{ wordBreak: 'break-word', }}
        rows={1}
        {...rest}
      />

      <LabelInput
        styleVariant={styles}
        dataLabel={dataLabel}
        dataHint={dataHint}
        isRequired={props.required}
      />
    </label>
  )
}

export default Textarea