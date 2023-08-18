import { observable} from 'mobx';



const BooksStore = () => {
  const words = observable([]);

//   const addBook = action((book) => {
//     books.push(book);
//   });

//   const removeBook = action((index) => {
//     books.splice(index, 1);
//   });

  return {
    words
  };
};

export default BooksStore;