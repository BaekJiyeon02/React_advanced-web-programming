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
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 100%;
  max-width: 1000px;
  border: 1.5px solid #000;
  border-radius: 8px;
  padding : 20px;
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

function LocationInfo() {
  const [locationValue, setLocationValue] = useState();
  const { langData } = useLanguage();


  useEffect(() => {
      if (langData === 'KoMenu') {
        setLocationValue(data[0].KoMenu);
      } else if (langData === 'EngMenu') {
        setLocationValue(data[0].EngMenu);
      }
  }, [langData]);

  if (!locationValue) {
    return null; // 또는 다른 로직을 넣을 수 있습니다.
  }
  return (
    <Wrapper>
      <Container>
        <ContentBox>
          <ImgBox>
            <img src={locationValue[1].content[0].src} style={{ width: "700px"}}/>
          </ImgBox>
          <Content>
            <h4>{locationValue[1].content[0].content}</h4>
          </Content>
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default LocationInfo;
