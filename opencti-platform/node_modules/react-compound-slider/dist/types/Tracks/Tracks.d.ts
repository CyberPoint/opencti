import React, { Component } from 'react';
import { TracksProps } from './types';
import { OtherProps } from '../types';
export declare class Tracks extends Component<TracksProps> {
    getTrackProps: (props?: OtherProps | undefined) => {
        onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
        onTouchStart: (e: React.TouchEvent<Element>) => void;
    };
    render(): string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactPortal | null | undefined;
}
