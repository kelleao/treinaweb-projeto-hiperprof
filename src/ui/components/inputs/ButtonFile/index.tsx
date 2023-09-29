import { PropsWithChildren } from "react";
import { BoxStyled } from "./styles";

interface ButtonFileProps {
  onChange?: (files: FileList) => void;
}
export default function ButtonFile({
  children,
  onChange,
}: PropsWithChildren<ButtonFileProps>) {
  return (
    <BoxStyled>
      <label>
        <input
          type={"file"}
          style={{ width: "100px" }}
          onChange={({ target: { files } }) => {
            if (files !== null && files.length) {
              onChange?.(files);
            }
          }}
        />
        {children}
      </label>
    </BoxStyled>
  );
}
