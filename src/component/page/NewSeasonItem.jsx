
import React, { useState,useEffect } from 'react';
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
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  max-width: 1000px;
  border: 1.5px solid #000;
  border-radius: 8px;
  padding: 20px;
  height: 400px;
  cursor: pointer;
  margin:40px
`;

const ImgBox=styled.img`
    width:230px;
    border: 1.5px solid #000;
    border-radius: 8px;
    `


function NewSeasonItem() {
    const { langData } = useLanguage();
    const [itemList, setItemList] = useState();

    useEffect(() => {
        if (langData === 'KoMenu') {
            setItemList(data[0].KoMenu);
        } else if (langData === 'EngMenu') {
            setItemList(data[0].EngMenu);
        }
    }, [langData]);

    const clickItem = () => {

        alert(itemList[4].alert);

    }
    if (!itemList) {
        return null; // 또는 다른 로직을 넣을 수 있습니다.
      }

    return (
        <Wrapper>
            <Container>
                <h2>{itemList[4].title}</h2>
                {itemList[4].content.map((li) => (
                    <ItemBox onClick={clickItem} key={li.id}>
                        <ImgBox src={li.src} />
                        <h4>{li.title}</h4>
                    </ItemBox>
                ))}
            </Container>
        </Wrapper>
    );
}
export default NewSeasonItem;
