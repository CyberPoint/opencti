export declare class DiscreteScale {
    step: number;
    domain: number[];
    range: number[];
    setDomain: (val: number[]) => this;
    setRange: (val: number[]) => this;
    setStep: (val: number) => this;
    getValue: (x: number) => number;
}
