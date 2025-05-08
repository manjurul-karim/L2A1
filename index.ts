const formatString = (input: string, toUpper?: boolean): string =>
  toUpper === false ? input.toLowerCase() : input.toUpperCase()

// console.log(formatString("hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));

function filterByRating(
  items: { title: string; rating: number }[],
  minRating: number = 4
): { title: string; rating: number }[] {
  const filteredItems: { title: string; rating: number }[] = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].rating >= minRating) {
      filteredItems.push(items[i]);
    }
  }

  return filteredItems;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];



  // console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const array of arrays) {
    result.push(...array);
  }
  return result;
}

// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
    
  }

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");

// console.log(myCar.getInfo());
// console.log(myCar.getModel());

function processValue(value: string | number): number {
  let result: number;

  if (typeof value === "string") {
    result = value.length;
  } else {
    result = value * 2;
  }

  return result;
}

// console.log(processValue("hello"));
// console.log(processValue(10));

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let mostExpensive = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensive.price) {
      mostExpensive = products[i];
    }
  }

  return mostExpensive;
}


const products = [
  { name: "Bag", price: 50 },
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
];

// console.log(getMostExpensiveProduct(products));

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

//   console.log(getDayType(Day.Monday));
//   console.log(getDayType(Day.Sunday));

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    return Promise.reject("Error: Negative number not allowed");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}

// squareAsync(4).then(console.log);
// squareAsync(-3).catch(console.error);
