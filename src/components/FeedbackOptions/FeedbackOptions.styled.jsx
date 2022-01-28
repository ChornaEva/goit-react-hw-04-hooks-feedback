import styled from "styled-components";

export const FeedbackContainer = styled.div`
  margin: 30px auto;
  max-width: 250px;
  background-color: white;
  /* box-shadow: 0 0 15px 0 rgba(158, 154, 154, 0.4); */
  border-radius: 8px;
`;
export const ButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ButtonItem = styled.li`
  padding: 10px;
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 13px;
  color: gray;
`;

export const FeedbackButton = styled.button`
  border-radius: 4px;
  border: none;
  width: 60px;
  height: 40px;
  text-transform: capitalize;

  &:hover {
    background-color: #2ea8ee;
    color: white;
  }
`;
