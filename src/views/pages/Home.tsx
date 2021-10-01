import React, { useEffect } from 'react'
import sampleService from '~/services/sampleService' /* recoil sample용 임시 코드, 실제 구현은 action 사용 */
import { useRecoilState } from 'recoil'
import { sampleAtom } from '~/recoil/sampleAtom'
import Planner from '~/views/components/Planner'

const Home: React.FC = () => {
  const [sample, setSample] = useRecoilState(sampleAtom)

  useEffect(() => {
    // sampleService.sampleRecoilService()
    // sampleService.sampleGetRecoilService()
    setSample({ info: 'test' })
  }, [])

  return (
    <>
      <Planner></Planner>
    </>
  )
}

export default Home