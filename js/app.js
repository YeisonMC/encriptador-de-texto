function resultadoEncriptador() {
  const textUser = document.getElementById("texto").value;
  const textoEncriptado = btoa(textUser);

  //   const containerTwo = document.querySelector(".container-two");
  //   containerTwo.innerHTML = `
  //     <div class="encriptado">
  //     <p class="texto-encriptado">${textUser}</p>
  //   <a href="#">
  //     <button>Copiar</button>
  //   </a>
  //     </div>
  //     `;

  const containerTwo = document.querySelector(".container-two");
  containerTwo.innerHTML = `
  <p class="texto-encriptado">${textoEncriptado}</p>
  <div class="flex-encritado">
    <a href="#">
        <button class="button-encriptado" onclick="copiarTexto()">Copiar</button>
    </a>
</div>
`;
  const columnTwo = document.querySelector(".column-two");

  console.log(textUser, textoEncriptado);
}

function copiarTexto() {
  const textoEncriptado = document.querySelector(".texto-encriptado");

  const textoTemp = document.createElement("textarea");
  document.body.appendChild(textoTemp);
  textoTemp.value = textoEncriptado.textContent;

  textoTemp.select();
  document.execCommand("copy");
  document.body.removeChild(textoTemp);
  alert("Texto encriptado copiado al portapapeles");
}

// function desencriptarTexto() {
//   const textoEncriptado =
//     document.querySelector(".texto-encriptado").textContent;
//   const textoDesencriptado = atob(textoEncriptado);

//   alert(`Texto desencriptado: ${textoDesencriptado}`);
// }
function desencriptarTexto() {
  const textoEncriptado =
    document.querySelector(".texto-encriptado").textContent;
  const textoDesencriptado = atob(textoEncriptado);

  const containerTwo = document.querySelector(".container-two");
  containerTwo.innerHTML = `
      <p class="texto-encriptado">${textoDesencriptado}</p>
      <div class="flex-encritado">
        <a href="#">
          <button class="button-encriptado" onclick="copiarTexto()">Copiar</button>
        </a>
      </div>
    `;

  //   alert(`Texto desencriptado: ${textoDesencriptado}`);
}
