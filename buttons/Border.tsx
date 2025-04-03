import { forwardRef } from "react";
import { checkOption } from "../@utils/derived-buttons"
import type { ButtonProp } from "../@types/button"

const Border = forwardRef<HTMLButtonElement, ButtonProp>(
  function Border(props, ref) {
    const { configBehavior, configSize, children, ...rest } = props
    const style = checkOption({ configBehavior, configSize })
    return (
      <button
        className={`group ${style} border rounded-lg outline-offset-1 outline-emphasis text-border-text select-none cursor-pointer border-border-normal hover:border-border-hover active:border-border-active disabled:border-border-disabled focus-visible:outline-2 disabled:cursor-not-allowed`}
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

export default Border