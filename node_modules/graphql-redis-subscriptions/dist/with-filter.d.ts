export declare type FilterFn = (rootValue?: any, args?: any, context?: any, info?: any) => boolean;
export declare const withFilter: (asyncIteratorFn: () => AsyncIterator<any>, filterFn: FilterFn) => (rootValue: any, args: any, context: any, info: any) => AsyncIterator<any>;
