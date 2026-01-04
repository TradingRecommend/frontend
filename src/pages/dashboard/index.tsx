import React from 'react'
import { Grid, Stack, Paper } from '@mui/material'
import ColorBox from '../../components/cardColor'

const DashboardDefault: React.FC = () => {
  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Stack spacing={2}>
            <ColorBox bgcolor='primary.lighter' data={{ label: 'Blue-1', color: '#e6f7ff' }} title='primary.lighter' dark />
            <ColorBox bgcolor='primary.200' data={{ label: 'Blue-3', color: '#91d5ff' }} title='primary[200]' dark />
            <ColorBox bgcolor='primary.light' data={{ label: 'Blue-4', color: '#69c0ff' }} title='primary.light' dark />
            <ColorBox bgcolor='primary.main' data={{ label: 'Blue-6', color: '#1890ff' }} title='primary.main' main />
            <ColorBox bgcolor='primary.dark' data={{ label: 'Blue-7', color: '#096dd9' }} title='primary.dark' />
            <ColorBox bgcolor='primary.darker' data={{ label: 'Blue-9', color: '#003a8c' }} title='primary.darker' />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Stack spacing={2}>
            <ColorBox bgcolor='secondary.lighter' data={{ label: 'Grey-1', color: '#fafafa' }} title='secondary.lighter' dark />
            <ColorBox bgcolor='secondary.200' data={{ label: 'Grey-3', color: '#f0f0f0' }} title='secondary[200]' dark />
            <ColorBox bgcolor='secondary.light' data={{ label: 'Grey-4', color: '#d9d9d9' }} title='secondary.light' dark />
            <ColorBox bgcolor='secondary.main' data={{ label: 'Grey-6', color: '#8c8c8c' }} title='secondary.main' main />
            <ColorBox bgcolor='secondary.dark' data={{ label: 'Grey-8', color: '#262626' }} title='secondary.dark' />
            <ColorBox bgcolor='secondary.darker' data={{ label: 'Grey-10', color: '#000000' }} title='secondary.darker' />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Stack spacing={2}>
            <ColorBox bgcolor='success.lighter' data={{ label: 'Green-1', color: '#f6ffed' }} title='success.lighter' dark />
            <ColorBox bgcolor='success.light' data={{ label: 'Green-4', color: '#95de64' }} title='success.light' dark />
            <ColorBox bgcolor='success.main' data={{ label: 'Green-6', color: '#52c41a' }} title='success.main' main />
            <ColorBox bgcolor='success.dark' data={{ label: 'Green-8', color: '#237804' }} title='success.dark' />
            <ColorBox bgcolor='success.darker' data={{ label: 'Green-10', color: '#092b00' }} title='success.darker' />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Stack spacing={2}>
            <ColorBox bgcolor='error.lighter' data={{ label: 'Red-1', color: '#fff1f0' }} title='error.lighter' dark />
            <ColorBox bgcolor='error.light' data={{ label: 'Red-4', color: '#ff7875' }} title='error.light' dark />
            <ColorBox bgcolor='error.main' data={{ label: 'Red-6', color: '#f5222d' }} title='error.main' main />
            <ColorBox bgcolor='error.dark' data={{ label: 'Red-8', color: '#a8071a' }} title='error.dark' />
            <ColorBox bgcolor='error.darker' data={{ label: 'Red-10', color: '#5c0011' }} title='error.darker' />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Stack spacing={2}>
            <ColorBox bgcolor='warning.lighter' data={{ label: 'Gold-1', color: '#fffbe6' }} title='warning.lighter' dark />
            <ColorBox bgcolor='warning.light' data={{ label: 'Gold-4', color: '#ffd666' }} title='warning.light' dark />
            <ColorBox bgcolor='warning.main' data={{ label: 'Gold-6', color: '#faad14' }} title='warning.main' main />
            <ColorBox bgcolor='warning.dark' data={{ label: 'Gold-8', color: '#ad6800' }} title='warning.dark' />
            <ColorBox bgcolor='warning.darker' data={{ label: 'Gold-10', color: '#613400' }} title='warning.darker' />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Stack spacing={2}>
            <ColorBox bgcolor='grey.A100' data={{ label: 'Grey-A1', color: '#ffffff' }} title='secondary.A100' dark />
            <ColorBox bgcolor='grey.A200' data={{ label: 'Grey-A2', color: '#434343' }} title='secondary.A200' />
            <ColorBox bgcolor='grey.A400' data={{ label: 'Grey-A3', color: '#1f1f1f' }} title='secondary.A300' />
            <ColorBox bgcolor='grey.A700' data={{ label: 'Grey-A3', color: '#1f1f1f' }} title='secondary.A300' />
            <ColorBox bgcolor='grey.50' data={{ label: 'Grey-A3', color: '#1f1f1f' }} title='secondary.A300' />
            <ColorBox bgcolor='grey.100' data={{ label: 'Grey-A3', color: '#1f1f1f' }} title='secondary.A300' />
            <ColorBox bgcolor='grey.200' data={{ label: 'Grey-A3', color: '#1f1f1f' }} title='secondary.A300' />
            <ColorBox bgcolor='grey.300' data={{ label: 'Grey-A3', color: '#1f1f1f' }} title='secondary.A300' />
            <ColorBox bgcolor='grey.400' data={{ label: 'Grey-A3', color: '#1f1f1f' }} title='secondary.A300' />
            <ColorBox bgcolor='grey.500' data={{ label: 'Grey-A3', color: '#1f1f1f' }} title='secondary.A300' />
            <ColorBox bgcolor='grey.600' data={{ label: 'Grey-A3', color: '#1f1f1f' }} title='secondary.A300' />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default DashboardDefault
