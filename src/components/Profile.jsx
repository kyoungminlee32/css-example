import React from 'react';
import Avatar from './Avatar';

export default function Profile({img_profile,name,title,alt,isNew}) {
  return (
    <>
    <div className="profile">
      <Avatar 
        photo = {img_profile}
        alt = {alt}
        isNew = {isNew}
      />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
    </>
  );
}
