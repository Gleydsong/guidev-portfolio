import React from "react";

interface ImageModalProps {
  imgSrc: string;
  onUnmount: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imgSrc, onUnmount }) => {
  return (
    <div className="modal-overlay" onClick={onUnmount}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imgSrc} alt="Imagem do projeto ampliada" />
        <button onClick={onUnmount} className="close-button" aria-label="Fechar galeria">
          ×
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
