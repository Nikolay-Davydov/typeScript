import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

// test(' interfase', () => {
//   const buyable = new Buyable()
// })


test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('add cart Movies', () => {
    const cart = new Cart();
    const movie = new Movie(33, "Avengers", 2012, 'США', 'Avengers Assemble', 'Фантастика', '137 минут', 500);
    cart.add(movie);  
    expect(cart.items.length).toBe(1);
});

test('get total', () => {
    const cart = new Cart();
    const book1 = new Book(1, 'book1', 'author1', 33, 100);
    const book2 = new Book(2, 'book2', 'author2', 77, 90);
    const book3 = new Book(3, 'book3', 'author3', 100, 80);
    cart.add(book1);
    cart.add(book2);
    cart.add(book3);
    expect(cart.getTotal()).toBe(210);
});

test('get discout', () => {
    const cart = new Cart();
    const book1 = new Book(1, 'book1', 'author1', 23, 100);
    const book2 = new Book(2, 'book2', 'author2', 77, 90);
    const book3 = new Book(3, 'book3', 'author3', 100, 80);
    cart.add(book1);
    cart.add(book2);
    cart.add(book3);
    expect(cart.getDiscout(10)).toBe(180);
});

test('delete Id', () => {
    const cart = new Cart();
    const book1 = new Book(1, 'book1', 'author1', 23, 100);
    const book2 = new Book(2, 'book2', 'author2', 77, 90);
    const book3 = new Book(3, 'book3', 'author3', 100, 80);
    cart.add(book1);
    cart.add(book2);
    cart.add(book3);
    cart.deleteId(3);
    expect(cart.items.length).toBe(2);
});
