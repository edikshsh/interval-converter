```typescript
console.log(intervalOf({ ms: 1 }).in.ms); // 1

console.log(intervalOf({ seconds: 1 }).in.ms); // 1000

console.log(intervalOf().add.seconds(1).in.ms); // 1000

console.log(intervalOf({ seconds: 1 }).add.seconds(1).in.ms); // 2000

console.log(intervalOf({ seconds: 1 }).sub.ms(500).in.ms); // 500

console.log(intervalOf({ seconds: 1 }).add.seconds(1).seconds(1).in.ms); // 3000

console.log(intervalOf({ seconds: 1 }).in.unit(TimeUnit.MS)); // 1000

console.log(intervalOf({ seconds: 1, minutes: 2 }).in.ms); // 121000

console.log(intervalOf({ seconds: 1, minutes: 2 }).in.seconds); // 121
```
