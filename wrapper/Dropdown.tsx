import { useState, useRef, useEffect, ReactNode, ComponentProps } from "react"
import { assignPosition } from "../@utils"

type Props = { children: [ReactNode, ReactNode] } & ComponentProps<"div">
type Reference = HTMLDivElement | null

export default function Dropdown({ children, ...rest }: Props) {
  const reference = useRef<Reference>(null)
  const [state, setState] = useState<Reference>(null)
  const [firstChild, lastChild] = children
  const observerResize = new ResizeObserver(handlerAssign)
  function handlerAssign() {
    console.log("called")
    if (state) { assignPosition(state) }
  }

  useEffect(() => {
    const { current } = reference

    if (current && current.offsetParent) {
      observerResize.observe(current.offsetParent)
      setState(current)
    }
    
    return () => {
      observerResize.disconnect()
    }
  }, [state])

  return (
    <div
      ref={reference}
      className="w-fit h-fit"
      // onClick={handlerAssign}
      // onBlur={handlerAssign}
      {...rest}
    >
      {firstChild}
      {lastChild}
    </div>
  )
}