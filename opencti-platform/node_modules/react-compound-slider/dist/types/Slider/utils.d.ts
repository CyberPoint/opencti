import React from 'react';
import { DiscreteScale } from '../scales/DiscreteScale';
import { HandleItem } from '../types';
export declare const prfx = "react-compound-slider:";
export declare function getSortByVal(reversed?: boolean): (a: HandleItem, b: HandleItem) => 1 | -1 | 0;
export declare function getUpdatedHandles(handles: HandleItem[], updateKey: string, updateValue: number, reversed?: boolean): HandleItem[];
export declare function getSliderDomain(slider: Element | null, vertical: boolean): number[];
export declare function isNotValidTouch({ type, touches, }: {
    type: string;
    touches: TouchEvent['touches'];
}): boolean;
export declare function getTouchPosition(vertical: boolean, e: React.TouchEvent | TouchEvent): number;
export declare function getHandles(values: readonly number[] | undefined, reversed: boolean, valueToStep: DiscreteScale, warn: boolean): {
    handles: {
        key: string;
        val: number;
    }[];
    changes: number;
};
