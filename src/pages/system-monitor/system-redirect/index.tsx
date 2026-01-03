/*************************************************************************
 * Source Name : index.tsx
 * Description :
 * Created By  : NamVH
 * Date        : 11/05/2024
 *************************************************************************/
import React from "react"
import { Grid, Stack, Paper, Box, Card, Typography } from "@mui/material"
import AirflowLogo from "../../../assets/images/tools-logo/airflow-logo.png"

const SystemRedirect: React.FC = () => {
  const systems = [
    { title: "Airflow", path: "http://10.0.12.33:5555/path1" },
    { title: "Airflow", path: "/path2" },
    { title: "Airflow", path: "/path3" },
    { title: "Airflow", path: "/path3" },
    { title: "Airflow", path: "/path3" },
    { title: "Airflow", path: "/path3" },
    { title: "Airflow", path: "/path3" },
    { title: "Airflow", path: "/path3" },
    { title: "Airflow", path: "/path3" },
    { title: "Airflow", path: "/path3" },
    { title: "Airflow", path: "/path3" },
  ]

  const redirectLink = (url: string) => {
    window.open(url)
  }

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px 10px",
      }}>
      <Grid container spacing={3}>
        {systems.map((system) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  boxShadow: 4,
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#101010" : "#fff",
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                  p: 1,
                  m: 1,
                  borderRadius: 2,
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
                onClick={() => redirectLink(system.path)}>
                <div style={{ textAlign: 'center' }}>
                  <Typography variant="h3" >
                    {system.title}
                  </Typography>
                </div>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default SystemRedirect
