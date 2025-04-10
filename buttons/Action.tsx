import { forwardRef } from "react"
import { styleVariant } from "../@utils/derived-buttons"
import type { ButtonProp } from "../@types/button"

const Action = forwardRef<HTMLButtonElement, ButtonProp>(
  function Action(props, ref) {
    const {
      dataBehavior = "default",
      dataSize = "lg",
      children,
      ...rest
    } = props
    const style = styleVariant({ dataBehavior, dataSize })
    return (
      <button
        className={`${style} border-r border-b-2 border-black/25 rounded-lg outline-offset-1 outline-emphasis text-action-text select-none cursor-pointer bg-action-normal hover:bg-action-hover active:bg-action-active disabled:bg-action-disabled focus-visible:outline-2 disabled:cursor-not-allowed`}
        data-behavior={dataBehavior}
        data-size={dataSize}
        ref={ref}
        {...rest}
      >
        <div className="flex items-center justify-center gap-1">
          {children}
        </div>
      </button>
    )
  }
)

export default Action