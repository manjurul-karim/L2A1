## 1. What are some differences between interfaces and types in TypeScript?

we use type and interface for using given shape of data type. its give us more clean code and safety.though both we can use for Data type but there are few difference between them.

**type:** we can declare data start with keyword type. here are examples

`type User1={
    name: string;
    age: number;
}`

if we want to extend any property we can do this

`type UserWithEmail = User1 & {Email: string}`

now we can use both

`const user1 : User1 ={
    name: '44445445455444545abce',
    age: 25,
};`

if we want to use email then we can use

`const user1:UserWithEmail ={
    name: 'abcd',
    age: 25,
    email: 'email@email.com'
}`

we can do this also with interface and its start with interface keyword.

exp:

`interface User2{
    name: string,
    age: number
}`

if we want to extend any property then we can do this two way.

1- with extends
`interface UserWithEmail extends User2{
    email: string
}`

2- we can add any property under User2 and its merged automatically
` interface User2{
    email: string
}`

now if we declared a variable and use User2 then its merged it automatically

`const use2:User2 ={
    name ="abdc",
    age: 25,
    email: "email@email.com"
}`

we describe type and interface now we learn some differences :

|                                       type                                        |                                                       interface                                                       |
| :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------: |
|      can be used types like object, primitive, union,intersection and tuple       |                                                    only for object                                                    |
| type can't support same name multiple times.we can declare its same name one time | interface can be merged with same name we can declare same name multiply times and typescript automatically merged it |
|                    type and intersection (&) can be extensions                    |                                 we can add one or multiple interface by using extends                                 |

<br>
<br>
<br>

## 2. Provide an example of using union and intersection types in TypeScript.

<p> Union and intersection are two powerful features in typescript.We can determine the type of a variable or object more easily and accurately. its separate type by |  symbol.</p>

**union type :** <span>union type is a type where a variable or function` has many type and can be any of them </span>
lets see exp:

```
const id = string | number ;

if we assign string or number its show us valid result but if we assign boolean its show invalid result

```

Another example:

```typescript
type Status = "done" | "on going" | "up coming";

function getStatus(status: Status): string {
  if (status === "done") {
    return "Task is completed.";
  } else if (status === "on going") {
    return "Task is in progress.";
  } else {
    return "Task is planned for future.";
  }
```

here status can be one of them from done,on going, up coming.

**Intersection type:** Intersection type is a type where two or more type together and all properties must be present and its assign with & symbol.

Example:

```typescript
type Person = {
  name: string;
  age: number;
};

type Identity = {
  id: string | number; // this is also union
  department: string;
};

type EmployeeDetails = Person & Identity;

const employee: EmployeeDetails = {
  name: "abcd",
  age: 30,
  id: 1234,
  department: "HR",
};
```

Here EmployeeDetails is a type of intersection where its contain Person and Identity. we see name,age,id and department property into employee object.
