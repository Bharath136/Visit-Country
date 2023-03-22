import styled from 'styled-components'

export const CountriesContainer = styled.div`
  min-height: 100vh;
  background-color: #161624;
  padding: 10px 40px;
`

export const Container = styled.div``

export const Heading = styled.h1`
  color: #fff;
  font-size: 26px;
  font-family: 'Roboto';
`

export const CountriesList = styled.ul`
  list-style-type: none;
  padding: 0;
  height: 50vh;
  overflow: auto;
  border: 1px solid #94a3b8;
  border-radius: 8px;
`

export const VisitedCountriesList = styled.ul`
  list-style-type: none;
  padding: 0;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const NoVisitContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
`

export const NotVisited = styled.p`
  color: #94a3b8;
  font-size: 18px;
  font-family: 'Roboto';
`
