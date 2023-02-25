import React, { useState, useEffect } from 'react';
import { Buffer } from "buffer";
import { SlRefresh } from "react-icons/sl";
import multiavatar from '@multiavatar/multiavatar';
import { AvatarContainer } from 'assets/styledComponents/Feature/Avatar';

const Avatar: React.FC = () => {
  const [avatars, setAvatars] = useState<string[]>([]);
  const [indexOfselectAvatar, setIndexOfSelectAvatar] = useState<number|null>(null);

  const fetchQueryAvatars = () => {
    const imageArray: string[] = [];
    for (let i = 0; i < 4; i++) {
      const image = multiavatar(Math.round(Math.random() * 1000).toString());
      const buffer = new Buffer(image);
      imageArray.push(buffer.toString("base64"));
    }
    if (imageArray.length > 0) {
      setAvatars(imageArray);
    }
  }
  
  const handleRefreshBtn = () => {
    fetchQueryAvatars();
    setIndexOfSelectAvatar(null)
  }

  useEffect(() => {
    fetchQueryAvatars();
  }, []);

  console.log('avatars', avatars);

  const handleConfirmBtn = () => {
    if (indexOfselectAvatar) {
      const avatar = avatars[indexOfselectAvatar]
      console.log('avatar', avatar);
    }
  }

  return (
    <AvatarContainer>
      <h1 className="color-white">Pick your own avatar</h1>
      <div className="d-flex justify-content-center my-3">
        {
          avatars.map((avatar, index) => (
            <div key={index} className="p-4">
              <img
                className={`${indexOfselectAvatar === index ? "selected" : ""}`}
                src={`data:image/svg+xml;base64,${avatar}`}
                alt="avatar"
                key={index}
                onClick={() => setIndexOfSelectAvatar(index)}
              />
            </div>
          ))
        }
      </div>
      <button className="my-3" type="button" onClick={handleRefreshBtn}><SlRefresh /></button>
      <button className="button-main my-3" type="submit" onClick={handleConfirmBtn}>Confirm</button>
    </AvatarContainer>
  )
}

export default Avatar;