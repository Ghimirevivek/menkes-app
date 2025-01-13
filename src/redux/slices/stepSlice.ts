import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepState {
  currentStep: number;
  worksheetSteps: number;
}

const initialState: StepState = {
  currentStep: 1,
  worksheetSteps: 1, // Set initial state for worksheetSteps
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStep < 4) {
        state.currentStep += 1;
      }
    },
    previousStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    nextWorksheetStep: (state) => {
      state.worksheetSteps += 1;
    },
    previousWorksheetStep: (state) => {
      if (state.worksheetSteps > 1) {
        state.worksheetSteps -= 1;
      }
    },
    setWorksheetStep: (state, action: PayloadAction<number>) => {
      state.worksheetSteps = action.payload;
    },
  },
});

export const { 
  nextStep, 
  previousStep, 
  setStep, 
  nextWorksheetStep, 
  previousWorksheetStep, 
  setWorksheetStep 
} = stepSlice.actions;

export default stepSlice.reducer;
