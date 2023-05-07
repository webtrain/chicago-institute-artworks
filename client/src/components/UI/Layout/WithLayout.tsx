import PageLayout from './PageLayout'

function withLayout(ComposedComponent: any) {
  return function WithLayout(props: any) {
    return (
      <PageLayout >
        <ComposedComponent {...props} />
      </PageLayout>
    )
  }
}

export default withLayout
