import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CompanyRepository, { Company } from '../../repositories/company'

interface CompanyState {
  list: Company[]
  total: number
  currentCompany: Company | null
  loading: boolean
  error: string | null
}

const initialState: CompanyState = {
  list: [
  ],
  total: 0,
  currentCompany: null,
  loading: false,
  error: null,
}

// Async thunk to fetch companies from API
export const fetchCompanies = createAsyncThunk(
  'company/fetchCompanies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await CompanyRepository.getCompanies()
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch companies')
    }
  }
)

// Async thunk to fetch company by symbol
export const fetchCompanyBySymbol = createAsyncThunk(
  'company/fetchCompanyBySymbol',
  async (symbol: string, { rejectWithValue }) => {
    try {
      const response = await CompanyRepository.getCompanyBySymbol(symbol)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch company')
    }
  }
)

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    deleteCompany: (state, action) => {
      state.list = state.list.filter(c => c.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload.items
        state.total = action.payload.total
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(fetchCompanyBySymbol.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCompanyBySymbol.fulfilled, (state, action) => {
        state.loading = false
        state.currentCompany = action.payload
      })
      .addCase(fetchCompanyBySymbol.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
        state.currentCompany = null
      })
  },
})

export const { deleteCompany } = companySlice.actions
export const companyReducer = companySlice.reducer
