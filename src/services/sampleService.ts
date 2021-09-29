import { sample } from '~/apis/sample'
import { setRecoilExternalState, getRecoilExternalLoadable } from '~/recoil/RecoilExternalStatePortal'
import { SampleAtom, sampleAtom } from '~/recoil/sampleAtom'

const sampleService = async () => {
  const result: any = await sample('id')
  return result
}

const sampleRecoilService = () => {
  const sample: SampleAtom = {
    info: 'test'
  }
  setRecoilExternalState(sampleAtom, sample)
}

const sampleGetRecoilService = () => {
  const loadable = getRecoilExternalLoadable(sampleAtom)
  let result
  switch (loadable.state) {
    case 'hasValue':
      result = loadable.contents;
      break;
    case 'hasError':
      result = loadable.contents.message; // contents는 Error
      break;
    case 'loading':
    default:
      result = '... loading ...'; // 로딩 중일 때
  }
  return result
}

export default {
  sampleService, sampleRecoilService, sampleGetRecoilService
}
