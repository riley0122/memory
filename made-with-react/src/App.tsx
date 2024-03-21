import React, { useEffect } from 'react';
import './App.css';
import Card from './Card';

interface pair {
  firstCard: number;
  secondCard: number;
  dog: string;
}

function App() {
  const cardCount = 16;
  const [pairs, setPairs] = React.useState([] as pair[]);
  let unassigned = [...Array(cardCount).keys()];
  const [flippedCards, setFlippedCards] = React.useState([...Array(cardCount).keys()].map(card => {
    return false;
  }));

  useEffect(() => {
    for (let i = 0; i < [...Array(cardCount/2)].length; i++) {
      fetch('https://random.dog/woof.json').then(res => {return res.json()}).then(data => {
        let random = Math.floor(Math.random() * unassigned.length);
        const firstCard = unassigned.splice(random, 1)[0];
        random = Math.floor(Math.random() * unassigned.length);
        const secondCard = unassigned.splice(random, 1)[0];
        let p = pairs;
        p.push({
          firstCard: firstCard,
          secondCard: secondCard,
          dog: data["url"],
        } as pair);
        setPairs(p);
      });
    }
  }, []);

  function flipCard(index: number) {
    setFlippedCards(flippedCards.map((card, i) => {
      if (i === index) {
        return !card;
      } else {
        return card;
      }
    }));
  }

  function getDog(index: number) {
    return pairs.filter((value) => {return value.firstCard === index || value.secondCard === index})[0]?.dog || "https://gifdb.com/images/high/shiba-inu-hunting-dog-loading-fake-smile-jrnqgz1xt5xgmy3f.gif";
  }

  return (
    <div className="App">
      {[...Array(cardCount)].map((_, i) => (
        <div key={i} onClick={() => !flippedCards[i] ? flipCard(i) : {}} className='w-full h-full' >
          <Card index={i} flip={flippedCards[i]} dog={getDog(i)}/>
        </div>
      ))}
    </div>
  );
}

export default App;
