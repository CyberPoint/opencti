import React from "react";
import { Props } from "./Icon";
export default function CollectionIcon({ expanded, ...rest }: Props & {
    expanded?: boolean;
}): React.ReactElement<React.ComponentProps<any>, any>;
