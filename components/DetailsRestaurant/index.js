import Details from './Details';
import CategoryProducts from './CategoryProducts';
import getRestaurant from '../../services/getRestaurant';
import { useRouter } from 'next/router';
import { Alert, Col, Spinner } from 'react-bootstrap';
import Restaurants from '../../pages/restaurants';

export default function DetailsRestaurant() {
  const router = useRouter();
  const { id } = router.query;

  const { restaurant, isLoading, isError } = getRestaurant(id);

  function renderContent() {
    if (isError) {
      return (
        <Col>
          <Alert variant="custom-red">
            Ocorreu um erro, não foi possível carregar as informações deste
            restaurante...
          </Alert>
        </Col>
      );
    } else if (isLoading) {
      return (
        <Col>
          <Spinner animation="border" />
        </Col>
      );
    } else if (!restaurant) {
      return (
        <Col>Não foi possível carregar as informações deste restaurante...</Col>
      );
    }
    return (
      <>
        <Details {...restaurant} />
        {restaurant.product_categories.map((product_category, i) => {
          return (
            <CategoryProducts
              restaurant={restaurant}
              {...product_category}
              key={i}
            />
          );
        })}
      </>
    );
  }

  return renderContent();
}
