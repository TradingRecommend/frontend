import { Box } from "@mui/material";
interface Ipicture {
  srcImg: string;
}

export default function Picture(props: Ipicture) {
  const { srcImg } = props;
  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <img src={srcImg} alt="" />
    </Box>
  );
}
