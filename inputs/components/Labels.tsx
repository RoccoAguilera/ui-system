import { checkHint } from "../../@utils/derived-inputs"
import type { DataLabel, DataHint } from "../../@types/inputs"

type LabelInputProps = {
  dataLabel?: DataLabel;
  dataHint?: DataHint;
  isRequired?: boolean;
  styleVariant: {
    label: string,
    hint: string,
  }
}

function LabelInput({ styleVariant, dataLabel, dataHint, isRequired }: LabelInputProps) {
  if (!dataLabel) return
  const isVisibled = checkHint(isRequired, dataHint)
  return (
    <div className="order-first flex justify-between gap-1.5 border-inherit peer-has-disabled:text-input-text/25">
      <span className={styleVariant.label}>
        {dataLabel}
      </span>
      {isVisibled && (
        <span className={`${styleVariant.hint} self-end h-fit border border-inherit rounded-md px-2.5 select-none`}>
          {dataHint?.text == undefined || dataHint.text == "" ? "Required" : dataHint.text}
        </span>
      )}
    </div>
  )
}

export { LabelInput }