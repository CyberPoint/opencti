import React from "react";
import { Props } from "./Icon";
export default function CheckboxIcon({ checked, ...rest }: Props & {
    checked: boolean;
}): React.ReactElement<React.ComponentProps<any>, any>;
