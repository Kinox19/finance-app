import './SearchBar.css'
import React from 'react'
import SearchInput from '../searchInput/SearchInput'
import AddWidgetButton from '../addWidgetButton/AddWidgetButton'
import partyPopper from '../../assets/party-popper_1f389.png'

const SearchBar = (children) => {
  const name = localStorage.getItem('name')
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
  return (
    <div className='search-bar'>
      <div className='user__info'>
        <h3 className='user__name'>Hello, {name ? name: 'Guest'}<img className='user__greetings-img' src={partyPopper} alt='party popper'/></h3>
        <p className='date'>Today is {formattedDate}</p>
      </div>
      <SearchInput>{children}</SearchInput>
      <AddWidgetButton/>
    </div>
  )
}

export default SearchBar