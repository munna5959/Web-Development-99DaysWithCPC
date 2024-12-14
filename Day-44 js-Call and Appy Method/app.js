
const greenLine = {
  bus: 'Green Line Paribahan',
  bCode: 'GL',
  ticket: [],
  book(setNumber, name) {
    console.log(
      `${name} booked a seat on ${this.bus} ticket ${this.bCode}-${setNumber}`
    );
    this.ticket.push({ ticketInfo: `${this.bCode}-${setNumber}`, name });
  },
};
greenLine.book('M1', 'Munna Hosain');
greenLine.book('M2', 'Nayeem Chowdhury');
console.log(greenLine);

const shohagh = {
  bus: 'Shohagh Paribahan',
  bCode: 'SH',
  ticket: [],
};

const book = greenLine.book;


book.call(shohagh, 'F1', 'Omar Faruqe');
book.call(shohagh, 'F2', 'Muhtasim Fuad');
book.call(greenLine, 'F3', 'Humayra Kabir');
console.log(shohagh);

const hanif = {
  bus: 'Hanif Paribahan',
  bCode: 'HN',
  ticket: [],
};

book.call(hanif, 'L1', 'Nayeem CHowdhury');

// Apply Method

const ticketData = ['L2', 'Omar Faruqe'];
book.apply(greenLine, ticketData);
book.apply(hanif, ['A2', 'Munna Hosain']);
