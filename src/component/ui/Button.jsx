import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    background-color: white;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    margin-Right:50px;
    margin-Left:50px;

`;

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;