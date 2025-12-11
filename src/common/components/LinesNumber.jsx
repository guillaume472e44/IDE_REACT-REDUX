export default function LinesNumber({ code }) {
  function getlineNumber(code) {
    let linesNumber = code.match(/\n/g)?.length
      ? code.match(/\n/g).length + 1
      : 1;

    let rows = [];

    for (let i = 0; i < linesNumber; i++) {
      rows.push(<span key={i}>{i + 1}</span>);
    }

    return rows;
  }
  return <div className="lineNumbers">{getlineNumber(code)}</div>;
}
