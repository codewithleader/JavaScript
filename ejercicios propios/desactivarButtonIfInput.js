function validarInput() {
  document.getElementById("btn_Validar").disabled = !document.getElementById("quanti").value.length;
}

{/* <input type="number" name="quanti"  id="quanti"  class="form-control" value="1" onInput="validarInput()" />

<button type="submit" name="add_to_cart" id="btn_Validar" 
 class="btn btn-warning add_to_cart">Añadir al carrito
</button> */}