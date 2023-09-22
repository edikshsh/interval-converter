import {
    DAYS_IN_WEEK,
    HOURS_IN_DAY,
    MINUTES_IN_HOUR,
    SECONDS_IN_MINUTE,
    MILLISECONDS_IN_SECOND,
} from './enums/time-multiplier.const';
import { IntervalOfPayload as IntervalOfPayload } from './types/interval-of-payload.type';
import { IntervalConverter } from './interval-converter';
import { Operation } from './types/operation.type';

export function intervalOf(payload?: Partial<IntervalOfPayload>) {
    return new IntervalOf(payload);
}

export class IntervalOf {
    private msCount = 0;

    constructor(payload?: Partial<IntervalOfPayload>) {
        const days = (payload?.weeks || 0) * DAYS_IN_WEEK + (payload?.days || 0);
        const hours = days * HOURS_IN_DAY + (payload?.hours || 0);
        const minutes = hours * MINUTES_IN_HOUR + (payload?.minutes || 0);
        const seconds = minutes * SECONDS_IN_MINUTE + (payload?.seconds || 0);
        this.msCount = seconds * MILLISECONDS_IN_SECOND + (payload?.ms || 0);
    }

    private getChainObj(multiplier: number): Operation {
        const chainObj = {
            ms: (n: number) => this.addMs(multiplier * n).getChainObj(multiplier),
            seconds: (n: number) => this.addSeconds(multiplier * n).getChainObj(multiplier),
            minutes: (n: number) => this.addMinutes(multiplier * n).getChainObj(multiplier),
            hours: (n: number) => this.addHours(multiplier * n).getChainObj(multiplier),
            days: (n: number) => this.addDays(multiplier * n).getChainObj(multiplier),
            weeks: (n: number) => this.addWeeks(multiplier * n).getChainObj(multiplier),
        };
        Object.defineProperties(chainObj, {
            add: { get: () => this.getChainObj(1) },
            sub: { get: () => this.getChainObj(-1) },
            in: { get: () => this.in },
        });
        return chainObj as Operation;
    }

    get add(): Operation {
        return this.getChainObj(1);
    }

    get sub(): Operation {
        return this.getChainObj(-1);
    }

    get in(): IntervalConverter {
        return new IntervalConverter(this.msCount);
    }

    private addMs(ms: number): IntervalOf {
        return new IntervalOf({ ms: this.msCount + ms });
    }

    private addSeconds(seconds: number): IntervalOf {
        return this.addMs(seconds * MILLISECONDS_IN_SECOND);
    }

    private addMinutes(minutes: number): IntervalOf {
        return this.addSeconds(minutes * SECONDS_IN_MINUTE);
    }

    private addHours(hours: number): IntervalOf {
        return this.addMinutes(hours * MINUTES_IN_HOUR);
    }

    private addDays(days: number): IntervalOf {
        return this.addHours(days * HOURS_IN_DAY);
    }

    private addWeeks(weeks: number): IntervalOf {
        return this.addDays(weeks * DAYS_IN_WEEK);
    }
}
