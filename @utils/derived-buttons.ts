import type { PropsExtra } from "../@types/button";

function checkOption({ configBehavior = "base", configSize = "lg" }: PropsExtra): string {
  const defaultStyle = "size-auto";
  const baseStyle = configSize == "lg" ?
    `${defaultStyle} min-h-9 px-4 text-sm` :
    `${defaultStyle} min-h-7 px-3 text-xs`
  const iconStyle = configSize == "lg" ?
    "size-9 text-sm" :
    "size-7 text-xs"
  return configBehavior == "base" ? baseStyle : iconStyle
}

export { checkOption };