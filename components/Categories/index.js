import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, Col, Alert, Spinner } from 'react-bootstrap';
import slickSettings from './slick_settings';
import Category from './Category';
import getCategories from '../../services/getCategories';

export default function Categories() {
  const { categories, isLoading, isError } = getCategories();

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
    } else if (categories.length === 0) {
      return <Col>Nenhum restaurante disponível ainda...</Col>;
    } else {
      return (
        <Card className="mt-2">
          <Slider {...slickSettings} className="px-4 pt-4 text-center">
            {categories.map((category, i) => (
              <Category {...category} key={i} />
            ))}
          </Slider>
        </Card>
      );
    }
  }

  return (
    <>
      <h3 className="fw-bolder">Categorias</h3>
      {renderContent()}
    </>
  );
}
