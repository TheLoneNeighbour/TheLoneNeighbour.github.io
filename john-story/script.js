const game = document.getElementById('game');
let choices = game.querySelectorAll('.choice');

const stories = [
  {
    id: 1,
    text: `John decides to go on a journey. He packs his bags and sets off into the unknown.`,
    choices: [
      { text: 'Explore a forest', next: 3 },
      { text: 'Visit a mountain', next: 4 },
    ]
  },
  {
    id: 2,
    text: `John decides to stay at home. He spends his days reading and relaxing.`,
    choices: [
      { text: 'Go on a walk', next: 5 },
      { text: 'Start a garden', next: 6 },
    ]
  },
  {
    id: 3,
    text: `John decides to explore the forest. As he walks deeper into the woods, he comes across a clearing with a small pond.`,
    choices: [
      { text: 'Take a swim', next: 7 },
      { text: 'Drink from the pond', next: 8 },
    ]
  },
  {
    id: 4,
    text: `John decides to visit the mountain. As he reaches the top, he is greeted with a breathtaking view of the surrounding landscape.`,
    choices: [
      { text: 'Take a photo', next: 9 },
      { text: 'Meditate', next: 10 },
    ]
  }, {
    id: 5,
    text: `John decides to go for a walk. As he walks through the neighborhood, he comes across a group of children playing.`,
    choices: [
      { text: 'Join in', next: 11 },
      { text: 'Keep walking', next: 12 },
    ]
  },
  {
    id: 6,
    text: `John decides to start a garden. He spends his days tending to the plants and watching them grow.`,
    choices: [
      { text: 'Sell produce at the market', next: 11 },
      { text: 'Give the produce away to neighbors', next: 12 },
    ]
  },
  {
    id: 7,
    text: `John decides to take a swim in the pond. As he splashes around, he notices a shiny object at the bottom. He swims down to retrieve it and finds a golden amulet.`,
    choices: [
      { text: 'Keep the amulet', next: 13 },
      { text: 'Return the amulet to the pond', next: 14 },
    ]
  },
  {
    id: 8,
    text: `John decides to drink from the pond. As he takes a sip, he notices a fish swimming by. He quickly realizes that the water is not safe to drink and decides to turn back.`,
    choices: [
      { text: 'Head back the way you came', next: 15 },
      { text: 'Try to find a different way out', next: 16 },
    ]
  },
  {
    id: 9,
    text: `John decides to take a photo of the view. As he snaps the picture, he notices a strange figure in the distance. He decides to investigate.`,
    choices: [
      { text: 'Approach the figure', next: 17 },
      { text: 'Stay back and observe', next: 18 },
    ]
  },
  {
    id: 10,
    text: `John decides to meditate at the top of the mountain. As he sits in peaceful contemplation, he is approached by a wise old man.`,
    choices: [
      { text: 'Talk to the man', next: 19 },
      { text: 'Ignore the man and continue meditating', next: 20 },
    ]
  },
  {
    id: 11,
    text: `John decides to join in with the children. He plays with them for hours and has a great time.`,
    choices: [
      { text: 'Say goodbye and head home', next: 21 },
      { text: 'Keep playing with the children', next: 22 },
    ]
  },
  {
    id: 12,
    text: `John decides to keep walking. As he walks, he comes across a beautiful flower garden. He stops to admire the flowers and decides to pick some to bring home.`,
    choices: [
      { text: 'Keep the flowers for yourself', next: 23 },
      { text: 'Give the flowers to a stranger', next: 24 },
    ]
  },
  {
    id: 13,
    text: `John decides to keep the amulet. As he continues on his journey, he finds that the amulet has strange powers and helps him overcome many challenges.`,
    choices: [
      { text: 'Continue on your journey', next: 25 },
      { text: 'Return home', next: 26 },
    ]
  },
  {
    id: 14,
    text: `John decides to return the amulet to the pond. As he makes his way back, he is thanked by the spirits of the forest for his kindness.`,
    choices: [
      { text: 'Continue on your journey', next: 27 },
      { text: 'Return home', next: 28 },
    ]
  },
  {
    id: 15,
    text: `John decides to head back the way he came. He finds his way out of the forest and continues on his journey.`,
    choices: [
      { text: 'Explore a cave', next: 29 },
      { text: 'Go on a boat ride', next: 30 },
    ]
  },
  {
    id: 16,
    text: `John decides to try to find a different way out. After a long and difficult journey, he finally emerges from the forest.`,
    choices: [
      { text: 'Explore a cave', next: 31 },
      { text: 'Go on a boat ride', next: 32 },
    ]
  },
  {
    id: 17,
    text: `John approaches the figure and discovers that it is a lost traveler. He helps the traveler find their way back home and continues on his own journey.`,
    choices: [
      { text: 'Explore a cave', next: 33 },
      { text: 'Go on a boat ride', next: 34 },
    ]
  },
  {
    id: 18,
    text: `John decides to stay back and observe the figure. After a while, the figure disappears and John continues on his journey.`,
    choices: [
      { text: 'Explore a cave', next: 35 },
      { text: 'Go on a boat ride', next: 36 },
    ]
  },
  {
    id: 19,
    text: `John talks to the wise old man and learns many valuable lessons. He thanks the man and continues on his journey.`,
    choices: [
      { text: 'Explore a cave', next: 37 },
      { text: 'Go on a boat ride', next: 38 },
    ]
  },
  {
    id: 20,
    text: `John ignores the man and continues meditating. As he reaches a state of enlightenment, he is filled with a sense of peace and purpose.`,
    choices: [
      { text: 'Explore a cave', next: 39 },
      { text: 'Go on a boat ride', next: 40 },
    ]
  },
  {
    id: 21,
    text: `John says goodbye to the children and heads home. He reflects on the fun he had and the new friends he made.`,
    choices: [
      { text: 'End game', next: 41 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 22,
    text: `John decides to keep playing with the children. He spends the rest of the day having fun and making memories.`,
    choices: [
      { text: 'End game', next: 42 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 23,
    text: `John decides to keep the flowers for himself. He enjoys the beauty of the flowers and the sense of accomplishment that comes with growing them.`,
    choices: [
      { text: 'End game', next: 43 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 24,
    text: `John decides to give the flowers to a stranger. The stranger is touched by the kind gesture and thanks John.`,
    choices: [
      { text: 'End game', next: 44 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 25,
    text: `John continues on his journey with the amulet. He encounters many more challenges and adventures, and eventually returns home a wiser and more experienced person.`,
    choices: [
      { text: 'End game', next: 45 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 26,
    text: `John decides to return home with the amulet. He enjoys the comfort and familiarity of home and reflects on the adventures he had.`,
    choices: [
      { text: 'End game', next: 46 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 27,
    text: `John continues on his journey, grateful for the spirits' blessing. He encounters many more challenges and adventures, and eventually returns home a wiser and more experienced person.`,
    choices: [
      { text: 'End game', next: 47 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 28,
    text: `John decides to return home, grateful for the spirits' blessing. He enjoys the comfort and familiarity of home and reflects on the adventures he had.`,
    choices: [
      { text: 'End game', next: 48 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 29,
    text: `John decides to explore the cave. As he navigates the dark and twisting tunnels, he finds ancient artifacts and treasures.`,
    choices: [
      { text: 'Keep the treasures', next: 49 },
      { text: 'Leave the treasures behind', next: 50 },
    ]
  },
  {
    id: 30,
    text: `John decides to go on a boat ride. As he floats down the river, he sees breathtaking views and encounters strange and exotic animals.`,
    choices: [
      { text: 'End game', next: 51 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 31,
    text: `John decides to explore the cave. As he navigates the dark and twisting tunnels, he finds ancient artifacts and treasures.`,
    choices: [
      { text: 'Keep the treasures', next: 52 },
      { text: 'Leave the treasures behind', next: 53 },
    ]
  },
  {
    id: 32,
    text: `John decides to go on a boat ride. As he floats down the river, he sees breathtaking views and encounters strange and exotic animals.`,
    choices: [
      { text: 'End game', next: 54 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 33,
    text: `John decides to explore the cave. As he navigates the dark and twisting tunnels, he finds ancient artifacts and treasures.`,
    choices: [
      { text: 'Keep the treasures', next: 55 },
      { text: 'Leave the treasures behind', next: 56 },
    ]
  },
  {
    id: 34,
    text: `John decides to go on a boat ride. As he floats down the river, he sees breathtaking views and encounters strange and exotic animals.`,
    choices: [
      { text: 'End game', next: 57 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 35,
    text: `John decides to explore the cave. As he navigates the dark and twisting tunnels, he finds ancient artifacts and treasures.`,
    choices: [
      { text: 'Keep the treasures', next: 58 },
      { text: 'Leave the treasures behind', next: 59 },
    ]
  },
  {
    id: 36,
    text: `John decides to go on a boat ride. As he floats down the river, he sees breathtaking views and encounters strange and exotic animals.`,
    choices: [
      { text: 'End game', next: 60 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 37,
    text: `John decides to explore the cave. As he navigates the dark and twisting tunnels, he finds ancient artifacts and treasures.`,
    choices: [
      { text: 'Keep the treasures', next: 61 },
      { text: 'Leave the treasures behind', next: 62 },
    ]
  },
  {
    id: 38,
    text: `John decides to go on a boat ride. As he floats down the river, he sees breathtaking views and encounters strange and exotic animals.`,
    choices: [
      { text: 'End game', next: 63 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 39,
    text: `John decides to explore the cave. As he navigates the dark and twisting tunnels, he finds ancient artifacts and treasures.`,
    choices: [
      { text: 'Keep the treasures', next: 64 },
      { text: 'Leave the treasures behind', next: 65 },
    ]
  },
  {
    id: 40,
    text: `John decides to go on a boat ride. As he floats down the river, he sees breathtaking views and encounters strange and exotic animals.`,
    choices: [
      { text: 'End game', next: 66 },
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 41,
    text: `Congratulations, you have completed the game! John's journey has come to an end, but he will always remember the adventures he had and the lessons he learned. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 42,
    text: `Congratulations, you have completed the game! John had a wonderful day playing with the children and will always remember the fun he had. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 43,
    text: `Congratulations, you have completed the game! John enjoyed the beauty of the flowers he picked and will always remember the sense of accomplishment he felt. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 44,
    text: `Congratulations, you have completed the game! John was touched by the stranger's gratitude and will always remember the kind gesture. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 45,
    text: `Congratulations, you have completed the game! John returned home a wiser and more experienced person, thanks to the adventures he had with the amulet. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 46,
    text: `Congratulations, you have completed the game! John had a great time on his journey and enjoyed the comfort and familiarity of home. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 47,
    text: `Congratulations, you have completed the game! John returned home a wiser and more experienced person, thanks to the adventures he had with the blessing of the spirits. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 48,
    text: `Congratulations, you have completed the game! John had a great time on his journey and enjoyed the comfort and familiarity of home, with the blessing of the spirits. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 49,
    text: `Congratulations, you have completed the game! John returned home with the treasures he found in the cave, feeling accomplished and enriched. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 50,
    text: `Congratulations, you have completed the game! John returned home feeling proud of his decision to leave the treasures behind. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 51,
    text: `Congratulations, you have completed the game! John had a great time on the boat ride and saw many breathtaking views and encountered strange and exotic animals. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 52,
    text: `Congratulations, you have completed the game! John returned home with the treasures he found in the cave, feeling accomplished and enriched. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 53,
    text: `Congratulations, you have completed the game! John returned home feeling proud of his decision to leave the treasures behind. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 54,
    text: `Congratulations, you have completed the game! John had a great time on the boat ride and saw many breathtaking views and encountered strange and exotic animals. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 55,
    text: `Congratulations, you have completed the game! John returned home with the treasures he found in the cave, feeling accomplished and enriched. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 56,
    text: `Congratulations, you have completed the game! John returned home feeling proud of his decision to leave the treasures behind. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 57,
    text: `Congratulations, you have completed the game! John had a great time on the boat ride and saw many breathtaking views and encountered strange and exotic animals. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 58,
    text: `Congratulations, you have completed the game! John returned home with the treasures he found in the cave, feeling accomplished and enriched. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 59,
    text: `Congratulations, you have completed the game! John returned home feeling proud of his decision to leave the treasures behind. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 60,
    text: `Congratulations, you have completed the game! John had a great time on the boat ride and saw many breathtaking views and encountered strange and exotic animals. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 61,
    text: `Congratulations, you have completed the game! John returned home with the treasures he found in the cave, feeling accomplished and enriched. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 62,
    text: `Congratulations, you have completed the game! John returned home feeling proud of his decision to leave the treasures behind. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 63,
    text: `Congratulations, you have completed the game! John had a great time on the boat ride and saw many breathtaking views and encountered strange and exotic animals. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 64,
    text: `Congratulations, you have completed the game! John returned home with the treasures he found in the cave, feeling accomplished and enriched. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 65,
    text: `Congratulations, you have completed the game! John returned home feeling proud of his decision to leave the treasures behind. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 66,
    text: `Congratulations, you have completed the game! John had a great time on the boat ride and saw many breathtaking views and encountered strange and exotic animals. Thank you for playing!`,
    choices: [
      { text: 'Restart game', next: 100 },
    ]
  },
  {
    id: 100,
    text: `John is a man with no last name. He lives a simple life, but one day he is faced with a choice:`,
    choices: [
      { text: 'Go on a journey', next: 1 },
      { text: 'Stay at home', next: 2 },
    ]
  },
];

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    const next = e.target.dataset.next;
    displayNext(next);
  });
});

function displayNext(next) {
  game.innerHTML = ''; // clear game

  const story = stories.find(s => s.id == next);

  game.innerHTML = `
    <h1>John's Adventure</h1>
    <p>${story.text}</p>
    <ul>
      ${story.choices.map(c => `<li class="choice" data-next="${c.next}">${c.text}</li>`).join('')}
    </ul>
  `;
  choices = game.querySelectorAll('.choice');
  choices.forEach(choice => {
    choice.addEventListener('click', e => {
      const next = e.target.dataset.next;
      displayNext(next);
    });
  });
}
