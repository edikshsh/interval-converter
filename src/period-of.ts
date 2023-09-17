import {
    DAYS_IN_WEEK,
    HOURS_IN_DAY,
    MINUTES_IN_HOUR,
    SECONDS_IN_MINUTE,
    MILLISECONDS_IN_SECOND,
} from './enums/time-multiplier.const';
import { PeriodOfPayload } from './types/Period-of-payload.type';
import { PeriodConverter } from './period-converter';

export class PeriodOf {
    private msCount = 0;

    constructor(payload?: Partial<PeriodOfPayload>) {
        const days = (payload?.weeks || 0) * DAYS_IN_WEEK + (payload?.days || 0);
        const hours = days * HOURS_IN_DAY + (payload?.hours || 0);
        const minutes = hours * MINUTES_IN_HOUR + (payload?.minutes || 0);
        const seconds = minutes * SECONDS_IN_MINUTE + (payload?.seconds || 0);
        this.msCount = seconds * MILLISECONDS_IN_SECOND + (payload?.ms || 0);
    }

    ms(ms: number): PeriodOf {
        return new PeriodOf({ ms: this.msCount + ms });
    }

    seconds(seconds: number): PeriodOf {
        return this.ms(seconds * MILLISECONDS_IN_SECOND);
    }

    minutes(minutes: number): PeriodOf {
        return this.seconds(minutes * SECONDS_IN_MINUTE);
    }

    hours(hours: number): PeriodOf {
        return this.minutes(hours * MINUTES_IN_HOUR);
    }

    days(days: number): PeriodOf {
        return this.hours(days * HOURS_IN_DAY);
    }

    weeks(weeks: number): PeriodOf {
        return this.days(weeks * DAYS_IN_WEEK);
    }

    get in(): PeriodConverter {
        return new PeriodConverter(this.msCount);
    }
}
