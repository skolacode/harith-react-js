import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Center } from './HomeStyle';
import { routeNames } from '../routes/routesName'
import { MenuAppBar, Header, MyButton } from '../../../components'
import { TextField } from '@mui/material';
import { Box } from '@mui/system';


export const HomePage = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [countryList, setCountryList] = useState([])
  const [countryDetails, setCountryDetails] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const callApi = () => {
    setIsLoading(true)
    fetch(`https://api.nationalize.io?name=${name}`, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(res => {
      if(res.error) {
        throw res
      }

      console.log('res success: ', res)

      setCountryList(res.country)

      setIsLoading(false)
    })
    .catch(err => {
      console.log('err: ', err)
      setCountryList([])
      setIsLoading(false)
    })
  }

  const getCountry = () => {
    setIsLoading(true)
    fetch(`https://restcountries.com/v3.1/alpha/${country}`, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(res => {
      if(res.error) {
        throw res
      }

      console.log('res success: ', res)

      setCountryDetails(res)

      setIsLoading(false)
    })
    .catch(err => {
      console.log('err: ', err)
      setCountryList([])
      setIsLoading(false)
    })
  }

  useEffect(() => {
    // .... what ever inside here
    console.log('i run...')
    callApi()
  }, [])

  return (
    <>
    <MenuAppBar />
    <Center>
      <Header title="Welcome Home" />
      <br />

      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue={name}
        onChange={(evt) => setName(evt.target.value)}
      />
      
      <MyButton variant="outlined" onClick={callApi} sx={{ mt: 1 }}>Call API</MyButton>

      {
        isLoading && <p>Loading...</p>
      }

      <Box>
        {
          countryList.length === 0 && name !== '' 
          ?
          <p>Sorry, your name is not famous</p>
          :
          countryList.length > 0 &&
          <Box>
            {
              countryList.map((each, key) => (
                <Box key={key}>
                  <p>{each.country_id}</p>
                  <p>{each.probability}</p>
                </Box>
              ))
            }
          </Box>
        }
      </Box>

      <TextField sx={{ mt: 2 }}
        required
        id="outlined-required"
        label="Required"
        defaultValue={country}
        onChange={(evt) => setCountry(evt.target.value)}
      />

      <MyButton variant="outlined" onClick={getCountry} sx={{ mt: 1 }}>Get Country</MyButton>

      {countryDetails.length > 0 &&
          <Box>
            {
              countryDetails.map((each, key) => (
                <Box key={key}>
                  <p>{each.name.official}</p>
                  <img src={each.flags.png} width="350" height="200" alt="Country's Flag"/>
                </Box>
              ))
            }
      </Box>}

      <br />
      <MyButton 
        onClick={() => navigate(routeNames.CONTACT)}
        sx={{ mt: 5 }}
      >
        Contact US
      </MyButton>
    </Center>
    </>
  )
}
