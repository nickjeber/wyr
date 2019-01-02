let users = {
  sandrabullock: {
    id: 'sandrabullock',
    name: 'Sandra Bullock',
    avatarURL: 'https://media1.popsugar-assets.com/files/thumbor/PNgJLenfeYQfkbmlJ4d3lznVEL8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/16/743/n/1922398/1f877a5a5b4cccb60be5d5.77818567_/i/Sandra-Bullock.jpg',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: 'https://si.wsj.net/public/resources/images/AR-AF729_HaRDY_GS_20140416175521.jpg',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  seanconnery: {
    id: 'seanconnery',
    name: 'Sean Connery',
    avatarURL: 'https://i.ebayimg.com/images/g/yC0AAOSwU~FWEiX~/s-l300.jpg',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sandrabullock',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sandrabullock'],
      text: 'lose all of your money and valuables?',
    },
    optionTwo: {
      votes: [],
      text: 'lose all of the photos you have ever taken?'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'seanconnery',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'be able to see 10 minutes into your own future?',
    },
    optionTwo: {
      votes: ['seanconnery', 'hsandrabullock'],
      text: 'be able to see 10 minutes into the future of anyone but yourself?'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sandrabullock',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be famous when you are alive and forgotten when you die?',
    },
    optionTwo: {
      votes: ['sandrabullock'],
      text: 'be unknown when you are alive but famous after you die?'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'go to jail for 4 years for something you didn’t do?',
    },
    optionTwo: {
      votes: ['sandrabullock'],
      text: 'get away with something horrible you did but always live in fear of being caught?'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'your shirts be always two sizes too big?',
    },
    optionTwo: {
      votes: ['seanconnery'],
      text: 'your shirts be always one size too small?'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'seanconnery',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['seanconnery'],
      text: 'live in the wilderness far from civilization?',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'live on the streets of a city as a homeless person?'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
