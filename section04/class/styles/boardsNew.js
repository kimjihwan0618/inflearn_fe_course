import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  padding: 60px 101px 100px;
  width: 62.5%;
  margin: 101px auto;
  min-width: 920px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const ContentTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 80px;
  text-align: center;
`;

export const FormWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const FormItem = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ItemTitle = styled.div`
  font-size: 16px;
  margin-bottom: 21px;
`;

export const ItemInput = styled.input`
  font-size: 16px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 14px 16px;
  height: 52px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const UploadButtonWrapper = styled.div`
  display: flex;
`;
export const ImageUploadButton = styled.button`
  width: 78px;
  height: 78px;
  background: #bdbdbd;
  margin-right: 24px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    color: #4f4f4f;
    font-size: 24px;
  }
  p {
    font-size: 12px;
    font-weight: 500;
    color: #4f4f4f;
    padding: 0px;
  }
`;

export const RadioItem = styled.div`
  display: flex;
  & > label {
    margin-left: 8px;
  }
  & > label:first-of-type {
    margin-right: 20px;
  }
  & > input[type='radio'] {
    width: 20px;
    height: 20px;
    accent-color: #ffd600;
    background-color: #ffd600;
  }
`;

export const ItemTextArea = styled.textarea`
  font-size: 16px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 14px 16px;
  min-height: 480px;
  resize: none;
`;

export const PostSearchItem = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 40px;
  flex-wrap: wrap;
  & > div {
    margin-bottom: 0px;
  }
  & > div:nth-of-type(2) {
    margin-top: 16px;
    margin-bottom: 30px;
  }
`;
export const DetailAddressInput = styled.input`
  font-size: 16px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 14px 16px;
  height: 52px;
`;
export const PostSearchButton = styled.button`
  background: #000;
  padding: 14px 16px;
  box-sizing: border-box;
  margin-left: 16px;
  color: white;
  white-space: nowrap;
  height: 52px;
`;
export const RegisterButton = styled.button`
  background: #000;
  padding: 14px 16px;
  box-sizing: border-box;
  margin-left: 16px;
  color: white;
  white-space: nowrap;
  height: 52px;
  width: 179px;
  margin-top: 80px;
  background: #ffd600;
  color: #000;
  margin: 0 auto;
  font-weight: 500;
  outline: none;
  border: none;
`;

export const FormItemError = styled.p`
  color: red;
  font-size: 16px;
  margin-top: 4px;
`;
