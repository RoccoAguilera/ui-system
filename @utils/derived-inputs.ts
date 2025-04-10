import type {
  InputTextProp,
  InputCheckProp,
  TextAreaProp,
  SelectProp,
  DataHint,
} from "../@types/inputs";

function styleVariant(props: InputTextProp | SelectProp | TextAreaProp) {
  const { dataSize } = props;
  const dataIcon = "dataIcon" in props ? props.dataIcon : undefined;

  const isLarge = dataSize === "lg";
  const styles = {
    general: isLarge ? "text-sm/4" : "text-xs/3.5",
    label: isLarge ? "leading-4.5" : "leading-4",
    hint: isLarge ? "text-xs/4.5" : "text-[10px]/4",
    input: `${isLarge ? "min-h-9 py-[9px]" : "min-h-7.5 py-[7px]"} ${
      !dataIcon
        ? "px-2.5"
        : dataIcon.orientation === "right"
        ? isLarge
          ? "pr-9 pl-2.5"
          : "pr-7.5 pl-2.5"
        : isLarge
        ? "pl-9 pr-2.5"
        : "pl-7.5 pr-2.5"
    }`,
    icon: `${isLarge ? "size-9" : "size-7.5"} ${
      !dataIcon
        ? "left-0"
        : dataIcon.orientation === "right"
        ? "right-0"
        : "left-0"
    }`,
  };

  return styles;
}

function checkHint(required?: boolean, dataHint?: DataHint): boolean {
  return required && dataHint?.show === undefined ? true : dataHint?.show ?? false;
}

function checkRounded(type: InputCheckProp["type"]): string {
  return type === "checkbox" ? "rounded" : "rounded-full";
}

export { styleVariant, checkHint, checkRounded };