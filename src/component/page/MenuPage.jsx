import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import data from '../../data.json';
import { useLanguage } from '../LanguageContext'; // LanguageContext 파일 경로에 맞게 수정

const Wrapper = styled.div`
    margin-top:20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

const Container = styled.div`    
    border: 1.5px solid #000;
    border-radius: 8px;
`;


function MenuPage(props) {
    
    
    const { langData, switchLanguage } = useLanguage();
    const [langValue, setLangValue] = useState(data[0].KoMenu);

    useEffect(() => {
        if (langData === 'KoMenu') {
            setLangValue(data[0].KoMenu);
        } else if (langData === 'EngMenu') {
            setLangValue(data[0].EngMenu);
        }
    }, [langData]);


    const navigate = useNavigate();
    return (
        <Wrapper>
            <Container>

                <ul style={{ width: '1400px', display: 'flex', listStyle: 'none', padding: 0, justifyContent: 'center' }}>
                    <img src='https://image.sivillage.com/upload/C00001/dspl/banner/8580/862/220600000258862.png'
                        onClick={() => {
                            navigate(`/`);
                        }} style={{ width: "90px", height: "45px", marginRight: '60px', marginBottom: '10px', marginTop: '10px', cursor: 'pointer'}} />
                    <li className='menuLi' style={{ width: '120px', margin: '20px', marginBottom:'10px'}}>
                        <a onClick={() => {
                            navigate(`/post/${langValue[0].id}`);
                        }}>{langValue[0].title}</a>
                    </li>

                    <li className='menuLi' style={{ width: '120px', margin: '20px', marginBottom:'10px' }}>


                        <a onClick={() => {
                            navigate(`/post/${langValue[1].id}`);
                        }}>{langValue[1].title}</a>
                    </li>

                    <li className='menuLi' style={{ width: '100px', margin: '20px', marginBottom:'10px' }}>
                        <a onClick={() => {
                            navigate(`/post/${langValue[2].id}`);
                        }}>{langValue[2].title}</a>
                    </li>

                    <li className='menuLi' style={{ width: '120px', margin: '20px', marginBottom:'10px' }}>
                        <a onClick={() => {
                            navigate(`/post/${langValue[3].id}`);
                        }}>{langValue[3].title}</a>
                    </li>

                    <li className='menuLi' style={{ width: '115px', margin: '20px', marginBottom:'10px' }}>
                        <a onClick={() => {
                            navigate(`/post/${langValue[4].id}`);
                        }}>{langValue[4].title}</a>
                    </li>

                    <li>
                    <select
              value={langData}
              onChange={(event) => {
                switchLanguage(event.target.value); 
            }}
        
            >
              <option value="KoMenu">한국어🇰🇷</option>
              <option value="EngMenu">English🇺🇸</option>
            </select>
                    </li>
                </ul>

            </Container>
        </Wrapper>
    );
}

export default MenuPage;