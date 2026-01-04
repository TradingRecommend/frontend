import React, { useState, useEffect } from 'react'
import { Box, Paper, TextField, Button, Typography, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
// CKEditor imports
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react'
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { fetchIndustries } from '../../../redux/reducers/industry'

const AddCompany: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const industryState = useAppSelector(state => state.industryReducer)
  
  const [name, setName] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const [industry, setIndustry] = useState<string>('')
  const [analysis, setAnalysis] = useState<string>('')

  // Fetch industries on component mount
  useEffect(() => {
    dispatch(fetchIndustries())
  }, [dispatch])

  const handleSave = () => {
    const newCompany = { id: Date.now(), name, code, industry, analysis }
    console.log('New company:', newCompany)
    // Post message to parent window if opened in new tab
    if (window.opener) {
      window.opener.postMessage({ type: 'company-added', payload: newCompany }, window.location.origin)
      window.close()
    } else {
      navigate(-1)
    }
  }

  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Tên công ty</Typography>
            <TextField fullWidth value={name} onChange={e => setName(e.target.value)} sx={{ mt: 1 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Mã chứng khoán</Typography>
            <TextField fullWidth value={code} onChange={e => setCode(e.target.value)} sx={{ mt: 1 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Ngành</InputLabel>
              <Select value={industry} onChange={e => setIndustry(e.target.value)} label="Ngành">
                {industryState.list.map(ind => (
                  <MenuItem key={ind.id} value={ind.name}>{ind.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>Phân tích công ty</Typography>
        <Box sx={{ '& .ck-editor__editable_inline': { minHeight: 240 } }}>
          <CKEditor
            editor={ClassicEditor}
            data={analysis}
            onChange={(_event: any, editor: any) => {
              const data = editor.getData()
              setAnalysis(data)
            }}
          />
        </Box>
      </Paper>

      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
        <Button variant="contained" color="success" onClick={handleSave}>Lưu</Button>
        <Button variant="outlined" onClick={() => navigate(-1)}>Hủy</Button>
      </Box>
    </Box>
  )
}

export default AddCompany
