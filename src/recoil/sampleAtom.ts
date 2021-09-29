import { atom } from 'recoil'

export interface SampleAtom {
  info: string
}

export const initialSampleAtom: SampleAtom = {
  info: null,
}

export const sampleAtom = atom({
  key: 'sample',
  default: initialSampleAtom,
})
