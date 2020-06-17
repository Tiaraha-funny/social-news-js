// write your code here
console.log('it works!');

let optionLinks = [
    {
        topic: "What is a mystery?",
        mainIdea: "A mystery is one of the most exciting things which people are always tempted to discover. However, it is the most difficult thing to figure out. That is the reason why we call it a ‘mystery’ or ‘secret’. For several times, I have been wanting to get the evidence of someone’s personal life and something that is warned not being touched by anyone."
    },
    {
        topic: "Is 'truth' a mystery?",
        mainIdea: "I have found a lot of reasons to make me feel inquisitive to dig for the “truth”. To begin with, I would like to stress more about ‘truth’, which causes trustworthiness, to have more understanding of the following. I always want to know the truth because I don’t want to be cheated on any ground and phase of life. Life is based on only two things which are truth and trust."
    },
    {
        topic: "Why don't we telling the truth!",
        mainIdea: " Relationships are based on trust. If trust is broken there is no relationship and I strongly believe that no one in this world wants a broken relationship. I want to know the truth to build a strong relationship. If in this world you have strong relationships you can do anything including helping poor people to create miracles. (Miracles are meant to be created, not just happen). The worst case scenario is, truth is hidden, becomes a mystery and hard to solve."
    },
    {
        topic: "We need to tell the truth!",
        mainIdea: "To conclude, it seems to me that “truth” is the most mysterious thing and as a result many people are inquisitive to know it. I think we all need to try harder to tell the truth to each other. This would strengthen relationships and make us all more trustworthy. So, for a better future, I would urge everyone to avoid mystery and secrets. Expect the truth and tell the truth!"
    }
];

let ourLists = Number(prompt(`Choose an option here: 

1: Do you want to see all of the links?
2: Do you want to add some links?
3: Do you want to remove a link?
0: Do you want to quit this project?`));

while (ourLists !== 0) {

    switch (ourLists) {

        case 1:
          for (let i = 0; i < optionLinks.length; i++) {
            let ourTopics = `Topic: ${optionLinks[i].topic} \n Main idea: ${optionLinks[i].mainIdea}`;
              alert(ourTopics);
            }
            break;

        case 2:
            const addNewTopic = prompt('You can enter your new topic here');
            const addNewMainIdea = prompt('You can enter a main idea for your topic');
            let newLists = [
              {
              topic: addNewTopic,
              mainIdea: addNewMainIdea
              }
            ]
            for (let i = 0; i < newLists.length; i++) {
              let ourNewLists = `Topic: ${newLists[i].topic} \n Main idea: ${newLists[i].mainIdea}`
            alert(ourNewLists);
          };
        break;

        case 3:
          optionLinks.pop();
        break;

        case 0:
          alert(`Thanks for taking a look at my program. Goodbye!`);
        break;

        default:
    }
    ourLists = Number(prompt(`Choose an option here: 

1: Do you want to see all of the links?
2: Do you want to add some links?
3: Do you want to remove a link?
0: Do you want to quit this project?`));
}