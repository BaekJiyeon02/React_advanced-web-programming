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

function BrandInfo() {
  const [brandValue, setBrandValue] = useState(data[0].KoMenu);
  const { langData } = useLanguage();


  useEffect(() => {
      if (langData === 'KoMenu') {
        setBrandValue(data[0].KoMenu);
      } else if (langData === 'EngMenu') {
        setBrandValue(data[0].EngMenu);
      }
  }, [langData]);


  if (!brandValue) {
    return null; // 또는 다른 로직을 넣을 수 있습니다.
  }
  return (
    <Wrapper>
      <Container>
        <ContentBox>
          <ImgBox>
            <img src={brandValue[3].content.src} style={{ width: "550px"}} alt="" />
          </ImgBox>
          <Content>
            <h2>STUDIO TOMBOY</h2>
            <p>{brandValue[3].content.content}</p>
          </Content>
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default BrandInfo;
