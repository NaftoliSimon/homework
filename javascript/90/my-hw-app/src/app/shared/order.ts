import { Item } from "./item";
import { Person } from "./person";


export interface Order {
  person: Person;
  date: string;
  item: Item;
}
