import { MouseEvent, KeyboardEvent, TouchEvent } from 'react';
export interface SliderItem {
    id: string;
    value: number;
    percent: number;
}
export declare type HandleItem = {
    key: string;
    val: number;
};
export interface EventData {
    value: number;
    percent: number;
}
export declare type EmitKeyboard = (e: KeyboardEvent<Element>, id?: string) => void;
export declare type EmitMouse = (e: MouseEvent<Element>, id?: string) => void;
export declare type EmitTouch = (e: TouchEvent<Element>, id?: string) => void;
export declare type GetEventData = (e: React.SyntheticEvent | Event) => EventData;
export declare type OtherProps = {
    [key: string]: any;
};
export declare type Interpolator = (x: number) => number;
export declare type CustomMode = (curr: HandleItem[], next: HandleItem[], step: number, reversed: boolean, getValue: (x: number) => number) => HandleItem[];
