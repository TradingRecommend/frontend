import React, { useMemo, useState, useEffect } from "react"
import {
  Grid,
  Stack,
  Paper,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  IconButton,
} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { fetchCompanies, deleteCompany } from '../../../redux/reducers/company'
import { fetchIndustries } from '../../../redux/reducers/industry'

type Stock = {
  id: number
  symbol: string
  name: string
  industry: string
}

const CompanyAnalystic: React.FC = () => {
  const dispatch = useAppDispatch()
  const companyState = useAppSelector(state => state.companyReducer)
  const industryState = useAppSelector(state => state.industryReducer)
  
  const [filterCode, setFilterCode] = useState<string>('')
  const [filterIndustry, setFilterIndustry] = useState<string>('Tất cả')
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(5)

  // Fetch companies and industries on component mount
  useEffect(() => {
    dispatch(fetchCompanies())
    dispatch(fetchIndustries())
  }, [dispatch])

  const handleAddNew = () => {
    const url = `${window.location.origin}/analystic/company-analystic/new`
    window.open(url, '_blank')
  }

  const handleSearch = () => {
    // Trigger filtering by resetting pagination; filters are already applied from state
    setPage(0)
  }

  const handleView = (row: Stock) => {
    const url = `${window.location.origin}/analystic/company-analystic/${row.id}`
    window.open(url, '_blank')
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Bạn có chắc muốn xóa mục này?')) {
      dispatch(deleteCompany(id))
    }
  }

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <div style={{ marginTop: 20, padding: '20px 10px' }}>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
              <TextField
                label="Mã chứng khoán"
                value={filterCode}
                onChange={(e) => setFilterCode(e.target.value)}
                size="small"
              />
              <FormControl size="small" sx={{ minWidth: 180 }}>
                <InputLabel id="industry-label">Ngành nghề</InputLabel>
                <Select
                  labelId="industry-label"
                  label="Ngành nghề"
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}>
                  {industryState.list.map((it) => (
                    <MenuItem key={it.id} value={it.name}>{it.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
              <Button variant="contained" color="success" onClick={handleAddNew}>
                Thêm mới
              </Button>
            </Box>
          </Grid>

          {/* Search button below filters */}
          <Grid item xs={12}>
            <Box sx={{ mt: 1 }}>
              <Button variant="outlined" color="primary" onClick={handleSearch}>
                Tìm kiếm
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Mã</TableCell>
                <TableCell>Tên</TableCell>
                <TableCell>Ngành nghề</TableCell>
                <TableCell align="right">Hành động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companyState.list.map((row) => (
                <TableRow key={row.symbol} hover>
                  <TableCell>{row.symbol}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.industry}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small" color="primary" onClick={() => handleView(row)} title="Xem">
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton size="small" color="error" onClick={() => handleDelete(row.id)} title="Xóa">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {companyState.total === 0 && (
                <TableRow>
                  <TableCell colSpan={4} align="center">Không có dữ liệu</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={companyState.total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}

export default CompanyAnalystic
