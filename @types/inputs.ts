import type { ReactNode, ComponentProps, HTMLInputTypeAttribute } from "react"

type ComponentGeneric<T extends keyof JSX.IntrinsicElements, H extends string = never> = Omit<ComponentProps<T>, H>;

type DataIcon = { icon: ReactNode; orientation?: "left" | "right"; }
type DataHint = { show?: boolean; text?: string; }
type DataLabel = string
type PropsExtra = Partial<{
  dataSize: "sm" | "lg";
  dataLabel: DataLabel;
  dataIcon: DataIcon;
  dataHint: DataHint;
}>

type PropsGeneric = PropsExtra
type PropsCheck = Omit<PropsExtra, "dataIcon" | "dataHint" | "dataSize">
type PropsTextArea = Omit<PropsExtra, "dataIcon">

type TextType = { type: Extract<HTMLInputTypeAttribute, "text" | "number" | "email" | "url" | "tel" | "password" | "search" | "datetime-local" | "date" | "month" | "week" | "time"> };
type CheckType = { type: Extract<HTMLInputTypeAttribute, "checkbox" | "radio"> };

type InputTextProp = ComponentGeneric<"input"> & PropsGeneric & TextType
type InputCheckProp = ComponentGeneric<"input"> & PropsCheck & CheckType
type SelectProp = ComponentGeneric<"select", "className"> & PropsGeneric
type TextAreaProp = ComponentGeneric<"textarea"> & PropsTextArea

export type {
  PropsExtra,
  InputTextProp,
  InputCheckProp,
  TextAreaProp,
  SelectProp,
  DataIcon,
  DataHint,
  DataLabel,
  TextType,
  CheckType
}