import { PeriodOf } from './period-of';

describe('Time Period', () => {
    it('should convert between days and hours', () => {
        const timePeriod = new PeriodOf().days(2);
        expect(timePeriod.in.hours).toEqual(48);
    });

    it('should convert between weeks and minutes', () => {
        const timePeriod = new PeriodOf().weeks(2);
        expect(timePeriod.in.minutes).toEqual(2 * 7 * 24 * 60);
    });

    it('should be immutable', () => {
        const timePeriod = new PeriodOf().minutes(2);
        timePeriod.hours(1);
        expect(timePeriod.in.minutes).toEqual(2);
    });

    it('should be convertable to different time entities', () => {
        const timePeriod = new PeriodOf().minutes(2);
        expect(timePeriod.in.minutes).toEqual(2);
        expect(timePeriod.in.seconds).toEqual(60 * 2);
    });
});
