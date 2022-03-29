import { CSSProperties, ReactNode } from 'react';
import { LoadingButton } from '@mui/lab';

type ButtonLoadingProps = {
  loading?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  type?: 'button' | 'submit' | 'reset';
  size?: 'large' | 'small' | 'medium';
  children: ReactNode | string;
  fullWidth?: boolean;
  style?: CSSProperties;
};

export const ButtonLoading = ({
  children,
  loading,
  type,
  variant,
  size,
  fullWidth = false,
  style,
}: ButtonLoadingProps) => {
  return (
    <LoadingButton
      style={style}
      loading={loading}
      type={type}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
    >
      {children}
    </LoadingButton>
  );
};
