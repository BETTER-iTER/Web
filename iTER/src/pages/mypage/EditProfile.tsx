import Top from '../../component/layout/Top';
import UserIcon from '../../assets/icon/User.svg?react';
import { styled } from '../../../stitches.config';
import { useEffect, useState, useRef } from 'react';
import InputComponent from '../../component/common/Input';
import InputSelect from '../../component/common/InputSelect';
import Button from '../../component/common/Button';
import { jobs } from '../../constants/Jobs';
import { getUserInfo } from '../../apis/Review';
import { putEditProfile } from '../../apis/User';
import { getNicknameVerify } from '../../apis/auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import ErrorPage from '../../component/common/Error';
import LoadingPage from '../../component/common/Loading';
import Toast from '../../component/common/Toast';

const EditProfile = () => {
  const [email, setEmail] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [nickName, setNickName] = useState<string>('');
  const [job, setJob] = useState<string>('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedImage = e.target.files;
    if (uploadedImage) {
      setUploadedImage(uploadedImage[0]);
    }
  };

  const mutation = useMutation(putEditProfile, {
    onSuccess: () => {
      console.log('success');
      setToast(true);
    },
    onError: () => {
      return <ErrorPage type={2} />;
    },
  });
  const handleSave = async () => {
    const nicknameResult = await getNicknameVerify(text);

    if (nicknameResult?.result) {
      const key = {
        nickname: text,
        job: job,
      };

      const data = new FormData();
      data.append('files', uploadedImage as File);
      const jsonString = JSON.stringify(key);
      const jsonBlob = new Blob([jsonString], { type: 'application/json' });
      data.append('key', jsonBlob);

      mutation.mutate(data);

      if (mutation.isSuccess) {
        setToast(true);
      }
    } else {
      setError(true);
    }
  };
  const { data, isLoading, isError } = useQuery<any, Error>(['user'], getUserInfo);

  useEffect(() => {
    if (data) {
      setJob(data?.data?.result.job);
      setText(data?.data?.result.nickName);
      setEmail(data?.data?.result.email);
      setNickName(data?.data?.result.nickName);
    }
  }, [data]);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage type={2} />;

  return (
    <Container>
      <Top title="프로필" />
      <ImageBox>
        {uploadedImage ? (
          <ProfileImage
            src={URL.createObjectURL(uploadedImage)}
            alt={nickName}
            onClick={() => fileInputRef.current?.click()}
          />
        ) : data?.data?.result.profileImage ? (
          <ProfileImage
            src={data?.data?.result.profileImage}
            alt={nickName}
            onClick={() => fileInputRef.current?.click()}
            width={100}
            height={100}
          />
        ) : (
          <UserIcon width={100} height={100} onClick={() => fileInputRef.current?.click()} />
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onChangeImage}
          style={{ display: 'none' }}
        />
      </ImageBox>

      <InputComponent type="text" labelName="이메일" text={email} />

      <InputComponent
        placeholder={text}
        type="text"
        labelName="닉네임 *"
        onChange={setText}
        error={error ? '이미 사용중인 닉네임입니다' : undefined}
        notice="한글/영문/숫자 조합 1~20자"
      />

      <InputSelect labelName="직업 *" placeholder={job} list={jobs} onChange={setJob} />

      <Bottom>
        <Button onClick={() => handleSave()}>저장하기</Button>
      </Bottom>
      {toast && <Toast message={'프로필이 저장되었습니다'} onClose={() => setToast(false)} />}
    </Container>
  );
};

export default EditProfile;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
});

const Bottom = styled('div', {
  position: 'fixed',
  bottom: '20px',
});

const ProfileImage = styled('img', {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  cursor: 'pointer',
});

const ImageBox = styled('div', {
  display: 'flex',
});
