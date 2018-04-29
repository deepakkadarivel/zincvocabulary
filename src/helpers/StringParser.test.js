import { splitByWords, createWordMap, sortByCount } from './StringParser';

describe('StringParser', () => {
  it('splitByWords func splits the words in string following space, tab and new line.', () => {
    const testString =
      'My name is one and my friends name is two, we work at office one';
    const expectedArray = [
      'My',
      'name',
      'is',
      'one',
      'and',
      'my',
      'friends',
      'name',
      'is',
      'two,',
      'we',
      'work',
      'at',
      'office',
      'one'
    ];

    let words = splitByWords(testString);
    expect(words).toEqual(expectedArray);
  });

  it('createWordMap func finds all unique occurrences of words from array and create a map of unique word and count.', () => {
    const inputArray = [
      'My',
      'name',
      'is',
      'one',
      'and',
      'my',
      'friends',
      'name',
      'is',
      'two,',
      'we',
      'work',
      'at',
      'office',
      'one'
    ];
    const expectedMap = {
      and: 1,
      at: 1,
      friends: 1,
      is: 2,
      my: 2,
      name: 2,
      office: 1,
      one: 2,
      'two,': 1,
      we: 1,
      work: 1
    };

    let resultMap = createWordMap(inputArray);
    expect(resultMap).toEqual(expectedMap);
  });

  it('sortByCount func sorts map of words and count by its count in descending order', () => {
    const inputMap = {
      and: 1,
      at: 1,
      friends: 1,
      is: 2,
      my: 2,
      name: 2,
      office: 1,
      one: 2,
      'two,': 1,
      we: 1,
      work: 1
    };
    const expectedArray = [
      { name: 'name', total: 2 },
      { name: 'is', total: 2 },
      { name: 'my', total: 2 },
      { name: 'one', total: 2 },
      { name: 'friends', total: 1 },
      { name: 'at', total: 1 },
      { name: 'office', total: 1 },
      { name: 'and', total: 1 },
      { name: 'two,', total: 1 },
      { name: 'we', total: 1 },
      { name: 'work', total: 1 }
    ];

    let resultMap = sortByCount(inputMap);
    expect(resultMap).toEqual(expectedArray);
  });
});
