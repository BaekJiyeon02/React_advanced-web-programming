import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import data from '../../data.json';
import Button from '../ui/Button';
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
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  border: 1.5px solid #000;
  border-radius: 8px;
  padding: 20px;
  height: 400px;
`;

const StyledInput = styled.input`
  width: 200px;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin: 8px 0 30px;
  box-sizing: border-box;
`;

function LocationInfo() {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [tel, setTel] = useState("");
    const [submittedData, setSubmittedData] = useState(null);
    const [formList, setFormList] = useState();
    const navigate = useNavigate();
    const { langData } = useLanguage();


    useEffect(() => {
        if (langData === 'KoMenu') {
            setFormList(data[0].KoMenu);
        } else if (langData === 'EngMenu') {
            setFormList(data[0].EngMenu);
        }
    }, [langData]);
  
  
    if (!formList) {
      return null; // 또는 다른 로직을 넣을 수 있습니다.
    }

  const ChangeName = (event) => {
    setName(event.target.value);
  };

  const ChangeTel = (event) => {
    setTel(event.target.value);
  };

  const ChangeTime = (event) => {
    setTime(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault(); // 폼 제출 후 페이지 새로고침 방지
    console.log(event)
    var num =Number(time)

    const data = {
      name: name,
      tel: tel,
      visitTime: formList[2].content[0].formData.timeTable[num].time,
    };
    setSubmittedData(data);
  };


  return (
    <Wrapper>
      <Container>
      {submittedData ? (
          <FormBox>
            <h2>{formList[2].title}</h2>
            <div>
              <p>{formList[2].content[0].formData.name}: {submittedData.name}</p>
              <p>{formList[2].content[0].formData.tel}: {submittedData.tel}</p>
              <p>{formList[2].content[0].formData.visitTime}: {submittedData.visitTime}</p>
            </div>
            <Button
                    title={formList[2].content[0].formData.goHome}
                    onClick={() => {
                        navigate(`/`);
                    }}
                />
          </FormBox>
        ) : (
        <FormBox>
          <h2>{formList[2].title}</h2>
          <form onSubmit={formSubmit}>
            <label>{formList[2].content[0].formData.name}:
              <br />
              <StyledInput type="text" value={name} onChange={ChangeName} />
            </label>
            <br />
            <label>{formList[2].content[0].formData.tel}:
              <br />
              <StyledInput type="number" value={tel} onChange={ChangeTel} />
            </label>
            <br />
            <label>{formList[2].content[0].formData.visitTime}:
              <StyledSelect value={time} onChange={ChangeTime}>
                <option value="0">11:00~13:00</option>
                <option value="1">13:00~15:00</option>
                <option value="2">15:00~17:00</option>
              </StyledSelect>
            </label>
            <Button type="submit" title={formList[2].button}></Button>
          </form>
          {submittedData && (
            <div>
              <p>{formList[2].content[0].formData.name}: {submittedData.name}</p>
              <p>{formList[2].content[0].formData.tel}: {submittedData.tel}</p>
              <p>{formList[2].content[0].formData.visitTime}: {submittedData.visitTime}</p>
            </div>
          )}
        </FormBox>
        )}
      </Container>
    </Wrapper>
  );
}
export default LocationInfo;
