import { checkBehavior } from "../@utils/util-buttons"
import type { ButtonProp } from "../@types/type-button"

function Action(props: ButtonProp) {
  const behavior = checkBehavior(props.behavior)
  return (
    <button
      className={`${behavior} group rounded-lg outline-hidden outline-offset-1 text-sm text-white bg-pur-700 select-none cursor-pointer hover:bg-pur-800 active:bg-pur-900 focus-visible:outline-pur-700 disabled:bg-pur-400 disabled:cursor-not-allowed`}
      {...props}
    >
      <div className="flex items-center justify-center gap-xs">
        {props.children}
      </div>
    </button>
  )
}

export default Action