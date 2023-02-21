import './testSass.scss'

function Testsass() {

  return (
    <div>
      <div className="screen"></div>
      <ul className="dance-animation">
        <li className="dance-frame dance-animation--dancer1"></li>
        <li className="dance-frame dance-animation--dancer2"></li>
        <li className="dance-frame dance-animation--dancer3"></li>
        <li className="dance-frame dance-animation--dancer4"></li>
        <li className="dance-frame dance-animation--dancer5"></li>
        <li className="dance-frame dance-animation--dancer6"></li>
        <li className="dance-frame dance-animation--dancer7"></li>
        <li className="dance-frame dance-animation--dancer8"></li>
        <li className="dance-frame dance-animation--dancer9"></li>
        <li className="dance-frame dance-animation--dancer10"></li>
        <li className="dance-frame dance-animation--dancer11"></li>
      </ul>
      <iframe width="0" height="0" src="https://www.1youtuberepeater.com/watch?v=kWvbJsB0OBc&name=Tom+Jones+Its+Not+Unusual+With+Lyrics" frameBorder="0" allowFullScreen></iframe>

      <div className="play-music">
        <div id="music-animation" className="music-animation">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
          <span className="bar bar5"></span>
        </div>
        <div className="music-toggle"><a id="toggle" data-text-swap="Music on">Music off</a></div>
      </div>
      <audio id="music" loop="loop" src="https://web.opendrive.com/api/v1/download/file.json/OV84MDUyNTM1NF9aSXB6Sw?inline=1"></audio>
    </div>
  )
}
export default Testsass