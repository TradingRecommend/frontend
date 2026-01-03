import React from "react";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";

interface PropCardColor {
  bgcolor: string;
  title: string;
  data: {
    label: string;
    color: string;
  };
  dark?: boolean;
  main?: boolean;
}

const ColorBox: React.FC<PropCardColor> = ({
  bgcolor,
  title,
  data,
  dark = false,
  main = false,
}) => {
  return (
    <>
      <Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 2.5,
            bgcolor,
            color: dark ? "grey.800" : "#ffffff",
            border: main ? "1px dashed" : "1px solid transparent",
          }}
        >
          {title && (
            <Grid container justifyContent="space-around" alignItems="center">
              <Grid item>
                {data && (
                  <Stack spacing={0.75} alignItems="center">
                    <Typography variant="subtitle2">{data.label}</Typography>
                    <Typography variant="subtitle1">{data.color}</Typography>
                  </Stack>
                )}
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="inherit">
                  {title}
                </Typography>
              </Grid>
            </Grid>
          )}
        </Box>
      </Card>
    </>
  );
};

export default ColorBox;
