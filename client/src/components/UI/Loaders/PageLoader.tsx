import styled from '@emotion/styled'

function PageLoader(): JSX.Element {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  )
}

export default PageLoader

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  opacity: 0.2;
  display: grid;
  place-items: center;
`
const Loader = styled.div`
  border: 16px solid #e3e3e3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
