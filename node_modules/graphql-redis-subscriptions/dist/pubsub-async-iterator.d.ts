import { $$asyncIterator } from 'iterall';
import { PubSubEngine } from 'graphql-subscriptions';
export declare class PubSubAsyncIterator<T> implements AsyncIterator<T> {
    constructor(pubsub: PubSubEngine, eventNames: string | string[], options?: unknown);
    next(): Promise<IteratorResult<any, any>>;
    return(): Promise<{
        value: unknown;
        done: true;
    }>;
    throw(error: any): Promise<never>;
    [$$asyncIterator](): this;
    private pullQueue;
    private pushQueue;
    private eventsArray;
    private subscriptionIds;
    private listening;
    private pubsub;
    private options;
    private pushValue;
    private pullValue;
    private emptyQueue;
    private subscribeAll;
    private unsubscribeAll;
}
