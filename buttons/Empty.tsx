import { forwardRef } from "react"
import { checkBehavior } from "../@utils/derived-buttons"
import type { ButtonProp } from "../@types/button"

const Empty = forwardRef<HTMLButtonElement, ButtonProp>(
  function Empty(props, ref) {
    const { behavior, children, ...rest } = props
    const behaviorStyle = checkBehavior(behavior)
    return (
      <button
        className={`${behaviorStyle} group rounded-lg outline-offset-1 outline-emphasis text-sm text-empty-text select-none cursor-pointer focus-visible:outline-2 disabled:cursor-not-allowed`}
        ref={ref}
        {...rest}
      >
        <div className="flex items-center justify-center gap-xs group-disabled:opacity-50">
          {children}
        </div>
      </button>
    )
  }
)

export default Empty