import Link from 'next/link';
import { Modal } from 'react-bootstrap';
import Cart from '../Cart';
import { Button } from 'react-bootstrap';

import cartState from '../../store/atoms/cartAtom';
import { useRecoilState } from 'recoil';

export default function CartModal(props) {
  const [cart] = useRecoilState(cartState);

  return (
    <Modal
      show={props.show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      keyboard={false}
      onHide={() => props.onHide()}
    >
      <Modal.Header>
        <h5 className="fw-bold mt-2">Carrinho</h5>
      </Modal.Header>
      <Modal.Body>
        <Cart show={props.show} />
        {cart.products.length > 0 && (
          <div className="text-center pt-2">
            <Link href="/orders/new">
              <Button variant="custom-red" className="text-white">
                Finalizar pedido
              </Button>
            </Link>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}
