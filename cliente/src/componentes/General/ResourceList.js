import React from 'react'
import ResourceItem from './ResourceItem';

const ResourceList = ({ recursos }) => {
  return (
    <div className='recurso-clase'>
      {recursos.map((recurso, index) => (
        <ResourceItem key={index} recurso={recurso} />
      ))}
    </div>
  )
}

export default ResourceList;