import {
    DAYS_IN_WEEK,
    HOURS_IN_DAY,
    MINUTES_IN_HOUR,
    SECONDS_IN_MINUTE,
    MILLISECONDS_IN_SECOND,
} from './enums/time-multiplier.const';
import { TimeUnit } from './enums/time-unit.enum';

export class PeriodConverter {
    timeUnitMap: Record<TimeUnit, number> = {
        ms: this.ms,
        second: this.seconds,
        minute: this.minutes,
        hour: this.hours,
        day: this.days,
        week: this.weeks,
    };

    constructor(private _ms: number) {}

    unit(timeUnit: TimeUnit): number {
        return this.timeUnitMap[timeUnit];
    }

    get ms(): number {
        return Math.floor(this._ms);
    }
    get seconds(): number {
        return this.ms / MILLISECONDS_IN_SECOND;
    }
    get minutes(): number {
        return this.seconds / SECONDS_IN_MINUTE;
    }
    get hours(): number {
        return this.minutes / MINUTES_IN_HOUR;
    }
    get days(): number {
        return this.hours / HOURS_IN_DAY;
    }
    get weeks(): number {
        return this.days / DAYS_IN_WEEK;
    }
}
