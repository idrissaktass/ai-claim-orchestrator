import { create } from 'zustand';
import { ClaimData } from '../types/claim';
import mockData from '../data/mock.json'; // PDF'deki veriyi içeren json

interface ClaimState {
  claim: ClaimData;
  isLoading: boolean;
  addNote: (index: number, note: string) => void;
  updateStatus: (index: number, status: string) => void;
}

export const useClaimStore = create<ClaimState>((set) => ({
  claim: mockData as ClaimData,
  isLoading: false,

    addNote: (index: number, userText: string) => set((state) => {
    const newProcessDetails = [...state.claim.processDetails];
    newProcessDetails.splice(index + 1, 0, {
        title: "Information Note",
        status: "Completed",
        note: userText,
        dateTime: new Date().toLocaleString()
    });
    return { claim: { ...state.claim, processDetails: newProcessDetails } };
    }),

  updateStatus: (index, status) => set((state) => {
    const newDetails = [...state.claim.processDetails];
    newDetails[index].status = status;
    return { claim: { ...state.claim, processDetails: newDetails } };
  })
}));