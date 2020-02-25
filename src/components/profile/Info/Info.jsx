import React from 'react'

const Info = (props) => {
  return (
    <div className="block profile__block">
      <img className="block__img" src={props.mainUrl} alt="" />
      <div className="desc profile__desc">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo magni id,
          aliquam quibusdam nam ut, quos soluta harum natus, deleniti accusamus consequuntur
          molestias minima odit voluptatem numquam officia incidunt. Beatae omnis dicta vero
          cupiditate neque sunt voluptas, tempora quae. Assumenda.
          </p>
      </div>
    </div>
  )
}

export default Info
