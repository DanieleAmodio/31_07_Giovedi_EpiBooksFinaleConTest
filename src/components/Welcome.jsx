import { Alert, Container } from "react-bootstrap";
import { useTheme } from "../context/contextTheme";

function Welcome({ searchValue, filteredBook }) {
  const {theme,colorText} = useTheme()
  return (
    <Container fluid className={`${theme==='dark' ? 'bg-dark':'bg-light'} ${colorText} 'py-5`}> 
      <h1 className="text-center">📚 Benvenuto su EpiBOOKS</h1>

      <Alert variant="info" className="text-center mt-3 m-0">
        Questa è una libreria virtuale per appassionati di lettura!
      </Alert>

      {searchValue.trim() !== "" && filteredBook.length === 0 && (
        <Alert variant="warning" className="text-center fw-bold">
          📚 Nessun libro trovato con il titolo: "
          <span className="text-danger">{searchValue}</span>"
        </Alert>
      )}
    </Container>
  );
}

export default Welcome;
