// We do this to know if our code will work or not. It is just test.
console.log('it works!');

//Let us start our code

// we create arrays of object to give the details of the topics in the first part.

let optionLinks = [
  {
    topic: "What is a mystery?",
    url: "https://jeannie.peta.com/mystery",
    author: "A mystery is one of the most exciting things which people are always tempted to discover. However, it is the most difficult thing to figure out. That is the reason why we call it a ‘mystery’ or ‘secret’. For several times, I have been wanting to get the evidence of someone’s personal life and something that is warned not being touched by anyone."
  },
  {
    topic: "Is 'truth' a mystery?",
    url: "http://peta.jeannie.com/truth",
    author: "I have found a lot of reasons to make me feel inquisitive to dig for the “truth”. To begin with, I would like to stress more about ‘truth’, which causes trustworthiness, to have more understanding of the following. I always want to know the truth because I don’t want to be cheated on any ground and phase of life. Life is based on only two things which are truth and trust."
  },
  {
    topic: "Why don't we telling the truth!",
    url: "https://rakoto.naivo.org/tell_truth",
    author: " Relationships are based on trust. If trust is broken there is no relationship and I strongly believe that no one in this world wants a broken relationship. I want to know the truth to build a strong relationship. If in this world you have strong relationships you can do anything including helping poor people to create miracles. (Miracles are meant to be created, not just happen). The worst case scenario is, truth is hidden, becomes a mystery and hard to solve."
  },
  {
    topic: "We need to tell the truth!",
    url: "http://robery.avolenta.org/useful_for_truth",
    author: "To conclude, it seems to me that “truth” is the most mysterious thing and as a result many people are inquisitive to know it. I think we all need to try harder to tell the truth to each other. This would strengthen relationships and make us all more trustworthy. So, for a better future, I would urge everyone to avoid mystery and secrets. Expect the truth and tell the truth!"
  }
];

// Our lists is created to show the lists of choices that we are going to choose.

let ourLists = Number(prompt(`Choose an option here: 

1: Do you want to see all of the links?
2: Do you want to add some links?
3: Do you want to remove a link?
0: Do you want to quit this project?`));

// This is more explanation about the url links to check if it absolute or not

let absoluteUrl = "http://"

if (!absoluteUrl.startsWith("https://") && !absoluteUrl.startsWith("https://")) {
  absoluteUrl = `http://${absoluteUrl}`;
}

//While keeps our project won't stop to ask what the users want to do from their choice.

while (ourLists !== 0) {

  //This gives the details of what users need, we use switch to make it is easier to use but we can use for loop instead too.

  switch (ourLists) {

    case 1: // This is the first part of our choice.
      for (let i = 0; i < optionLinks.length; i++) {
        let ourTopics = `Topic: ${optionLinks[i].topic} \n url: ${optionLinks[i].url} \n Author: ${optionLinks[i].author}`;
        alert(ourTopics); //we call all of the links from theoption links above but it combines together in ourTopic variable.
      }
      break;

    case 2://This is the second part of our choice.
      const addNewTopic = prompt('You can enter your new topic here:');
      const addNewUrl = prompt('You can enter your own url here:')
      const addNewauthor = prompt('You can enter a main idea for your topic:');
      let newLists = [ //To show the users new topic, we do this.
        {
          topic: addNewTopic,
          url: addNewUrl,
          author: addNewauthor
        }
      ]
      for (let i = 0; i < newLists.length; i++) {
        let ourNewLists = `Topic: ${newLists[i].topic} \n Url: ${newLists[i].url}\n Author: ${newLists[i].author}`
        alert(ourNewLists);// we call the new links that the users created recently.
      };
      break;

    case 3://This is the third topic of the users' choice.
      optionLinks.pop(); //To remove the last links of our programe we use pop().
      break;

    case 0://The last choice that the users do is to quite if they do not want to continue.
      alert(`Thanks for taking a look at my program. Goodbye!`);
      break;

    default:// This is the default to ask the users to choose the right number of choice because if they don't choose the number given they won't get our programe.
      alert("You only can choose the number in the lists.");
  }

  //We do this to loop it properly and swiftly, and also to turn the program back if we have chosen the others.
  ourLists = Number(prompt(`Choose an option here: 

1: Do you want to see all of the links?
2: Do you want to add some links?
3: Do you want to remove a link?
0: Do you want to quit this project?`));
}