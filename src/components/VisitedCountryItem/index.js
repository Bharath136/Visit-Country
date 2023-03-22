import {
  ListItem,
  Image,
  Container,
  Name,
  RemoveButton,
} from './styledComponents'

const VisitedCountryItem = props => {
  const {eachCountry, onRemoveButton} = props
  const {id, name, imageUrl} = eachCountry
  const onRemoveItem = () => {
    onRemoveButton(id)
  }
  return (
    <ListItem>
      <Image src={imageUrl} alt="thumbnail" />
      <Container>
        <Name>{name}</Name>
        <RemoveButton type="button" onClick={onRemoveItem}>
          Remove
        </RemoveButton>
      </Container>
    </ListItem>
  )
}

export default VisitedCountryItem
