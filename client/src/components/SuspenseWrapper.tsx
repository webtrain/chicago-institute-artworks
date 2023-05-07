/* eslint-disable @typescript-eslint/promise-function-async */
import React, { Suspense } from 'react'

import PageLoader from './UI/Loaders/PageLoader'

interface SuspenseWrapperProps {
  component: string
}

const SuspenseWrapper = ({ component }: SuspenseWrapperProps): JSX.Element => {
  const LazyComponent = React.lazy(() => import(`../views/pages/${component}.tsx`))

  return (
    <Suspense
      fallback={
        <div className='loader-container'>
          <div className='loader-container-inner'>
            <PageLoader />
          </div>
        </div>
      }
    >
      <LazyComponent />
    </Suspense>
  )
}

export default SuspenseWrapper
