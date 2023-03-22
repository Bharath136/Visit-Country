import {Component} from 'react'

import CountryItem from '../CountryItem'
import VisitedCountryItem from '../VisitedCountryItem'

import {
  CountriesContainer,
  Container,
  Heading,
  CountriesList,
  VisitedCountriesList,
  NoVisitContainer,
  NotVisited,
} from './styledComponents'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class Countries extends Component {
  state = {
    initialList: initialCountriesList,
    visitedCountriesList: [],
  }

  componentDidMount() {
    const {initialList} = this.state
    const updatedVisitedCountries = initialList
      .filter(eachCountry => eachCountry.isVisited)
      .map(eachCountry => ({
        id: eachCountry.id,
        name: eachCountry.name,
        imageUrl: eachCountry.imageUrl,
      }))

    this.setState(prevState => ({
      visitedCountriesList: [
        ...prevState.visitedCountriesList,
        ...updatedVisitedCountries,
      ],
    }))
  }

  onVisitButton = countryId => {
    const {initialList} = this.state
    const updatedCountriesList = initialList.map(eachCountry => {
      if (eachCountry.id === countryId) {
        return {
          ...eachCountry,
          isVisited: !eachCountry.isVisited,
        }
      }
      return eachCountry
    })

    const newVisitedCountry = updatedCountriesList.find(
      eachCountry => eachCountry.id === countryId && eachCountry.isVisited,
    )

    if (newVisitedCountry) {
      const {id, name, imageUrl} = newVisitedCountry
      this.setState(prevState => ({
        initialList: updatedCountriesList,
        visitedCountriesList: [
          ...prevState.visitedCountriesList,
          {id, name, imageUrl},
        ],
      }))
    } else {
      this.setState({initialList: updatedCountriesList})
    }
  }

  onRemoveButton = id => {
    const {initialList, visitedCountriesList} = this.state
    const updatedCountriesList = initialList.map(eachCountry => {
      if (eachCountry.id === id) {
        return {
          ...eachCountry,
          isVisited: !eachCountry.isVisited,
        }
      }
      return eachCountry
    })

    const updatedVisitedCountries = visitedCountriesList.filter(
      eachCountry => eachCountry.id !== id,
    )
    this.setState({
      initialList: updatedCountriesList,
      visitedCountriesList: updatedVisitedCountries,
    })
  }

  render() {
    const {initialList, visitedCountriesList} = this.state

    return (
      <CountriesContainer>
        <Container>
          <Heading>Countries</Heading>
          <CountriesList>
            {initialList.map(eachCountry => (
              <CountryItem
                key={eachCountry.id}
                eachCountry={eachCountry}
                onVisitButton={this.onVisitButton}
              />
            ))}
          </CountriesList>
        </Container>
        <Container>
          <Heading>Visited Countries</Heading>
          {visitedCountriesList.length === 0 ? (
            <NoVisitContainer>
              <NotVisited>No Countries Visited Yet!</NotVisited>
            </NoVisitContainer>
          ) : (
            <VisitedCountriesList>
              {visitedCountriesList.map(eachCountry => (
                <VisitedCountryItem
                  key={eachCountry.id}
                  eachCountry={eachCountry}
                  onRemoveButton={this.onRemoveButton}
                />
              ))}
            </VisitedCountriesList>
          )}
        </Container>
      </CountriesContainer>
    )
  }
}

export default Countries
