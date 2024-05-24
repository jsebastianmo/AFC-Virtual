import React from 'react'
import ResourceItem from './ResourceItem';

const ResourceList = ({ recursos }) => {
  return (
    <div className='recurso-clase'>
      {recursos.map((recurso, index) => (
        <ResourceItem key={index} recursoItem={recurso} />
      ))}
    </div>
  )
}

export default ResourceList;