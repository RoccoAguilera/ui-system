import { forwardRef } from "react"
import { checkOption } from "../@utils/derived-buttons"
import type { ButtonProp } from "../@types/button"

const Action = forwardRef<HTMLButtonElement, ButtonProp>(
  function Action(props, ref) {
    const { configBehavior, configSize, children, ...rest } = props
    const style = checkOption({ configBehavior, configSize })
    return (
      <button
        className={`${style} rounded-lg outline-offset-1 outline-emphasis text-action-text text-sm select-none cursor-pointer bg-action-normal hover:bg-action-hover active:bg-action-active disabled:bg-action-disabled focus-visible:outline-2 disabled:cursor-not-allowed`}
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