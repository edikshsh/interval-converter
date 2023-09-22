import { IntervalConverter } from '../interval-converter';

export type Operation = {
    ms: (n: number) => Operation;
    seconds: (n: number) => Operation;
    minutes: (n: number) => Operation;
    hours: (n: number) => Operation;
    days: (n: number) => Operation;
    weeks: (n: number) => Operation;
    add: Operation;
    sub: Operation;
    in: IntervalConverter;
};
