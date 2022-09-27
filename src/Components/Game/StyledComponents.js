import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 60vw;
  padding: 20px;
  font-family: 'roboto';
`

export const ScoreContainer = styled.div`
  border-radius: 10px;
  border: 2px solid white;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  width: 80%;
  height: 20%;
`

export const Paragraph = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 500;
  padding: 0px;
  margin: 0px;
  font-family: 'Roboto';
`

export const ScoreNumContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Bree Serif';
  background-color: ${props => props.bgColor};
  border-radius: 17px;
  padding: 15px;
  margin: 15px;
  align-items: center;
`

export const PlayingList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  margin: 50px;
  padding: 35px;
  flex-wrap: wrap;
  // border: 3px solid goldenrod;
  display: flex;
  flex-direction: row;
  width: 60%;
  flex-wrap: wrap;
  justify-content: center;
`

export const RulesButton = styled.button`
  background-color: white;
  align-self: flex-end;
  padding: 10px;
  font-weight: 700;
  border-radius: 5px;
  opacity: ${props => (props.RulesOpen ? 0.5 : 1)};
`

export const Heading = styled.h1`
  color: white;
  font-family: 'Bree Serif';
  font-size: 16px;
  font-weight: 500;
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
`

export const RulesContainer = styled.div`
  width: 100%;
  height: 100%;

  margin: 0px;
`

export const ChoiceImage = styled.img`
  height: 150px;
  width: 150px;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  // border: 2px solid red;
`

export const ChoiceImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 50px;
  padding: 40px;
  // border: 2px solid red;
`

export const PlayAgainButton = styled.button`
  padding: 15px;
  border: none;
  color: black;
  background-color: white;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
`

// export default CustomContainer
