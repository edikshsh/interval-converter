```
    console.log(new PeriodOf({ ms: 1 }).in.ms); // 1

    console.log(new PeriodOf({ seconds: 1 }).in.ms); // 1000

    console.log(new PeriodOf().seconds(1).in.ms); // 1000

    console.log(new PeriodOf({ seconds: 1 }).seconds(1).in.ms); // 2000

    console.log(new PeriodOf({ seconds: 1 }).in.unit(TimeUnit.MS)); // 1000

    console.log(new PeriodOf({ seconds: 1, minutes: 2 }).in.ms); // 121000

    console.log(new PeriodOf({ seconds: 1, minutes: 2 }).in.seconds); // 121
```
