import React from 'react';
export default function Avatar({photo,alt,isNew}) {
  return (
    <>
      <div className="avatar">
        {/* <img src="https://images.unsplash.com/photo-1673905110319-20284ef6f87d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="avata" className="photo" /> */}
        <img 
          className="photo"
          src={photo}
          alt={alt} 
        />
        {
          isNew && <span className="new">new</span>
        }
      </div>
    </>
  );
}
