import { FC, ReactNode, MouseEvent } from 'react';
import { ButtonText, Caption2 } from '../Font';
import { styled } from '../../../stitches.config';
import Write from '../../assets/icon/nav/Write.svg?react';
import Heart from '../../assets/icon/Heart.svg?react';
import Scrap from '../../assets/icon/Scrap.svg?react';
import ArrowDown from '../../assets/icon/ArrowDown.svg?react';
import { useMutation } from '@tanstack/react-query';
import { postFollow, deleteUnfollow } from '../../apis/User';
import ErrorPage from './Error';

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  disabled?: boolean;
  type?: string;
  active?: boolean;
  isFollow?: boolean;
  id?: number;
}

// 일반 버튼
const Button: FC<ButtonProps> = ({ onClick, children, disabled }) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <>
      <ButtonBody onClick={handleClick} disabled={disabled}>
        <ButtonText>{children}</ButtonText>
      </ButtonBody>
    </>
  );
};

export default Button;

// 글쓰기 버튼
export const ButtonWrite: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <>
      <ButtonWriteBody onClick={onClick}>
        <ButtonWriteText>
          <Write width={22} height={22} fill={'#fff'} />
          {children}
        </ButtonWriteText>
      </ButtonWriteBody>
    </>
  );
};

// 빈 버튼
export const ButtonEmpty: FC<ButtonProps> = ({ onClick, children, type, active }) => {
  return (
    <Caption2>
      <ButtonEmptyBody onClick={onClick} active={active}>
        {type == 'like' ? (
          <Heart fill={active ? '#8787F4' : '#D8DBE2'} width={20} height={20} />
        ) : type == 'scrap' ? (
          <Scrap fill={active ? '#8787F4' : '#D8DBE2'} width={20} height={20} />
        ) : (
          <></>
        )}
        {children}
      </ButtonEmptyBody>
    </Caption2>
  );
};

// 컨트롤 버튼
export const ButtonControl: FC<ButtonProps> = ({ onClick, children, type, active }) => {
  return (
    <Caption2>
      <ButtonControlBody onClick={onClick} active={active}>
        {children} {type == 'toggle' && <ArrowDown stroke={active ? '#8787F4' : '#D8DBE2'} />}
      </ButtonControlBody>
    </Caption2>
  );
};

export const ButtonBlack: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <>
      <ButtonBlackBody onClick={onClick}>
        <BittonBlackText>{children}</BittonBlackText>
      </ButtonBlackBody>
    </>
  );
};

export const ButtonPoint: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <>
      <ButtonBody style={{ backgroundColor: '#4C4E55' }} onClick={onClick}>
        <ButtonText style={{ color: '#FFF' }}>{children}</ButtonText>
      </ButtonBody>
    </>
  );
};

//선택 버튼
export const ButtonSelect: FC<ButtonProps> = ({ onClick, children, disabled }) => {
  console.log(children, '?');
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <>
      <ButtonBody1 onClick={handleClick} disabled={disabled}>
        <RText>{children}</RText>
      </ButtonBody1>
    </>
  );
};

// 팝업 버튼
export const ButtonPopup: FC<ButtonProps> = ({ onClick, children, disabled }) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <>
      <ButtonBody2 onClick={handleClick} disabled={disabled}>
        <ButtonText>{children}</ButtonText>
      </ButtonBody2>
    </>
  );
};

//댓글 작성 버튼
export const ButtonComment: FC<ButtonProps> = ({ onClick, children, disabled }) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <>
      <CommentBody onClick={handleClick} disabled={disabled}>
        <CommentText>{children}</CommentText>
      </CommentBody>
    </>
  );
};

