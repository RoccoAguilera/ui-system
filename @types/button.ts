import { ComponentProps } from "react"

interface PropsExtra {
  behavior?: "normal" | "onlyIcon";
}

interface ButtonProp extends ComponentProps<"button">, PropsExtra { }

export type { ButtonProp }