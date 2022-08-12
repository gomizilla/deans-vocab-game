
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
    }
];

const getAllEnglishVocab = () => {
    // return axios.get(server.english_vocab);
    return server.map((word) => {
        return word.english_vocab;
    })
}

export { getAllEnglishVocab };
export default { server };