export const ButtonFollow: FC<ButtonProps> = ({ isFollow, id }) => {
  const targetId = id ? id : 0;
  console.log('isFollow', isFollow);
  // 팔로우
  const mutationFollow = useMutation(postFollow, {
    onSuccess: () => {
      console.log('팔로우 성공');
      window.location.reload();
    },
    onError: (error) => {
      console.log('error', error);
      return <ErrorPage type={2} />;
    },
  });

  // 언팔로우
  const mutationUnfollow = useMutation(deleteUnfollow, {
    onSuccess: () => {
      console.log('언팔로우 성공');
      window.location.reload();
    },
    onError: (error) => {
      console.log('error', error);
      return <ErrorPage type={2} />;
    },
  });

  return (
    <>
      <ButtonFollowBody
        onClick={() => {
          isFollow ? mutationUnfollow.mutate(targetId) : mutationFollow.mutate(targetId);
        }}
        style={isFollow ? { backgroundColor: '#d8dbe2' } : undefined}
      >
        <ButtonText style={isFollow ? { color: '#8e9198', backgroundColor: '#d8dbe2' } : undefined}>
          {isFollow ? '팔로잉' : '팔로우'}
        </ButtonText>
      </ButtonFollowBody>
    </>
  );
};

const CommentText = styled('div', {
  fontSize: '15px',
  color: 'White',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '3px',
});
const CommentBody = styled('button', {
  width: '58px',
  height: '37px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#8E9198',
  variants: {
    disabled: {
      true: {
        backgroundColor: '#8E9198',
        cursor: 'not-allowed',
      },
      false: {
        backgroundColor: '#4C4E55',
        cursor: 'pointer',
      },
    },
  },
});

const ButtonBody2 = styled('button', {
  width: '380px',
  height: '50px',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
  border: 'none',
  backgroundColor: '$Gray50',
  color: 'white',
});

const RText = styled('div', {
  fontSize: '14px',
  fontWeight: '400',
  color: '$Gray40',
  float: 'left',
  marginLeft: '10px',
});

const ButtonBody1 = styled('button', {
  width: '340px',
  height: '50px',
  borderRadius: '10px',
  border: '1px solid $Gray10',
  backgroundColor: 'white',
});

const ButtonBody = styled('button', {
  width: '340px',
  height: '45px',
  borderRadius: '8px',
  backgroundColor: '$Brand',
  border: 'none',
  color: '$White',
  variants: {
    disabled: {
      true: {
        backgroundColor: '$Gray20',
        cursor: 'not-allowed',
      },
      false: {},
    },
  },
});

const ButtonWriteBody = styled('button', {
  width: '340px',
  height: '45px',
  borderRadius: '22.5px',
  backgroundColor: '$Brand',
  border: 'none',
});

export const ButtonWriteText = styled('div', {
  fontSize: '14px',
  fontWeight: '600',
  color: '$White',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8.5px',
});

const ButtonEmptyBody = styled('button', {
  width: '154px',
  height: '30px',
  borderRadius: '20px',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
  variants: {
    active: {
      true: {
        color: '$Brand',
        border: '1px solid $Brand',
      },
      false: {
        color: '$Gray30',
        border: '1px solid $Gray10',
      },
    },
  },
});

const ButtonControlBody = styled('button', {
  borderRadius: '24px',
  padding: '7px 12px',
  border: '1px solid $Gray10',
  backgroundColor: 'transparent',
  color: '$Grey600',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
  variants: {
    active: {
      true: {
        border: '1px solid $Brand',
        color: '$Brand',
      },
      false: {
        border: '1px solid $Gray10',
        color: '$Gray30',
      },
    },
  },
});

const ButtonBlackBody = styled('button', {
  borderRadius: '10px',
  backgroundColor: '$TitleBlack',
  border: 'none',
  padding: '10px 30px',
});

const BittonBlackText = styled('div', {
  bodyText: 2,
  color: '$White',
});

const ButtonFollowBody = styled('button', {
  width: '96px',
  height: '35px',
  borderRadius: '10px',
  backgroundColor: '#242424',
  color: '$White',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bodyText: 2,
  cursor: 'pointer',
});
