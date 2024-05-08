import React ,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';
import data from '../../data.json';
import { useLanguage } from '../LanguageContext'; 


const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;
  
  const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  margin-top: 30px; 
  `;

const ButtonArea = styled.div`
    margin-top:50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `;


function MainHome(props) {
    const navigate = useNavigate();
    const [buttonValue, setButtonValue] = useState();
    const { langData } = useLanguage();
  
  
    useEffect(() => {
        if (langData === 'KoMenu') {
            setButtonValue(data[0].KoMenu);
        } else if (langData === 'EngMenu') {
            setButtonValue(data[0].EngMenu);
        }
    }, [langData]);
  
    if (!buttonValue) {
      return null; // 또는 다른 로직을 넣을 수 있습니다.
    }
    return (
        <Wrapper>
            <Container>

                <img src="https://i.ytimg.com/vi/PqJ0ogtfswY/maxresdefault.jpg" style={{width:"1000px", marginTop:"20px"}}></img>

                <ButtonArea>
                <Button
                    title={buttonValue[0].title}
                    onClick={() => {
                        navigate(`/post/1`);
                    }}
                />
                <Button
                    title={buttonValue[1].title}
                    onClick={() => {
                        navigate(`/post/2`);
                    }}
                />
                <Button
                    title={buttonValue[2].title}
                    onClick={() => {
                        navigate(`/post/3`);
                    }}
                />
                </ButtonArea>
            </Container>
        </Wrapper>
    );
}

export default MainHome;