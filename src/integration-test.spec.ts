import { IntervalOf } from './interval-of';

describe('Time interval', () => {
    it('should convert between days and hours', () => {
        const interval = new IntervalOf().add.days(2);
        expect(interval.in.hours).toEqual(48);
    });

    it('should convert between weeks and minutes', () => {
        const interval = new IntervalOf().add.weeks(2);
        expect(interval.in.minutes).toEqual(2 * 7 * 24 * 60);
    });

    it('should be immutable', () => {
        const interval = new IntervalOf().add.minutes(2);
        interval.hours(1);
        expect(interval.in.minutes).toEqual(2);
    });

    it('should be convertable to different time entities', () => {
        const interval = new IntervalOf().add.minutes(2);
        expect(interval.in.minutes).toEqual(2);
        expect(interval.in.seconds).toEqual(60 * 2);
    });
});
