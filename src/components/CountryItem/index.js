import {ListItem, Name, VisitButton, Visited} from './styledComponents'

const CountryItem = props => {
  const {eachCountry, onVisitButton} = props
  const {id, name, isVisited} = eachCountry

  const onClickVisit = () => {
    onVisitButton(id)
  }
  return (
    <ListItem>
      <Name>{name}</Name>

      {isVisited ? (
        <Visited>Visited</Visited>
      ) : (
        <VisitButton
          isVisited={isVisited}
          disabled={isVisited}
          onClick={onClickVisit}
        >
          Visit
        </VisitButton>
      )}
    </ListItem>
  )
}

export default CountryItem
