import axios from "axios";

const data = "https://solomvp-test.herokuapp.com/api/";

const getAllVocab = () => {
    return axios.get(`${data}vocab`);
};
// fake data for now

const server = [
    {
        english_vocab: "call",
    },
    {
        english_vocab: "often",
    },
    {
        english_vocab: "so",
    },
    {
        english_vocab: "fan",
    },
    {
        english_vocab: "cricket",
    },
    {
        english_vocab: "just",
    },
    {
        english_vocab: "there",
    },
    {
        english_vocab: "little",
    },
    {
        english_vocab: "every",
    },
    {
        english_vocab: "but",
    },
    {
        english_vocab: "cannot",
    },
    {
        english_vocab: "market",
    },
    {
        english_vocab: "wow",
    },
    {
        english_vocab: "popular",
    },
    {
        english_vocab: "crowded",
    },
    {
        english_vocab: "symbol",
    },
    {
        english_vocab: "picnic",
    },
    {
        english_vocab: "area",
    },
    {
        english_vocab: "hey",
    },
    {
        english_vocab: "around",
    },
    {
        english_vocab: "come",
    },
    {
        english_vocab: "toast",
    },
    {
        english_vocab: "yogurt",
    },
    {
        english_vocab: "also",
    },
    {
        english_vocab: "sounds",
    },
    {
        english_vocab: "sausage",
    },
];

const teachersSecretWords = [
    {
        name: "Bob Barker",
        secret_word: "fruit"
    },
    {
        name: "Arnold Schwarzenegger",
        secret_word: "juice"
    }
]

const getAllEnglishVocab = () => {
    // return axios.get(server.english_vocab);
    return server.map((word) => {
        return word.english_vocab;
    })
}

const getSecretWord = (teacherName) => {
    // return teachersSecretWords.map((teacher) => {
    //     if (teacher.name === teacherName) {
    //         return teacher.secret_word;
    //     }
    // });
    let secretWord = "";
    for (let i = 0; i < teachersSecretWords.length; i++) {
        if (teachersSecretWords[i].name === teacherName) {
            secretWord = teachersSecretWords[i].secret_word;
        }
    }
    return secretWord;
}

export { getAllEnglishVocab, getAllVocab, getSecretWord };
export default { server };