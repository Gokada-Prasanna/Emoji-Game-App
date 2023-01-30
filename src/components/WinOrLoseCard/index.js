// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  const onClickPlayAgainButton = () => {
    onClickPlayAgain(score)
  }

  return (
    <div className="scoreCard-container">
      <div className="scoreDetails-container">
        <h1 className="scoreDetails-heading">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="scoreValue">{score}/12</p>
        <button
          type="button"
          className="playAgain-button"
          onClick={onClickPlayAgainButton}
        >
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imgUrl} alt="win or lose" className="image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
