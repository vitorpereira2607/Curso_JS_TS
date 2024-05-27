import {ErrorContainer, ErrorMessage} from './styled'

export default function ErrorPage() {

  return (
    <ErrorContainer id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <ErrorMessage></ErrorMessage>
    </ErrorContainer>
  );
}