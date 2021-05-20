import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import Restaurant from './Restaurant';
import getRestaurants from '../../services/getRestaurants';

export default function ListRestaurants() {
  const { restaurants, isLoading, isError } = getRestaurants();

  function renderContent() {
    if (isError) {
      return (
        <Col>
          <Alert variant="custom-red">
            Não foi possível carregar as categorias no momento.
          </Alert>
        </Col>
      );
    } else if (isLoading) {
      return (
        <Col>
          <Spinner animation="border" />
        </Col>
      );
    } else if (restaurants.length === 0) {
      return <Col>Nenhum restaurante disponível ainda...</Col>;
    } else {
      return restaurants.map((restaurant, i) => (
        <Restaurant {...restaurant} key={i} />
      ));
    }
  }

  return (
    <div className="mt-5">
      <h3 className="fw-bolder">Restaurantes</h3>
      <Row>{renderContent()}</Row>
    </div>
  );
}
