import { useEffect, useState } from "react";
import styled from 'styled-components';


const Container = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`;

const SportsName = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SchoolSelect = styled.div`
    display: flex;
    justify-content: space-between;
    width: 220px;
    @media (max-width: 300px)
    {
        width: 180px;
    }
`;

const SchoolBTN = styled.button`
    width: 68px;
    height: 28px;
    border-radius: 4px;
    border: none;
    color: white;
    font-size: 14px;
    font-weight: 500;
    background-color: ${(props) => (props.isActive ? 'rgba(112, 0, 255, 1)' : 'rgba(51, 51, 51, 1)')};
    @media (max-width: 300px)
    {
        width: 49px;
        height: 24px;
        font-size: 10px;
    }
`;

const ScoreSelect = styled.div`
    background-color: rgba(51, 51, 51, 1);
    width: 332px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 260px;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (max-width: 300px)
    {
        width: 250px;
    }
`;

const ScoreOption = styled.div`
    p{
        display: inline-block;
        font-size: 18px;
        font-weight: 700;
        width: 190px;
    }
    @media (max-width: 300px)
    {
        p{
            font-size: 14px;
            width: 140px;
        }
    }
`;

const BTN = styled.button`
    width: 65px;
    height: 23px;
    border-radius: 4px;
    border: none;
    font-size: 14px;
    font-weight: 500;
    background-color: ${(props) => (props.isActive ? 'rgba(112, 0, 255, 1)' : 'rgba(217, 217, 217, 1)')};
    color: ${(props) => (props.isActive ? 'white' : 'black')};
    @media (max-width: 300px)
    {
        width: 45px;
        font-size: 11px;
    }
`;

const Point = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PBTN = styled.button`
    width: 62px;
    height: 28px;
    border-radius: 4px;
    border: none;
    color: white;
    font-size: 14px;
    font-weight: 500;
    background-color: ${(props) => (props.isActive ? 'rgba(112, 0, 255, 1)' : 'rgba(51, 51, 51, 1)')};
    @media (max-width: 300px)
    {
        width: 45px;
        font-size: 11px;
    }
`;



const Sports = ({gameType, handleData, currentschool, currentscore, currentbetpoint}) => {
    const [school, setSchool] = useState(currentschool);
    const [game, setGame] = useState("");
    const [score, setScore] = useState(currentscore);
    const [betPoint, setBetPoint] = useState(currentbetpoint);
    const [option, setOption] = useState([]);

    const Baseballoption = ['1점차 예상', '2점차 예상', '3점차 예상', '4점차 이상 예상'];
    const Hockeyoption = ['1점차 예상', '2점차 예상', '3점차 예상', '4점차 이상 예상'];
    const Basketballoption = ['1-5점차 예상', '6-10점차 예상', '11-15점차 예상', '16점차 이상 예상'];
    const Rugbyoption = ['1-5점차 예상', '6-10점차 예상', '7-9점차 예상', '10점차 이상 예상'];
    const Socceroption = ['1점차 예상', '2점차 예상', '3점차 예상', '4점차 이상 예상'];

    useEffect(() => {
        if(gameType === "baseball"){
            setGame("야구 ⚾️");
            setOption(Baseballoption);
        }
        else if(gameType === "basketball"){
            setGame("농구 🏀");
            setOption(Basketballoption);
        }
        else if(gameType === "hockey"){
            setGame("빙구 🏒");
            setOption(Hockeyoption);
        }
        else if(gameType === "rugby"){
            setGame("럭비 🏉");
            setOption(Rugbyoption);
        }
        else if(gameType === "soccer"){
            setGame("축구 ⚽");
            setOption(Socceroption);
        }
    }, []);

    useEffect(() => {
        handleData([gameType, school, score, betPoint]);
        //console.log(school, score, betPoint);
    }, [school, score, betPoint]);




    const SchoolChange = (event) => {
        if(event.target.innerHTML === "고대 승")
        {
            setSchool("KOREA");
            if(score === -2){
                setScore(0);
            }
        }
        else if(event.target.innerHTML === "연대 승"){
            setSchool("YONSEI");
            if(score === -2){
                setScore(0);
            }
        }
        else if(event.target.innerHTML === "무승부"){
            setSchool("DRAW");
            setScore(-2);
        }
    }

    const ScoreChange = (selectedScore) => {
        if(selectedScore === score)
        {
            return;
        }
        setScore(selectedScore);
    }

    const betPointChange = (selectedPoint) => {
        if(selectedPoint === betPoint){
            return;
        }
        setBetPoint(selectedPoint)
    }

    return (
        <Container>
            <SportsName>
                <span style={{fontSize:"20px", fontWeight:"800"}}>{game}</span>
                <SchoolSelect>
                    <SchoolBTN isActive={school === 'KOREA'} onClick={SchoolChange}>고대 승</SchoolBTN>
                    <SchoolBTN isActive={school === 'DRAW'} onClick={SchoolChange}>무승부</SchoolBTN>
                    <SchoolBTN isActive={school === 'YONSEI'} onClick={SchoolChange}>연대 승</SchoolBTN>
                </SchoolSelect>
            </SportsName>

            <ScoreSelect>
                <ScoreOption>
                    <p>{option[0]}</p>
                    <BTN isActive={score === 0} onClick={() => ScoreChange(0)} disabled={school === "DRAW"}>선택</BTN>
                </ScoreOption>
                <ScoreOption>
                    <p>{option[1]}</p>
                    <BTN isActive={score === 1} onClick={() => ScoreChange(1)} disabled={school === "DRAW"}>선택</BTN>
                </ScoreOption>
                <ScoreOption>
                    <p>{option[2]}</p>
                    <BTN isActive={score === 2} onClick={() => ScoreChange(2)} disabled={school === "DRAW"}>선택</BTN>
                </ScoreOption>
                <ScoreOption>
                    <p>{option[3]}</p>
                    <BTN isActive={score === 3} onClick={() => ScoreChange(3)} disabled={school === "DRAW"}>선택</BTN>
                </ScoreOption>
            </ScoreSelect>
            <Point>
                <PBTN isActive={betPoint === 100} onClick={() => betPointChange(100)}>100p</PBTN>
                <PBTN isActive={betPoint === 200} onClick={() => betPointChange(200)}>200p</PBTN>
                <PBTN isActive={betPoint === 300} onClick={() => betPointChange(300)}>300p</PBTN>
                <PBTN isActive={betPoint === 400} onClick={() => betPointChange(400)}>400p</PBTN>
                <PBTN isActive={betPoint === 500} onClick={() => betPointChange(500)}>500p</PBTN>
            </Point>
        </Container>
    );
}

export default Sports;