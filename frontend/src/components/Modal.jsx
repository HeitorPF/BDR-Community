import './Modal.css'; // Arquivo de estilos que vamos criar no Passo 2

export default function Modal({ isOpen, onClose, children }) {
  // Se isOpen for falso, não renderiza nada na tela
  if (!isOpen) return null;

  return (
    // O overlay é o fundo escuro. Clicar nele fecha o modal.
    <div className="modal-overlay" onClick={onClose}>
    
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        
        {/* Aqui entra o conteúdo que você passar para o modal */}
        {children}
      </div>
    </div>
  );
}