// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameInProgress} = props
  return (
    <nav className="navbar-container">
      <div className="logoScore-container">
        <div className="logoTitle-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="emoji-logo"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
