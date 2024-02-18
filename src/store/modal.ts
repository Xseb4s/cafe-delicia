import { create } from 'zustand'

type Modal = {
  modal: boolean
  modalOpen: () => void
  modalClose: () => void
}

export const useModal = create<Modal>()((set) => ({
  modal: false,
  modalOpen: () => set(({ modal: true})),
  modalClose: () => set(({ modal: false})),
}))