import React from 'react'
import './passport.scss'
import { Input } from 'antd'
const Passport = () => {
  return (
    <>
      <div className="passport">
        <div className="search">
          <h1>Pasport nömrəsinə görə axtarış</h1>
          <div className="form">
            <Input className='input' placeholder="" />
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M12.4584 22.75C18.1423 22.75 22.7501 18.1422 22.7501 12.4583C22.7501 6.77436 18.1423 2.16663 12.4584 2.16663C6.77448 2.16663 2.16675 6.77436 2.16675 12.4583C2.16675 18.1422 6.77448 22.75 12.4584 22.75Z" stroke="black" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/><path d="M23.8334 23.8333L21.6667 21.6666" stroke="black" stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Passport