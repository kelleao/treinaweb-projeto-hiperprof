import { TextFormatService } from "@data/services/TextFormatService";
import { TextField, TextFieldProps } from "@mui/material";
import { ChangeEvent } from "react";

function changeFormatter(event: ChangeEvent<{ value: string }>) {
  if (!event.target) return;
  const value = event.target.value;

  const onlyDigitals = value
    .split("")
    .filter((s) => /\d/.test(s))
    .join("")
    .padStart(2, "0");

  const digitalsFloat =
    onlyDigitals.slice(0, -2) + "." + onlyDigitals.slice(-2);
  event.target.value = TextFormatService.currency(digitalsFloat);
}

export default function CurrencynputMask(props: TextFieldProps) {
  return (
    <TextField
      onInput={(e) => changeFormatter(e as ChangeEvent<any>)}
      {...props}
    />
  );
}
