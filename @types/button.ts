import { ComponentProps } from "react"

interface PropsExtra {
  configBehavior?: "base" | "onlyIcon";
  configSize?: "sm" | "lg";
}

type ButtonProp = ComponentProps<"button"> & PropsExtra

export type { PropsExtra, ButtonProp }