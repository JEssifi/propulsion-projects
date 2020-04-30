import styled from "styled-components";


export const BaseForm = styled.input`
  height: 15%;
  width:35%;
  text-align: left;
  text-align:left;
  padding-left: 1%;
  ::placeholder{
    color: #000000;
  }
  :focus {
    outline: none
  }
`;

export const UsernamePwdForm = styled(BaseForm)`
  height: 15%;
  width:100%;
  text-align: left;
  text-align:left;
  font-weight: bold;
  margin-top: 0.05%;
  margin-bottom: 0.05%;
  border: solid 1px #ebebeb;
  padding-left:5%;
  ::placeholder {
    color: #979797;
    font-weight: 400;
  }
  border-radius:3px
`;

export const UsernamePwdFormContainer  = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  `;

