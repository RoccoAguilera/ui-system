import { forwardRef } from "react"
import { styleVariant } from "../@utils/derived-buttons"
import type { ButtonProp } from "../@types/button"

const Empty = forwardRef<HTMLButtonElement, ButtonProp>(
  function Empty(props, ref) {
    const {
      dataBehavior = "default",
      dataSize = "lg",
      children,
      ...rest
    } = props
    const style = styleVariant({ dataBehavior, dataSize })
    return (
      <button
        className={`group ${style} rounded-lg outline-offset-1 outline-emphasis text-empty-text select-none cursor-pointer focus-visible:outline-2 disabled:cursor-not-allowed`}
        data-behavior={dataBehavior}
        data-size={dataSize}
        ref={ref}
        {...rest}
      >
        <div className="flex items-center justify-center gap-1 group-disabled:opacity-50">
          {children}
        </div>
      </button>
    )
  }
)

export default Empty