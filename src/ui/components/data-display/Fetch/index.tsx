import { Box, CircularProgress, Typography } from "@mui/material";
import { ReactElement } from "react";

interface FetchProps<T = unknown> {
  data: T[] | undefined;
  render: (data: T[]) => ReactElement;
  mensage?: string;
  maxLength?: number;
}

type FetchComponentType = <B>(props: FetchProps<B>) => ReactElement;

const Fetch: FetchComponentType = ({ data, render, mensage, maxLength }) => {
  if (data) {
    const dataFilted = data.slice(0, maxLength);
    if (dataFilted.length === 0) {
      return <Typography>{mensage}</Typography>;
    }
    return render(dataFilted);
  }
  return (
    <Box>
      <CircularProgress />
    </Box>
  );
};

export default Fetch;
