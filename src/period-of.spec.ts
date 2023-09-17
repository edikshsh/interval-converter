import { PeriodOf } from './period-of';

describe('PeriodOf', () => {
    it('should keep milliseconds', () => {
        const timePeriod = new PeriodOf().ms(1000);
        expect(timePeriod['msCount']).toEqual(1000);
    });

    it('should convert seconds to milliseconds internally', () => {
        const timePeriod = new PeriodOf().seconds(2);
        expect(timePeriod['msCount']).toEqual(2 * 1000);
    });

    it('should convert minutes to milliseconds internally', () => {
        const timePeriod = new PeriodOf().minutes(2);
        expect(timePeriod['msCount']).toEqual(2 * 60 * 1000);
    });

    it('should convert hours to milliseconds internally', () => {
        const timePeriod = new PeriodOf().hours(2);
        expect(timePeriod['msCount']).toEqual(2 * 60 * 60 * 1000);
    });

    it('should convert days to milliseconds internally', () => {
        const timePeriod = new PeriodOf().days(2);
        expect(timePeriod['msCount']).toEqual(2 * 24 * 60 * 60 * 1000);
    });

    it('should convert weeks to milliseconds internally', () => {
        const timePeriod = new PeriodOf().weeks(2);
        expect(timePeriod['msCount']).toEqual(2 * 7 * 24 * 60 * 60 * 1000);
    });

    it('should add 2 different periods together', () => {
        const timePeriod = new PeriodOf().ms(1000).seconds(1);
        expect(timePeriod['msCount']).toEqual(2000);
    });

    it('should add 2 same periods together', () => {
        const timePeriod = new PeriodOf().seconds(2).seconds(1);
        expect(timePeriod['msCount']).toEqual(3000);
    });

    it('should be able to be initialized from constructor', () => {
        const timePeriod = new PeriodOf({ seconds: 2 });
        expect(timePeriod['msCount']).toEqual(2 * 1000);
    });

    it('should be able to be mix chain syntax and constructor', () => {
        const timePeriod = new PeriodOf({ seconds: 2 }).seconds(3);
        expect(timePeriod['msCount']).toEqual(5 * 1000);
    });
});
