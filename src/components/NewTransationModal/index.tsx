import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransationModal({
  isOpen,
  onRequestClose,
}: NewTransationModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <h2>Cadastrar Transação</h2>
      <Container>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
