import * as S from "./styles";

type Props = {
  onClickAction: () => void;
  children: React.ReactNode;
  size: "SM" | "MD" | "LG";
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
};

export default function Button({
  onClickAction,
  children,
  size = "SM",
  primary,
  secondary,
  tertiary
}: Props) {
  return (
    <S.Button
      onClick={onClickAction}
      size={size}
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
    >
      {children}
    </S.Button>
  );
}
