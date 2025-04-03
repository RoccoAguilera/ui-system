import { forwardRef } from "react"
import { checkOption } from "../@utils/derived-buttons"
import type { ButtonProp } from "../@types/button"

const Empty = forwardRef<HTMLButtonElement, ButtonProp>(
  function Empty(props, ref) {
    const { configBehavior, configSize, children, ...rest } = props
    const style = checkOption({ configBehavior, configSize })
    return (
      <button
        className={`group ${style} rounded-lg outline-offset-1 outline-emphasis text-empty-text select-none cursor-pointer focus-visible:outline-2 disabled:cursor-not-allowed`}
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