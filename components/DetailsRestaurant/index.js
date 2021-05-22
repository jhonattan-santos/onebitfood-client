import Details from './Details';
import CategoryProducts from './CategoryProducts';
import { Alert, Col } from 'react-bootstrap';

export default function DetailsRestaurant(props) {
  function renderContent() {
    if (props.isError) {
      return (
        <Col>
          <Alert variant="custom-red">
            Ocorreu um erro, não foi possível carregar as informações deste
            restaurante...
          </Alert>
        </Col>
      );
    }
    return (
      <>
        <Details {...props.restaurant} />
        {props.restaurant.product_categories.map((product_category, i) => {
          return (
            <CategoryProducts
              restaurant={props.restaurant}
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
