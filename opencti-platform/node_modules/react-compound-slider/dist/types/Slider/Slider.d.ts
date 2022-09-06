import React, { PureComponent } from 'react';
import { SliderProps, SliderState } from './types';
import { HandleItem } from '../types';
export declare class Slider<T extends HTMLDivElement = HTMLDivElement> extends PureComponent<SliderProps, SliderState> {
    state: {
        step: number;
        values: never[];
        domain: number[];
        handles: HandleItem[];
        reversed: boolean;
        activeHandleID: string;
        valueToPerc: null;
        valueToStep: null;
        pixelToStep: null;
    };
    slider: React.RefObject<T>;
    static getDerivedStateFromProps(nextProps: SliderProps, prevState: SliderState): Partial<SliderState> | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    removeListeners(): void;
    onKeyDown: (e: KeyboardEvent, handleID: string) => void;
    onMouseDown: (e: MouseEvent, handleID: string) => void;
    onTouchStart: (e: TouchEvent, handleID: string) => void;
    onStart(e: MouseEvent | TouchEvent, handleID: string, isTouch: boolean): void;
    handleRailAndTrackClicks(e: MouseEvent | TouchEvent, isTouch: boolean): void;
    getEventData: (e: React.MouseEvent | React.TouchEvent, isTouch: boolean) => {
        value: any;
        percent: any;
    };
    addMouseEvents(): void;
    addTouchEvents(): void;
    onMouseMove: (e: MouseEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    submitUpdate(next: HandleItem[], callOnChange?: boolean): void;
    onMouseUp: () => void;
    onTouchEnd: () => void;
    render(): JSX.Element;
}
