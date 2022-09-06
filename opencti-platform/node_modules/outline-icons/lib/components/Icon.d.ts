import * as React from "react";
export declare type Props = {
    className?: string;
    light?: boolean;
    black?: boolean;
    color?: string;
    size?: number;
    onClick?: (ev: React.MouseEvent<SVGElement>) => void;
    theme?: Record<string, any>;
};
declare type BaseProps = {
    children?: React.ReactNode;
};
declare function Icon({ children, className, onClick, theme, ...rest }: Props & BaseProps): React.ReactElement<React.ComponentProps<any>, any>;
export default Icon;
