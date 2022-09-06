import React from "react";
import { Props } from "./Icon";
export default function TrashIcon({ open, ...rest }: Props & {
    open?: boolean;
}): React.ReactElement<React.ComponentProps<any>, any>;
