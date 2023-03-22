import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 60px;
  border-bottom: 1px solid #94a3b8;
  background-color: #1f1f2f;
`

export const Name = styled.p`
  color: #f1f5f9;
  font-size: 16px;
  font-family: 'Roboto';
`

export const VisitButton = styled.button`
  color: #fff;
  background-color: #3b82f6;
  height: 32px;
  width: 80px;
  outline: none;
  border: 0;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
`

export const Visited = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  margin-right: 18px;
`
