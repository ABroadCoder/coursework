const books = [
    {
      title: 'Algorithms',
      author: ['Robert Sedgewick', 'Kevin Wayne'],
      publisher: 'Addison-Wesley Professional',
      publicationDate: '2011-03-24',
      edition: 4,
      keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
      pages: 976,
      format: 'hardcover',
      ISBN: '9780321573513',
      language: 'English',
      programmingLanguage: 'Java',
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.41,
          ratingsCount: 1733,
          reviewsCount: 63,
          fiveStarRatingCount: 976,
          oneStarRatingCount: 13
        }
      },
      highlighted: true
    },
    {
      title: 'Structure and Interpretation of Computer Programs',
      author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
      publisher: 'The MIT Press',
      publicationDate: '2022-04-12',
      edition: 2,
      keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
      pages: 640,
      format: 'paperback',
      ISBN: '9780262543231',
      language: 'English',
      programmingLanguage: 'JavaScript',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.36,
          ratingsCount: 14,
          reviewsCount: 3,
          fiveStarRatingCount: 8,
          oneStarRatingCount: 0
        }
      },
      highlighted: true
    },
    {
      title: 'Computer Systems: A Programmer\'s Perspective',
      author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
      publisher: 'Prentice Hall',
      publicationDate: '2002-01-01',
      edition: 1,
      keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
      pages: 978,
      format: 'hardcover',
      ISBN: '9780130340740',
      language: 'English',
      programmingLanguage: 'C',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 1010,
          reviewsCount: 57,
          fiveStarRatingCount: 638,
          oneStarRatingCount: 16
        }
      },
      highlighted: true
    },
    {
      title: 'Operating System Concepts',
      author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
      publisher: 'John Wiley & Sons',
      publicationDate: '2004-12-14',
      edition: 10,
      keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
      pages: 921,
      format: 'hardcover',
      ISBN: '9780471694663',
      language: 'English',
      programmingLanguage: 'C, Java',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 3.9,
          ratingsCount: 2131,
          reviewsCount: 114,
          fiveStarRatingCount: 728,
          oneStarRatingCount: 65
        }
      }
    },
    {
      title: 'Engineering Mathematics',
      author: ['K.A. Stroud', 'Dexter J. Booth'],
      publisher: 'Palgrave',
      publicationDate: '2007-01-01',
      edition: 14,
      keywords: ['mathematics', 'engineering'],
      pages: 1288,
      format: 'paperback',
      ISBN: '9781403942463',
      language: 'English',
      programmingLanguage: null,
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.35,
          ratingsCount: 370,
          reviewsCount: 18,
          fiveStarRatingCount: 211,
          oneStarRatingCount: 6
        }
      },
      highlighted: true
    },
    {
      title: 'The Personal MBA: Master the Art of Business',
      author: 'Josh Kaufman',
      publisher: 'Portfolio',
      publicationDate: '2010-12-30',
      keywords: ['business'],
      pages: 416,
      format: 'hardcover',
      ISBN: '9781591843528',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.11,
          ratingsCount: 40119,
          reviewsCount: 1351,
          fiveStarRatingCount: 18033,
          oneStarRatingCount: 1090
        }
      }
    },
    {
      title: 'Crafting Interpreters',
      author: 'Robert Nystrom',
      publisher: 'Genever Benning',
      publicationDate: '2021-07-28',
      keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
      pages: 865,
      format: 'paperback',
      ISBN: '9780990582939',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.7,
          ratingsCount: 253,
          reviewsCount: 23,
          fiveStarRatingCount: 193,
          oneStarRatingCount: 0
        }
      }
    },
    {
      title: 'Deep Work: Rules for Focused Success in a Distracted World',
      author: 'Cal Newport',
      publisher: 'Grand Central Publishing',
      publicationDate: '2016-01-05',
      edition: 1,
      keywords: ['work', 'focus', 'personal development', 'business'],
      pages: 296,
      format: 'hardcover',
      ISBN: '9781455586691',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.19,
          ratingsCount: 144584,
          reviewsCount: 11598,
          fiveStarRatingCount: 63405,
          oneStarRatingCount: 1808
        }
      },
      highlighted: true
    }
  ];



  /*

// Destructuring Arrays
//   1.1
  const [firstBook, secondBook] = books;
  console.log(firstBook);
  console.log(secondBook);

//   1.2
const [ , , thirdBook] = books;
console.log(thirdBook);

//   1.3
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

// 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings=0, oneStarRatings=0,threeStarRatings=0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);



// Destructuring Objects
// 2.1
const {title, author, ISBN} = books[0];
console.log(title, author, ISBN);

// 2.2
const {keywords: tags} = books[0];
console.log(tags);

// 2.3
const {language, programmingLanguage='unknown'} = books[6];
console.log(language, programmingLanguage);

// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({title: bookTitle, author: bookAuthor} = books[0]);

// 2.5
const {thirdParty: {goodreads: {rating: bookRating}}} = books[0];
console.log(bookRating);

// 2.6
const printBookInfo = function({title, author, year='year unknown'}) {
    console.log(`"${title} by ${author}, ${year}"`);
};
printBookInfo({title: 'Algorithms', author: ['Robert Sedgewick', 'Kevin Wayne'],});

// The Spread Operator

// 3.1
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

// 3.2
function spellWord(input) {
    console.log(...input);
}
spellWord('JavaScript');


// 4.1
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword);
console.log(rest);

// 4.2
const 
{publisher: bookPublisher, ...restOfTheBook} = books[1];
console.log(bookPublisher);
console.log(restOfTheBook);

// 4.3
const printBookAuthorsCount = function(title, ...authors) {
    console.log(`"The book "${title}" has ${authors.length} authors"`);
};

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// Short-circuiting (&& and ||)
// 5.1
// if/else method
const hasExamplesInJava = function(bookObject) {
    if (bookObject.programmingLanguage === 'Java') {
        console.log(true);
    } else {
        console.log('no data available');
    }
};

hasExamplesInJava(books[1]);

// ternary operator method
const hasExamplesInJavaTernary = function(bookObject) {
    bookObject.programmingLanguage === 'Java' ? console.log(true) : console.log('no data available');
};

hasExamplesInJavaTernary(books[1]);

// logical operator short-circuiting method
const hasExamplesInJavaShort = function(bookObject) {
    console.log(bookObject.programmingLanguage || 'no data available');
};

hasExamplesInJavaShort(books[0]);

// 5.2
for (let i = 0; i < books.length; i++) {
    console.log(books[i].onlineContent && `"${books[i].title}" provides online content`);
};
console.log(books.length);

// The Nullish Coalescing Operator (??)
// 6.1
for (let i=0; i<books.length; i++) {
    console.log(books[i].onlineContent ?? `${books[i].title} provides no data about its online content`);
};


// Logical Assignments Operators
// 7.1
for (i = 1; i < books.length; i++) {
    books[i].edition ||= 1;
};

console.log(books);

// 7.2
for (i = 1; i < books.length; i++) {
    books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
};


// For-of Loop
// 8.1
let pageSum = 0;
for (const volume of books) {
  pageSum += volume.pages;
};

console.log(pageSum);

// 8.2
// const arr = ['a', 'b', 'c'];
// const str = 'abc';

// console.log(typeof(arr), typeof(str));

// console.log(typeof(books[5].author));

const allAuthors = [];

for (volume of books) {
  if (typeof(volume.author) === 'string') {
    allAuthors.push(volume.author);
  } else if (typeof (volume.author) === 'object') {
    allAuthors.push(...volume.author);
  }
};

console.log(allAuthors);

// 8.3

for (const [i, el] of allAuthors.entries()) {
  console.log(`${i + 1}. ${el}`);
};

// Enhanced Object Literals
// 9.1

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

console.log(newBook);

// 9.2
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

console.log(newBook2);


// Optional Chaining (?.)
// 10.1
const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
};

function getFirstKeyword(book) {
  console.log(book.keywords?.[0]);
};

getFirstKeyword(books[0]);
getFirstKeyword(newBook2);

// Looping Objects: Object Keys, Values and Entries
// 11.1
const entries = [];
for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}

console.log(entries);

// 11.2
for(const [index, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
  entries[index].push(value);
}

// 11.3
// console.log(Object.entries(books[0].thirdParty.goodreads));
const entries2 = Object.entries(books[0].thirdParty.goodreads);

// 11.4
console.log(entries2);


// Sets
// 12.1
const allKeywords = [];
for(let i=0; i<books.length; i++) {
  allKeywords.push(...books[i].keywords);
}

// 12.2
const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

// console.log(allKeywords);
// console.log(allKeywords.length);
// console.log(allKeywords[16]);

// 12.3
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
// console.log(uniqueKeywords);

// 12.4
uniqueKeywords.delete('business');
// console.log(uniqueKeywords);

// 12.5
uniqueKeywordsArr = [];
uniqueKeywordsArr.push(...uniqueKeywords);
console.log(uniqueKeywordsArr);

// 12.6
uniqueKeywords.clear();
console.log(uniqueKeywords);


// Maps: Fundamentals
// 13.1
const arr = [['title', 'Clean Code'], ['author', 'Robert C. Martin']];
const bookMap = new Map(arr);
console.log(bookMap);

// 13.2
bookMap.set('pages', 464);
console.log(bookMap);

// 13.3
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// 13.4
console.log(bookMap.size);

// 13.5
if (bookMap.has('author')) console.log('The author of the book is known');

// Maps: Iteration
// 14.1
const firstBookMap = new Map(Object.entries(books[0]));
// console.log(Object.entries(books[0]));
console.log(firstBookMap);

// 14.2
for (const [key, value] of firstBookMap) {
  if(typeof(value) === 'number') console.log(key);
}

// Working with Strings #1

// 15.1
console.log(books[0].ISBN[6], books[0].ISBN[4], books[0].ISBN[9], books[0].ISBN[8]);

// 15.2
const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

// 15.3
console.log(quote.slice(-6));
// OR
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// 15.4
function isContributor(authorName) {
  console.log(authorName.includes('(Contributor)'));
}

isContributor('ABC (Contributor)');


// 16.1
function normalizeName(originalName) {
  const lowerName = originalName.toLowerCase();
  const noContributorName = lowerName.replace('(Contributor)', '');
  const trimmedName = noContributorName.trim();
  const firstName = trimmedName.slice(0, trimmedName.indexOf(' '));
  const lastName = trimmedName.slice(trimmedName.indexOf(' ') + 1);
  const capFirstName = firstName[0].toUpperCase() + firstName.slice(1);
  const capLastName = lastName[0].toUpperCase() + lastName.slice(1);

  console.log(capFirstName + ' ' + capLastName);
}

// 16.2
const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(newBookTitle);

// 16.3
function logBookTheme(originalBookTitle) {
  originalBookTitle = originalBookTitle.toLowerCase();
  if (originalBookTitle.startsWith('computer')) {
    console.log('This book is about computers')
  };
  
  if (originalBookTitle.includes('algorithms') && originalBookTitle.includes('structures')) {
    console.log('This book is about algorithms and data structures')
  };
  
  if (originalBookTitle.slice(-7).includes('system') && !(originalBookTitle.includes('operating'))) {
    console.log('This book is about some systems, but definitely not about operating systems')
  }; 
}

logBookTheme('Structures and Platforms');

*/

// Working with Strings - Part 3
// 17.1
const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

function logBookCategories(input) {
  const splitInput = input.split(';');
  console.log(splitInput.join('\n'));
}

logBookCategories(bookCategories);

// 17.2
function getKeywordsAsString(input) {
  let keywords = '';
  for (let book of input) {
    book = [...(new Set(book.keywords))].join(';') + ';';
    keywords = keywords + book;
  }
  keywords = keywords.slice(0, -1);
  console.log(keywords);
}

getKeywordsAsString(books);

// My solution differs from that in the key in that mine retains the intermediary data as strings, not using arrays or pushes.

// 17.3
const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];

function logBookChapters(input) {
  for ([title, page] of input) {
    const line = title.padEnd(25, '_') + ` ${page}`;
    console.log(line);
  }
}

logBookChapters(bookChapters);

