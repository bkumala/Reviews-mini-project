import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(2);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((currentIndex) => {
      return (currentIndex + 1) % people.length;
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      return (currentIndex - 1 + people.length) % people.length;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight></FaChevronRight>
          </button>
        </div>
        <div className="btn btn-hipster" onClick={randomPerson}>
          Suprise me
        </div>
      </article>
    </main>
  );
};
export default App;
