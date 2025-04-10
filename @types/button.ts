import { ComponentProps } from "react"

interface PropsExtra {
  dataBehavior?: "default" | "icon";
  dataSize?: "sm" | "lg";
}

type ButtonProp = ComponentProps<"button"> & PropsExtra

export type { PropsExtra, ButtonProp }