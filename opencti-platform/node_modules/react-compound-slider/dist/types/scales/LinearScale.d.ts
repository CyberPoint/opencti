import { Interpolator } from '../types';
export declare class LinearScale {
    interpolator: Interpolator | null;
    domain: number[];
    range: number[];
    constructor();
    createInterpolator(domain: number[], range: number[]): (x: number) => number;
    interpolateValue(a: number, b: number): (t: number) => number;
    deinterpolateValue(a: number, b: number): (x: number) => number;
    rescale(): this;
    getValue(x: number): number;
    setDomain(val: number[]): this;
    getDomain(): number[];
    setRange(val: number[]): this;
    getRange(): number[];
    getTicks(count: number): number[];
}
