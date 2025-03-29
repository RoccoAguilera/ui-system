import { useState, ReactNode, isValidElement } from "react"
import {
  useFloating,
  autoUpdate,
  useInteractions,
  useClick,
  useDismiss,
  flip,
  shift,
  type UseFloatingOptions,
} from "@floating-ui/react"

type Props = {
  children: [ReactNode, ReactNode];
  floatingOption?: Omit<UseFloatingOptions, "open" | "onOpenChange" | "whileElementsMounted">
}

export default function Dropdown({ children, floatingOption }: Props) {
  const [firstChild, lastChild] = children
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating<HTMLButtonElement>({
    ...floatingOption,
    placement: floatingOption?.placement ?? "bottom-start",
    middleware: floatingOption?.middleware ?? [flip(), shift()],
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss,])

  const newFirstChild = isValidElement(firstChild) && {
    ...firstChild,
    ref: refs.setReference,
    props: {
      ...firstChild.props,
      ...getReferenceProps(),
    }
  }

  const newLastChild = isValidElement(lastChild) && {
    ...lastChild,
    ref: refs.setFloating,
    props: {
      ...lastChild.props,
      ...getFloatingProps(),
      style: floatingStyles,
    }
  }

  return (
    <>
      {newFirstChild}
      {isOpen && newLastChild}
    </>
  )
}