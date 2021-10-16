import React from 'react';

const List = ({people}) => {
  let list = people.map((person)=>{
    const {id,age,birthdate,name,image} = person
    return(
      <article key={id} className='person'>
        <img src={image} alt={name}/>
        <div>
          <h4>{name}</h4>
          <p>BirthDate : {birthdate} </p>
          <p>Age : {age} years </p>
        </div>
      </article>
    )
  })
  return (
    <>
      {list}
    </>
  );
};

export default List;
