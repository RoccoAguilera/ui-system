import { checkBehavior } from "../@utils/derived-buttons"
import type { ButtonProp } from "../@types/button"

function Border(props: ButtonProp) {
  const behavior = checkBehavior(props.behavior)
  return (
    <button
      className={`${behavior} group border border-gry-200 rounded-lg outline-offset-1 outline-pur-700 text-sm bg-white select-none cursor-pointer hover:border-gry-400 active:border-gry-700 focus-visible:outline-2 disabled:border-gry-200 disabled:cursor-not-allowed`}
      {...props}
    >
      <div className="flex items-center justify-center gap-xs group-disabled:opacity-50">
        {props.children}
      </div>
    </button>
  )
}

export default Border