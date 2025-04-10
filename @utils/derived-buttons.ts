import type { PropsExtra } from "../@types/button";

type Style = {
  [k: string]: string;
  default: string;
  icon: string;
}

function styleVariant({ dataBehavior, dataSize }: Required<PropsExtra>): string {
  const isLarge = dataSize === "lg"
  const styles: Style = {
    default: `${isLarge ? "w-full h-fit min-h-9 px-4 py-2 text-sm/4" : "w-full h-fit min-h-7.5 px-3 py-1.5 text-xs/3.5"}`,
    icon: `${isLarge ? "size-9 min-w-9 min-h-9 text-sm/4" : "size-7.5 min-w-7.5 min-h-7.5 text-xs/3.5"}`
  }
  return styles[dataBehavior]
}

export { styleVariant };