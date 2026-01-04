import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import IndustryRepository, { Industry } from '../../repositories/industry'

interface IndustryState {
  list: Industry[]
  total: number
  loading: boolean
  error: string | null
}

const initialState: IndustryState = {
  list: [
  ],
  total: 0,
  loading: false,
  error: null,
}

export const fetchIndustries = createAsyncThunk(
  'industry/fetchIndustries',
  async (_, { rejectWithValue }) => {
    try {
      const response = await IndustryRepository.getIndustries()
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch industries')
    }
  }
)

const industrySlice = createSlice({
  name: 'industry',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIndustries.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchIndustries.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload.items
        state.total = action.payload.total
      })
      .addCase(fetchIndustries.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const industryReducer = industrySlice.reducer
