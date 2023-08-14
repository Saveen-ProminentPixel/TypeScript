import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumberCollection([10,3,-3,9,8,16,-2,2,1,-4,12])
numberCollection.sort();
console.log(numberCollection.data);

// const sorter1 = new Sorter(numberCollection);
// sorter1.sort();
// console.log(numberCollection.data);

const charactersCollection = new CharactersCollection("XaaybYKdhR");
charactersCollection.sort();
console.log(charactersCollection.data);
// const sorter2 = new Sorter(charactersCollection);
// sorter2.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(-10);
linkedList.add(32);
linkedList.add(15);
linkedList.add(0);
linkedList.add(7);

linkedList.sort();
// const sorter3 = new Sorter(linkedList);
// sorter3.sort();
linkedList.print();


