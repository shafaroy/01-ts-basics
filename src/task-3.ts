interface Product {
  id: number;
  title: string;
}

const usernames: string[] = ["alice", "bob", "charlie"];

const ratinhgs: number[] = [4.5, 3.8, 5];

const products: Product[] = [
   {id: 1, title: "Phone"}, 
   {id: 2, title: "Laptop"}
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratinhgs)}`);
console.log(`Products: ${JSON.stringify(products)}`);
