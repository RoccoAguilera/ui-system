import { checkBehavior } from "../@utils/util-buttons"
import type { ButtonProp } from "../@types/type-button"

function Empty(props: ButtonProp) {
  const behavior = checkBehavior(props.behavior)
  return (
    <button
      className={`${behavior} group rounded-lg outline-hidden outline-offset-1 text-sm bg-white select-none cursor-pointer focus-visible:outline-pur-700 disabled:cursor-not-allowed`}
      {...props}
    >
      <div className="flex items-center justify-center gap-xs group-disabled:opacity-50">
        {props.children}
      </div>
    </button>
  )
}

export default Empty