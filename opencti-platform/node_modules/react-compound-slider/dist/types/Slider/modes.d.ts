import { HandleItem } from '../types';
export declare function mode1(_: HandleItem[], next: HandleItem[]): HandleItem[];
export declare function mode2(curr: HandleItem[], next: HandleItem[]): HandleItem[];
export declare function mode3(curr: HandleItem[], next: HandleItem[], step: number, reversed: boolean, getValue: (x: number) => number): HandleItem[];
