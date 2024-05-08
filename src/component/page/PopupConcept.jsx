import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  
  const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  `;
  
  const Content = styled.div`
  justify-content: center;
  `;
  
  const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-Right: 30px;
`;

function PopupConcept() {
  const { langData } = useLanguage();



  const [conceptValue, setConceptValue] = useState('1');

  var listOne = langData === 'KoMenu' ? data[0].KoMenu[0].concept.one : data[0].EngMenu[0].concept.one;
  var listTwo = langData === 'KoMenu' ? data[0].KoMenu[0].concept.two : data[0].EngMenu[0].concept.two;
  const [listValue, setListValue] = useState(listOne);

  useEffect(() => {
    // conceptValue가 변경될 때마다 listValue 업데이트
    if (conceptValue === '1') {
      setListValue(listOne);
    } else if (conceptValue === '2') {
      setListValue(listTwo);
    }
  }, [conceptValue, listOne, listTwo]);

  return (
    <Wrapper>
      <Container>
        <ContentBox>
          <ImgBox>
            <img src={listValue.src} style={{ width: "700px"}} alt="" />
          </ImgBox>
          <Content>
            <select
              value={conceptValue}
              onChange={(event) => {
                setConceptValue(event.target.value);

              }}
            >
              <option value="1">BOY MEETS TOMBOY</option>
              <option value="2">(COMMING SOON)STUDIO TOMBOY X ALEX DODGE</option>
            </select>
            <h2>{listValue.title}</h2>
            <p>{listValue.content}</p>
          </Content>
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default PopupConcept;
