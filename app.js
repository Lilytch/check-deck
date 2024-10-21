
document.getElementById('analyzeDeckBtn').addEventListener('click', function() {
  const deckInput = document.getElementById('deckTextArea').value;
  const deck = deckInput.split('\n').map(card => card.trim()).filter(card => card !== "");

  // Ejemplo simple de análisis: contar el número de cartas
  const totalCards = deck.length;

  // Muestra los resultados
  const resultsDiv = document.getElementById('analysisResults');
  resultsDiv.innerHTML = `<p>Total de cartas: ${totalCards}</p>`;

  // Podrías agregar más análisis aquí, como sinergias, rarezas, etc.
});
