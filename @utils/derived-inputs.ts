import type { PropsExtra, InputTextProp, InputCheckProp, SelectProp, TextAreaProp } from "../@types/inputs"

type IconConfig = PropsExtra["iconConfig"]

function styleDerived(props: InputTextProp | SelectProp | TextAreaProp) {
  const iconConfig = "iconConfig" in props ? props.iconConfig : undefined

  return {
    orientation: checkOrientation(iconConfig),
    padding: checkPadding(iconConfig),
    hint: checkHint(props.required, props.hintConfig),
  }
}

function checkRounded(type: InputCheckProp["type"]): string {
  return type === "checkbox" ? "rounded" : "rounded-full"
}

function checkPadding(iconConfig?: IconConfig): string {
  if (!iconConfig) return "px-2.5"
  return iconConfig.orientation === "right" ? "pr-5x7 pl-2.5" : "pl-5x7 pr-2.5"
}

function checkOrientation(iconConfig?: IconConfig): string {
  if (!iconConfig) return "left-0"
  return iconConfig.orientation === "right" ? "right-0" : "left-0"
}

function checkHint(required?: boolean, hintConfig?: PropsExtra["hintConfig"]) {
  if (required && hintConfig?.show === undefined) return true
  return hintConfig?.show ?? false
}

export {
  styleDerived,
  checkRounded,
}