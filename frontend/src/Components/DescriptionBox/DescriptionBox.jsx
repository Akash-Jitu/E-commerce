import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An E-Commerce website is an online platform that facilitate
            buying and selling of products or services over the internet
            serves as a virtual marketplace where buiisnesses and individuals
            can showcase their products, interact with customersand conduct 
            transections without the need for a physical presence. E-Commerce
            websites have gained immunse popularity due to their convenial accessibility, and 
            the global reach they offer.
        </p>
        <p>
            E-Commerce websites typically display products or services along with detailed description, image,
            prices, and any available variations(eg. size, colors). Each product usally has its own dedicated page
            with relevent information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
