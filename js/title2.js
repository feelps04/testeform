import React from 'react';
import '..css/css.css';

function Title2() {
  return (
    <div className="comportamento_require text-center">
      <div className="section-title">
        <h2>
          Requisitos Comportamentais <br />(Obrigatórios e Desejáveis)
        </h2>
        <textarea id="requisitos_compoortamentais" name="requisitos"></textarea>
      </div>
    </div>
  );
}

export default Title2;
