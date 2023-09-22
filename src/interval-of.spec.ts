import { intervalOf } from './interval-of';

describe('IntervalOf', () => {
    it('should keep milliseconds', () => {
        const interval = intervalOf().add.ms(1000);
        expect(interval.in.ms).toEqual(1000);
    });

    it('should convert seconds to milliseconds internally', () => {
        const interval = intervalOf().add.seconds(2);
        expect(interval.in.ms).toEqual(2 * 1000);
    });

    it('should convert minutes to milliseconds internally', () => {
        const interval = intervalOf().add.minutes(2);
        expect(interval.in.ms).toEqual(2 * 60 * 1000);
    });

    it('should convert hours to milliseconds internally', () => {
        const interval = intervalOf().add.hours(2);
        expect(interval.in.ms).toEqual(2 * 60 * 60 * 1000);
    });

    it('should convert days to milliseconds internally', () => {
        const interval = intervalOf().add.days(2);
        expect(interval.in.ms).toEqual(2 * 24 * 60 * 60 * 1000);
    });

    it('should convert weeks to milliseconds internally', () => {
        const interval = intervalOf().add.weeks(2);
        expect(interval.in.ms).toEqual(2 * 7 * 24 * 60 * 60 * 1000);
    });

    it('should add 2 different intervals together', () => {
        const interval = intervalOf().add.ms(1000).seconds(1);
        expect(interval.in.ms).toEqual(2000);
    });

    it('should add 2 same intervals together', () => {
        const interval = intervalOf().add.seconds(2).seconds(1);
        expect(interval.in.ms).toEqual(3000);
    });

    it('should be able to be initialized from constructor', () => {
        const interval = intervalOf({ seconds: 2 });
        expect(interval.in.ms).toEqual(2 * 1000);
    });

    it('should be able to be mix chain syntax and constructor', () => {
        const interval = intervalOf({ seconds: 2 }).add.seconds(3);
        expect(interval.in.ms).toEqual(5 * 1000);
    });

    describe('sub', () => {
        it('should subtract ms', () => {
            const interval = intervalOf().sub.seconds(2);
            expect(interval.in.ms).toEqual(-2 * 1000);
        });
        it('should work together with "add"', () => {
            const interval = intervalOf().add.seconds(3).sub.seconds(2);
            expect(interval.in.ms).toEqual(1000);
        });
        it('should work constructor initialization', () => {
            const interval = intervalOf({ seconds: 2 }).sub.seconds(1);
            expect(interval.in.ms).toEqual(1000);
        });
    });
});
