import './flipCard.css';

function FlipCard() {

  return (
    <>
      <div className="flip-container" >
        <div className="flipper">
          <div className="front">
            Front
          </div>
          <div className="back">
            Back
          </div>
        </div>
      </div>
    </>
  );
}
export default FlipCard;