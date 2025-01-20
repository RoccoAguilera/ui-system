import { checkBehavior } from "../@utils/util-buttons"
import type { ButtonProp } from "../@types/type-button"

function Filled(props: ButtonProp) {
  const behavior = checkBehavior(props.behavior)
  return (
    <button
      className={`${behavior} group rounded-lg outline-hidden outline-offset-1 text-sm bg-gry-100 select-none cursor-pointer hover:bg-gry-200 active:bg-gry-300 focus-visible:outline-pur-700 disabled:bg-gry-50 disabled:cursor-not-allowed`}
      {...props}
    >
      <div className="flex items-center justify-center gap-xs group-disabled:opacity-50">
        {props.children}
      </div>
    </button>
  )
}

export default Filled