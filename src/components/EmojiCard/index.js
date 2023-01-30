// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiButton = () => {
    clickEmoji(id)
  }

  return (
    <li className="emojiItem-container">
      <button
        type="button"
        className="emoji-button"
        onClick={onClickEmojiButton}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
