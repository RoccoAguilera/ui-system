import type { ReactNode, ComponentProps } from "react"

type ComponentGeneric<T extends keyof JSX.IntrinsicElements, H extends string = "className" | "children"> = Omit<ComponentProps<T>, H>;

type IconConfig = {
  icon: ReactNode;
  orientation?: "left" | "right";
}
type HintConfig = {
  show?: boolean;
  text?: string;
}
type PropsExtra = {
  label?: string;
  description?: string;
  iconConfig?: IconConfig;
  hintConfig?: HintConfig;
}
type LabelProps = {
  label: string;
  hint?: boolean;
  hintText?: HintConfig["text"];
}
type WrapperProps = {
  padding: string;
  orientation: string;
  icon?: IconConfig["icon"];
}

type PropsGeneric = Omit<PropsExtra, "description">
type PropsCheck = Pick<PropsExtra, "label" | "description">
type PropsTextArea = Omit<PropsExtra, "iconConfig" | "description">

type TextType = { type: "text" | "number" | "email" | "url" | "tel" | "password" | "search" | "datetime-local" | "date" | "month" | "week" | "time" }
type CheckType = { type: "checkbox" | "radio" }

type InputTextProp = ComponentGeneric<"input"> & PropsGeneric & TextType
type InputCheckProp = ComponentGeneric<"input"> & PropsCheck & CheckType
type SelectProp = ComponentGeneric<"select", "className"> & PropsGeneric
type TextAreaProp = ComponentGeneric<"textarea"> & PropsTextArea

export type {
  PropsExtra,
  LabelProps,
  WrapperProps,
  InputTextProp,
  InputCheckProp,
  TextAreaProp,
  SelectProp,
}