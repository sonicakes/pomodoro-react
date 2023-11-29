import useSound from 'use-sound';
import doorbell from '../../assets/doorbell.mp3'

function Alarm () {

  const [play] = useSound(doorbell);
  return <button onClick={play}>Alarm!</button>;

}
export default Alarm;
