import * as S from "./styles";

type Props = {
  handleClick: () => void;
  children: React.ReactNode;
  size: "SM" | "MD" | "LG";
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
};

export default function Button({
  handleClick,
  children,
  size = "SM",
  primary,
  secondary,
  tertiary
}: Props) {
  return (
    <S.Button
      onClick={handleClick}
      size={size}
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
    >
      {children}
    </S.Button>
  );
}
