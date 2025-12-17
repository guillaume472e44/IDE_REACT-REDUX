export default function LinesNumber({ code, maxCharWidth }) {
  function getlineNumber(code) {
    // ici on compte le nombre de retour à la ligne volontaire
    let linesNumber = code.match(/\n/g)?.length
      ? code.match(/\n/g).length + 1
      : 1;
    // pour vérifier si un retour à la ligne est provoqué automatiquement, on compte le nombre de caractères de chaque ligne
    code.split(/\n/g).forEach((element) => {
      element.length > maxCharWidth && linesNumber++;
    });

    let rows = [];

    for (let i = 0; i < linesNumber; i++) {
      rows.push(<span key={i}>{i + 1}</span>);
    }

    return rows;
  }
  return <div className="lineNumbers">{getlineNumber(code)}</div>;
}
