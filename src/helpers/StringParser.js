const splitByWords = text => {
  return text.split(/\s+/);
};

const createWordMap = wordsArray => {
  let wordsMap = {};
  wordsArray.forEach(key => {
    if (wordsMap.hasOwnProperty(key.toLowerCase())) {
      wordsMap[key.toLowerCase()]++;
    } else {
      wordsMap[key.toLowerCase()] = 1;
    }
  });
  return wordsMap;
};

const sortByCount = wordsMap => {
  let finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(key => {
    return {
      name: key,
      total: wordsMap[key]
    };
  });

  finalWordsArray.sort((a, b) => {
    return b.total - a.total;
  });

  return finalWordsArray;
};

export { splitByWords, createWordMap, sortByCount };
