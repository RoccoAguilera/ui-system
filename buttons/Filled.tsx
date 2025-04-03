import { forwardRef } from "react"
import { checkOption } from "../@utils/derived-buttons"
import type { ButtonProp } from "../@types/button"

const Filled = forwardRef<HTMLButtonElement, ButtonProp>(
  function Filled(props, ref) {
    const { configBehavior, configSize, children, ...rest } = props
    const style = checkOption({ configBehavior, configSize, })
    return (
      <button
        className={`group ${style} rounded-lg outline-offset-1 outline-emphasis text-filled-text select-none cursor-pointer bg-filled-normal hover:bg-filled-hover active:bg-filled-active disabled:bg-filled-disabled focus-visible:outline-2 disabled:cursor-not-allowed`}
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

export default Filled