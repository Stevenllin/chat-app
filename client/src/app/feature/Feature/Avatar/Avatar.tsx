import React, { useState, useEffect } from 'react';
import storageService from 'app/core/service/storageService';
import apiService from 'app/api/service/apiService';
import { useHistory } from 'react-router';
import { useSelector } from "react-redux";
import { RootState } from 'app/store/types';
import { ROUTES } from 'app/core/router/path';
import { StorageKeysEnum } from 'app/core/enum/storage';
import { Buffer } from "buffer";
import { SlRefresh } from "react-icons/sl";
import multiavatar from '@multiavatar/multiavatar';
import { AvatarContainer } from 'assets/styledComponents/Feature/Avatar';
import { executeUpdateAvatarAction } from 'app/store/feature/Auth/action';

const Avatar: React.FC = () => {
  const routerHistory = useHistory();
  const user = JSON.parse(storageService.getItem(StorageKeysEnum.Authorization)).user;
  const currentUser = useSelector((state: RootState) => state.features.auth.user);
  const [avatars, setAvatars] = useState<string[]>([]);
  const [indexOfselectAvatar, setIndexOfSelectAvatar] = useState<number|null>(null);
  console.log('currentUser', currentUser);

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
    if (currentUser.avatarImage) {
      routerHistory.replace(ROUTES.FEATURES_CHATROOM)
    } else {
      fetchQueryAvatars();
    }
  }, []);

  const handleConfirmBtn = async () => {
    if (indexOfselectAvatar) {
      const response = await apiService.postAuthSetAvatar({
        image: avatars[indexOfselectAvatar]
      }, user._id);
      if (response) {
        storageService.setItem(StorageKeysEnum.Authorization, JSON.stringify({
          user: {
            ...user,
            isAvatarImageSet: true,
            avatarImage: avatars[indexOfselectAvatar]
          }
        }));
        executeUpdateAvatarAction({
          user: {
            ...user,
            isAvatarImageSet: true,
            avatarImage: avatars[indexOfselectAvatar]
          }
        })
        window.location.reload()
      }
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