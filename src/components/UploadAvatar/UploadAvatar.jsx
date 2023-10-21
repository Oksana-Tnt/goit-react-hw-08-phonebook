import React, { useState } from 'react';

import Avatar from 'react-avatar-edit';
import { useDispatch } from 'react-redux';
import { uploadAvatar } from 'redux/avatar/avatarSlice';

const UploadAvatar = () => {
  const [src] = useState(null);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();

  const onCrop = view => {
    setPreview(view);
  };

  console.log(preview);
  return (
    <>
      <Avatar
        src={src}
        width={300}
        height={300}
        onCrop={onCrop}
        onClose={dispatch(uploadAvatar(preview))}
      />
    </>
  );
};

export default UploadAvatar;
