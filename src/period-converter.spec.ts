import { TimeUnit } from './enums/time-unit.enum';
import { PeriodConverter } from './period-converter';

describe('PeriodConverter', () => {
    it('should convert milliseconds to milliseconds', () => {
        const converter = new PeriodConverter(1000);
        expect(converter.ms).toEqual(1000);
    });

    it('should convert milliseconds to seconds', () => {
        const converter = new PeriodConverter(2 * 1000);
        expect(converter.seconds).toEqual(2);
    });

    it('should convert milliseconds to minutes', () => {
        const converter = new PeriodConverter(2 * 60 * 1000);
        expect(converter.minutes).toEqual(2);
    });

    it('should convert milliseconds to hours', () => {
        const converter = new PeriodConverter(2 * 60 * 60 * 1000);
        expect(converter.hours).toEqual(2);
    });

    it('should convert milliseconds to days', () => {
        const converter = new PeriodConverter(2 * 24 * 60 * 60 * 1000);
        expect(converter.days).toEqual(2);
    });

    it('should convert milliseconds to weeks', () => {
        const converter = new PeriodConverter(2 * 7 * 24 * 60 * 60 * 1000);
        expect(converter.weeks).toEqual(2);
    });

    it('should convert milliseconds to minutes using time unit', () => {
        const converter = new PeriodConverter(2 * 60 * 1000);
        expect(converter.unit(TimeUnit.MINUTE)).toEqual(2);
    });
});
