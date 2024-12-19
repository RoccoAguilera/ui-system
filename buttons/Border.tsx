import type { ButtonProp } from "../@types/type-button"
import { checkBehavior } from "../@utils/util-buttons"

function Border(props: ButtonProp) {
  const behavior = checkBehavior(props.behavior)
  return (
    <button
      className={`${behavior} group border border-gry-200 rounded-lg outline-hidden outline-offset-1 text-sm bg-white select-none cursor-pointer hover:border-gry-400 active:border-gry-700 focus-visible:outline-pur-700 disabled:border-gry-200 disabled:cursor-not-allowed`}
      {...props}
    >
      <div className="flex items-center justify-center gap-xs group-disabled:opacity-25">
        {props.children}
      </div>
    </button>
  )
}

export default Border