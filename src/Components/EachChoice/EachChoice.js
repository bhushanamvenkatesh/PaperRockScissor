import {EachListItem, ImageButton, ImageElement} from './StyledComponents'

const EachChoice = props => {
  const {each, onClickChoice} = props
  const {imageUrl, id} = each

  const lower = id.toLowerCase()
  console.log(lower)

  const ClickChoice = () => {
    // console.log(id)
    const randomNum = Math.floor(Math.random() * 3)
    onClickChoice(id, randomNum)
  }

  return (
    <EachListItem>
      <ImageButton data-testid={`${lower}Button`} onClick={ClickChoice}>
        <ImageElement src={imageUrl} alt={id} />
      </ImageButton>
    </EachListItem>
  )
}

export default EachChoice
