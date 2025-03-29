import { forwardRef } from "react"
import { checkBehavior } from "../@utils/derived-buttons"
import type { ButtonProp } from "../@types/button"

const Action = forwardRef<HTMLButtonElement, ButtonProp>(
  function Action(props, ref) {
    const { behavior, children, ...rest } = props
    const behaviorStyle = checkBehavior(behavior)
    return (
      <button
        className={`${behaviorStyle} group rounded-lg outline-offset-1 outline-emphasis text-sm text-action-text select-none cursor-pointer bg-action-normal hover:bg-action-hover active:bg-action-active disabled:bg-action-disabled focus-visible:outline-2 disabled:cursor-not-allowed`}
        ref={ref}
        {...rest}
      >
        <div className="flex items-center justify-center gap-xs">
          {children}
        </div>
      </button>
    )
  }
)

export default Action