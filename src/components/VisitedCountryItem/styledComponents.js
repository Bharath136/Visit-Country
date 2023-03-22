import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  background-color: #1f1f2f;
  flex-shrink: 1;
`

export const Image = styled.img`
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 30px;
`

export const Name = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto';
`

export const RemoveButton = styled.button`
  background-color: transparent;
  height: 34px;
  width: 80px;
  outline: none;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
`
