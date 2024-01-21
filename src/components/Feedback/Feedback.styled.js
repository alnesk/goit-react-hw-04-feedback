import styled from '@emotion/styled';

export const FeedbackList = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const FeedbackButton = styled.button`
  cursor: pointer;
  padding: 15px 30px;
  min-width: 100px;
  font-size: 18px;
  font-weight: 600;
  color: inherit;
  border: none;
  border-radius: 10px;
  background-color: rgb(26, 127, 141);
  box-shadow: 0 0 7px rgb(26, 127, 141);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 50px;
  :hover {
    background-color: transparent;
    box-shadow: 0 0 10px rgb(14, 82, 91);
  }
`;
