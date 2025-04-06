import type { PropsExtra } from "../@types/button";

function checkOption({ configBehavior = "base", configSize = "lg" }: PropsExtra): string {
  const baseStyle = configSize == "lg" ?
    "w-full h-fit min-h-9 px-4 py-2 text-sm/4" :
    "w-full h-fit min-h-7 px-3 py-1.5 text-xs/3.5"
  const iconStyle = configSize == "lg" ?
    "size-9 min-w-9 min-h-9 text-sm/4" :
    "size-7 min-w-7 min-h-7 text-xs/3.5"
  return configBehavior == "base" ? baseStyle : iconStyle
}

export { checkOption };