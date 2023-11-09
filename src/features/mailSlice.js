import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counter/counterAPI';


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,

  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectMail: (state, action) => {
state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
     
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
