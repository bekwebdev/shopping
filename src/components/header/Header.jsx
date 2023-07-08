import React from 'react'
import { BsChevronCompactDown } from 'react-icons/bs'
import { HiShoppingCart } from 'react-icons/hi'
import { AiFillHeart } from 'react-icons/ai'
import { RiUserSharedFill } from 'react-icons/ri'

const Header = () => {

  const handleSearch = (e) => {
    e.preventDefault()
  }
  return (
    <div className='header'>
      <div className="header-left">
        <div className="brand">
          {/* <img src={require('../../assets/images/ebRaw.png')} alt="brand rasm yo'lida halotik bor" /> */}
        </div>
      </div>
      <div className="header-center">
        <form onSubmit={handleSearch} className=''>
          <label htmlFor="search-input">
            <input
              type="text"
              id='search-input'
              placeholder='Search in 20,000 Products...'
            />
            <span>All <BsChevronCompactDown /></span>
          </label>
          <button type='submit'>
            Search
          </button>
        </form>
      </div>
      <div className="header-right">
        <HiShoppingCart />
        <AiFillHeart />
        <RiUserSharedFill />
      </div>
    </div>
  )
}

export default Header