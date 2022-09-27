import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import EachChoice from '../EachChoice/EachChoice'

import {
  AppContainer,
  Paragraph,
  ScoreContainer,
  ScoreNumContainer,
  CustomContainer,
  PlayingList,
  RulesButton,
  Image,
  RulesContainer,
  ChoiceImage,
  ResultContainer,
  ChoiceImageContainer,
  PlayAgainButton,
  Heading,
} from './StyledComponents'

class Game extends Component {
  state = {
    IsActive: false,
    score: '0',
    playerChoice: '',
    systemChoice: '',
    choiceSelected: false,
  }

  onClickRulesButton = () => {
    this.setState(prevState => ({
      IsActive: !prevState.IsActive,
    }))
  }

  getGameResult = (playerChoice, systemChoice) => {
    // const {playerChoice, systemChoice} = this.state
    if (
      (playerChoice === 'PAPER' && systemChoice === 'ROCK') ||
      (playerChoice === 'SCISSORS' && systemChoice === 'PAPER') ||
      (playerChoice === 'ROCK' && systemChoice === 'SCISSORS')
    ) {
      return 'YOU WON'
    }
    if (
      (playerChoice === 'SCISSORS' && systemChoice === 'ROCK') ||
      (playerChoice === 'ROCK' && systemChoice === 'PAPER') ||
      (playerChoice === 'PAPER' && systemChoice === 'SCISSORS')
    ) {
      return 'YOU LOSE'
    }
    return 'IT IS DRAW'
  }

  setChoices = (playerChoice, s) => {
    const {choicesList} = this.props
    const systemChoice = choicesList[s].id
    console.log(playerChoice, systemChoice)
    const res = this.getGameResult(playerChoice, systemChoice)
    // this.setState({
    //   playerChoice: player,
    //   systemChoice: system,
    //   choiceSelected: true,
    // })
    if (res === 'YOU WON') {
      this.setState(prevState => ({
        result: res,
        choiceSelected: true,
        playerChoice,
        systemChoice,
        score: prevState.score + 1,
      }))
    }

    if (res === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: res,
        choiceSelected: true,
        playerChoice,
        systemChoice,
      }))
    }
    if (res === 'IT IS DRAW') {
      this.setState({
        result: res,
        choiceSelected: true,
        playerChoice,
        systemChoice,
      })
    }
  }

  renderGame = () => {
    const {IsActive} = this.state
    const overlayStyle = {
      background: 'rgba(0,0,0,0.5)',
      width: '60%',
      height: '80%',
    }
    const {choicesList} = this.props
    return (
      <>
        <PlayingList>
          {choicesList.map(each => (
            <EachChoice
              each={each}
              key={each.id}
              onClickChoice={this.setChoices}
            />
          ))}
        </PlayingList>

        <Popup
          showPopup
          trigger={
            <RulesButton RulesOpen={IsActive} onClick={this.onClickRulesButton}>
              Rules
            </RulesButton>
          }
          modal
          {...{overlayStyle}}
        >
          <RiCloseLine />

          <RulesContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RulesContainer>
        </Popup>
      </>
    )
  }

  onClickPlayAgainButton = () => {
    this.setState({
      IsActive: false,
      playerChoice: '',
      systemChoice: '',
      choiceSelected: false,
    })
  }

  renderResult = () => {
    const {playerChoice, systemChoice, result} = this.state
    const {choicesList} = this.props

    const playerImage = choicesList.find(each => each.id === playerChoice)
    const systemImage = choicesList.find(each => each.id === systemChoice)
    // const gameResult = this.getGameResult()

    return (
      <ResultContainer>
        <ChoiceImageContainer>
          <CustomContainer>
            <Heading>YOU</Heading>
            <ChoiceImage src={playerImage.imageUrl} alt="your choice" />
          </CustomContainer>
          <CustomContainer>
            <Heading>OPPONENT</Heading>
            <ChoiceImage src={systemImage.imageUrl} alt="opponent choice" />
          </CustomContainer>
        </ChoiceImageContainer>
        <Paragraph color="#ffffff">{result}</Paragraph>
        <PlayAgainButton onClick={this.onClickPlayAgainButton}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultContainer>
    )
  }

  render() {
    // const gameResult = this.getGameResult()

    const {score, choiceSelected} = this.state

    return (
      <AppContainer>
        <ScoreContainer>
          <CustomContainer>
            <Heading color="#ffff">Rock Paper Scissors</Heading>

            {/* <Heading color="#ffff">Paper</Heading>
            <Heading color="#ffff">Scissors</Heading> */}
          </CustomContainer>

          <CustomContainer bgColor="#ffff">
            <Paragraph color="#223a5f">Score</Paragraph>
            <ScoreNumContainer>
              <Paragraph>{score}</Paragraph>
            </ScoreNumContainer>
          </CustomContainer>
        </ScoreContainer>

        {choiceSelected ? this.renderResult() : this.renderGame()}
      </AppContainer>
    )
  }
}

export default Game
