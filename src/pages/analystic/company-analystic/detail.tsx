import React, { useState, useEffect } from "react"
import {
  Box,
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material"
// CKEditor imports
// @ts-ignore
import { CKEditor } from "@ckeditor/ckeditor5-react"
// @ts-ignore
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { fetchCompanyBySymbol } from "../../../redux/reducers/company"
import CompanyRepository from "../../../repositories/company"

type StockDetail = {
  id: number
  symbol: string
  name: string
  analysis: string
  industry?: string
}

const CompanyDetail: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const companyState = useAppSelector((state) => state.companyReducer)

  const [data, setData] = useState<StockDetail | null>(null)
  const [editable, setEditable] = useState<boolean>(false)
  const [searchCode, setSearchCode] = useState<string>("")
  const [analysisText, setAnalysisText] = useState<string>("")
  const [editableName, setEditableName] = useState<string>("")
  const [editableSymbol, setEditableSymbol] = useState<string>("")
  const [saving, setSaving] = useState<boolean>(false)
  const [saveMessage, setSaveMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  // Fetch company data by symbol when component mounts or symbol changes
  useEffect(() => {
    if (!symbol) return
    dispatch(fetchCompanyBySymbol(symbol))
  }, [symbol, dispatch])

  // Update local state when company data is loaded from Redux
  useEffect(() => {
    if (companyState.currentCompany) {
      const company = companyState.currentCompany
      const stateData: StockDetail = {
        id: company.id,
        symbol: company.symbol,
        name: company.name,
        analysis: company.description, 
        industry: company.industry,
      }
      setData(stateData)
      setAnalysisText(stateData.analysis)
    }
  }, [companyState.currentCompany])

  const handleSearch = () => {
    // Navigate to the company detail page with the search code as the new symbol
    if (searchCode.trim()) {
      navigate(`/analystic/company-analystic/${searchCode}`)
    }
  }

  const handleEditToggle = () => {
    setEditable((prev) => {
      const next = !prev
      if (next && data) {
        // initialize editable fields from current data
        setEditableName(data.name)
        setEditableSymbol(data.symbol)
        setAnalysisText(data.analysis)
      }
      return next
    })
  }

  const handleSave = async () => {
    // Save to backend via API
    if (!data) return

    setSaving(true)
    setSaveMessage(null)

    try {
      const updateData = {
        name: editableName,
        symbol: editableSymbol,
        industry: data.industry || "",
        description: analysisText
      }

      const response = await CompanyRepository.updateCompany(data.symbol, updateData)
      console.log(response)
      if (response.status === 200) {
        const updated: StockDetail = {
          ...data,
          analysis: analysisText,
          name: editableName,
          symbol: editableSymbol,
        }
        setData(updated)
        setEditable(false)
        setSaveMessage({ type: 'success', text: 'Cập nhật công ty thành công!' })
        
        // Clear message after 3 seconds
        setTimeout(() => setSaveMessage(null), 3000)
      } else {
        setSaveMessage({ type: 'error', text: 'Lỗi: Không thể cập nhật công ty' })
      }
    } catch (error: any) {
      setSaveMessage({ type: 'error', text: error.message || 'Lỗi khi lưu dữ liệu' })
    } finally {
      setSaving(false)
    }
  }

  if (companyState.loading) {
    return (
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}>
        <CircularProgress />
      </Box>
    )
  }

  if (companyState.error || !data) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography color="error">
          {companyState.error || "Không tìm thấy dữ liệu công ty"}
        </Typography>
        <Button onClick={() => navigate(-1)} sx={{ mt: 2 }}>
          Quay lại
        </Button>
      </Box>
    )
  }

  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              label="Tìm mã chứng khoán"
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}>
            <Button variant="outlined" onClick={handleSearch}>
              Tìm kiếm
            </Button>
            <Button variant="contained" onClick={handleEditToggle} disabled={saving}>
              {editable ? "Hủy" : "Chỉnh sửa"}
            </Button>
            {editable && (
              <Button variant="contained" color="success" onClick={handleSave} disabled={saving}>
                {saving ? <CircularProgress size={24} /> : "Lưu"}
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>

      {saveMessage && (
        <Alert severity={saveMessage.type} sx={{ mb: 2 }}>
          {saveMessage.text}
        </Alert>
      )}

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Tên công ty
        </Typography>
        {editable ? (
          <TextField
            fullWidth
            value={editableName}
            onChange={(e) => setEditableName(e.target.value)}
            sx={{ mb: 2 }}
          />
        ) : (
          <Typography sx={{ mb: 2 }}>{data.name}</Typography>
        )}

        <Typography variant="h6" gutterBottom>
          Mã chứng khoán
        </Typography>
        {editable ? (
          <TextField
            fullWidth
            value={editableSymbol}
            onChange={(e) => setEditableSymbol(e.target.value)}
            sx={{ mb: 2 }}
          />
        ) : (
          <Typography sx={{ mb: 2 }}>{data.symbol}</Typography>
        )}

        <Typography variant="h6" gutterBottom>
          Phân tích công ty
        </Typography>
        {/* Use CKEditor when editing; otherwise render HTML preview */}
        {editable ? (
          <Box sx={{ "& .ck-editor__editable_inline": { minHeight: 200 } }}>
            <CKEditor
              editor={ClassicEditor}
              data={analysisText}
              onChange={(_event: any, editor: any) => {
                const data = editor.getData()
                setAnalysisText(data)
              }}
            />
          </Box>
        ) : (
          <Box sx={{ p: 0 }}>
            <div dangerouslySetInnerHTML={{ __html: analysisText }} />
          </Box>
        )}
      </Paper>

      <Box sx={{ mt: 2 }}>
        <Button onClick={() => navigate(-1)}>Quay lại</Button>
      </Box>
    </Box>
  )
}

export default CompanyDetail
