import DetailsRestaurant from '../../components/DetailsRestaurant';

export default function Restaurant({ restaurant, isError = false }) {
  return <DetailsRestaurant restaurant={restaurant} isError={isError} />;
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    const res = await fetch(`${process.env.apiUrl}/api/restaurants/${id}`);
    const restaurant = await res.json();
    const isError = res.ok ? false : true;
    return { props: { restaurant, isError: isError } };
  } catch (error) {
    return { props: { isError: true } };
  }
}
