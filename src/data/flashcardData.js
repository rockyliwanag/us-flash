const flashcardData = [
    {
        id: 1,
        question: "What is the supreme law of the land?",
        answer: "▪ the Constitution"
    },
    {
        id: 2,
        question: "What does the Constitution do?",
        answer: ["▪ sets up the government", "▪ defines the government", "▪ protects basic rights of Americans"]
    },
    {
        id: 3,
        question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
        answer: "▪ We the People"
    },
    {
        id: 4,
        question: "What is an amendment?",
        answer: ["▪ a change (to the Constitution)", "▪ an addition (to the Constitution)"]
    },
    {
        id: 5,
        question: "What do we call the first ten amendments to the Constitution?",
        answer: "▪ the Bill of Rights"
    },
    {
        id: 6,
        question: "What is one right or freedom from the First Amendment?",
        answer: ["▪ speech", "▪ religion", "▪ assembly", "▪ press", "▪ petition the government"]
    },
    {
        id: 7,
        question: "How many amendments does the Constitution have?",
        answer: "▪ twenty-seven (27)"
    },
    {
        id: 8,
        question: "What did the Declaration of Independence do?",
        answer: ["▪ announced our independence (from Great Britain)", "▪ declared our independence (from Great Britain)", "▪ said that the United States is free (from Great Britain)"]
    },
    {
        id: 9,
        question: "What are two rights in the Declaration of Independence?",
        answer: ["▪ life", "▪ liberty", "▪ pursuit of happiness"]
    },
    {
        id: 10,
        question: "What is freedom of religion?",
        answer: "▪ You can practice any religion, or not practice a religion."
    },
    {
        id: 11,
        question: "What is the economic system in the United States?",
        answer: ["▪ capitalist economy", "▪ market economy"]
    },
    {
        id: 12,
        question: "What is the “rule of law”?",
        answer: ["▪ Everyone must follow the law.", "▪ Leaders must obey the law.", "▪ Government must obey the law.", "▪ No one is above the law."]
    },
    {
        id: 13,
        question: "Name one branch or part of the government.",
        answer: ["▪ Congress", "▪ legislative", "▪ President", "▪ executive", "▪ the courts", "▪ judicial"]
    },
    {
        id: 14,
        question: "What stops one branch of government from becoming too powerful?",
        answer: ["▪ checks and balances", "▪ separation of powers"]
    },
    {
        id: 15,
        question: "",
        answer: ""
    },
    {
        id: 16,
        question: "",
        answer: ""
    },
    {
        id: 17,
        question: "",
        answer: ""
    },
    {
        id: 18,
        question: "",
        answer: ""
    },
    {
        id: 19,
        question: "",
        answer: ""
    },
    {
        id: 20,
        question: "",
        answer: ""
    },
    {
        id: 21,
        question: "",
        answer: ""
    },
    {
        id: 22,
        question: "",
        answer: ""
    },
    {
        id: 23,
        question: "",
        answer: ""
    },
    {
        id: 24,
        question: "",
        answer: ""
    },
    {
        id: 25,
        question: "",
        answer: ""
    },
    {
        id: 26,
        question: "",
        answer: ""
    },
    {
        id: 27,
        question: "",
        answer: ""
    },
    {
        id: 28,
        question: "",
        answer: ""
    },
    {
        id: 29,
        question: "",
        answer: ""
    },
    {
        id: 30,
        question: "",
        answer: ""
    },
    {
        id: 31,
        question: "",
        answer: ""
    },
    {
        id: 32,
        question: "",
        answer: ""
    },
    {
        id: 33,
        question: "",
        answer: ""
    },
    {
        id: 34,
        question: "",
        answer: ""
    },
    {
        id: 35,
        question: "",
        answer: ""
    },
    {
        id: 36,
        question: "",
        answer: ""
    },
    {
        id: 37,
        question: "",
        answer: ""
    },
    {
        id: 38,
        question: "",
        answer: ""
    },
    {
        id: 39,
        question: "",
        answer: ""
    },
    {
        id: 40,
        question: "",
        answer: ""
    },
    {
        id: 41,
        question: "",
        answer: ""
    },
    {
        id: 42,
        question: "",
        answer: ""
    },
    {
        id: 43,
        question: "",
        answer: ""
    },
    {
        id: 44,
        question: "",
        answer: ""
    },
    {
        id: 45,
        question: "",
        answer: ""
    },
    {
        id: 46,
        question: "",
        answer: ""
    },
    {
        id: 47,
        question: "",
        answer: ""
    },
    {
        id: 48,
        question: "",
        answer: ""
    },
    {
        id: 49,
        question: "",
        answer: ""
    },
    {
        id: 50,
        question: "",
        answer: ""
    },
    {
        id: 51,
        question: "",
        answer: ""
    },
    {
        id: 52,
        question: "",
        answer: ""
    },
    {
        id: 53,
        question: "",
        answer: ""
    },
    {
        id: 54,
        question: "",
        answer: ""
    },
    {
        id: 55,
        question: "",
        answer: ""
    },
    {
        id: 56,
        question: "",
        answer: ""
    },
    {
        id: 57,
        question: "",
        answer: ""
    },
    {
        id: 58,
        question: "",
        answer: ""
    },
    {
        id: 59,
        question: "",
        answer: ""
    },
    {
        id: 60,
        question: "",
        answer: ""
    },
    {
        id: 61,
        question: "",
        answer: ""
    },
    {
        id: 62,
        question: "",
        answer: ""
    },
    {
        id: 63,
        question: "",
        answer: ""
    },
    {
        id: 64,
        question: "",
        answer: ""
    },
    {
        id: 65,
        question: "",
        answer: ""
    },
    {
        id: 66,
        question: "",
        answer: ""
    },
    {
        id: 67,
        question: "",
        answer: ""
    },
    {
        id: 68,
        question: "",
        answer: ""
    },
    {
        id: 69,
        question: "",
        answer: ""
    },
    {
        id: 70,
        question: "",
        answer: ""
    },
    {
        id: 71,
        question: "",
        answer: ""
    },
    {
        id: 72,
        question: "",
        answer: ""
    },
    {
        id: 73,
        question: "",
        answer: ""
    },
    {
        id: 74,
        question: "",
        answer: ""
    },
    {
        id: 75,
        question: "",
        answer: ""
    },
    {
        id: 76,
        question: "",
        answer: ""
    },
    {
        id: 77,
        question: "",
        answer: ""
    },
    {
        id: 78,
        question: "",
        answer: ""
    },
    {
        id: 79,
        question: "",
        answer: ""
    },
    {
        id: 80,
        question: "",
        answer: ""
    },
    {
        id: 81,
        question: "",
        answer: ""
    },
    {
        id: 82,
        question: "",
        answer: ""
    },
    {
        id: 83,
        question: "",
        answer: ""
    },
    {
        id: 84,
        question: "",
        answer: ""
    },
    {
        id: 85,
        question: "",
        answer: ""
    },
    {
        id: 86,
        question: "",
        answer: ""
    },
    {
        id: 87,
        question: "",
        answer: ""
    },
    {
        id: 88,
        question: "",
        answer: ""
    },
    {
        id: 89,
        question: "",
        answer: ""
    },
    {
        id: 90,
        question: "",
        answer: ""
    },
    {
        id: 91,
        question: "",
        answer: ""
    },
    {
        id: 92,
        question: "",
        answer: ""
    },
    {
        id: 93,
        question: "",
        answer: ""
    },
    {
        id: 94,
        question: "",
        answer: ""
    },
    {
        id: 95,
        question: "",
        answer: ""
    },
    {
        id: 96,
        question: "",
        answer: ""
    },
    {
        id: 97,
        question: "",
        answer: ""
    },
    {
        id: 98,
        question: "",
        answer: ""
    },
    {
        id: 99,
        question: "",
        answer: ""
    },
    {
        id: 100,
        question: "",
        answer: ""
    }
];

export default flashcardData;