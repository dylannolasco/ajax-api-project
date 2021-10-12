import egg from '../egg.png';

export default function Info({info}) {
    console.log(info.length);
    return(
      <div className="poke-container">
      {
        info.length !== 0 ?
        <table className="result-table">
          <tr className="rw-table">
            <td rowSpan="5" className="poke-img"><img src={info.avatar} alt="" className="poke-img"/></td>
          </tr>
          <tr><td className="tr-1"><p>{info.name}</p></td></tr>
          <tr><td className="tr-2"><p>{info.height} ft</p></td></tr>
          <tr><td className="tr-3"><p>{info.weight} kg</p></td></tr>
          <tr><td className="tr-4"><p>{info.experience} exp</p></td></tr>
        </table> :
        <div className="egg">
          <img src={egg} alt="egg"/>
        </div>
      }
      </div>
    )
}
