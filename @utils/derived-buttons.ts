import type { ButtonProp } from "../@types/button";

type Behavior = ButtonProp["behavior"];

function checkBehavior(props?: Behavior): string {
  const defaultValue = "w-full min-h-5x7 h-fit px-4";
  return props ? (props === 'normal' ? defaultValue : "size-5x7") : defaultValue;
}

export { checkBehavior };