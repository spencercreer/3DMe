import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from '@react-three/drei'
import Sun from "./components/Sun";
import Earth from "./components/Earth";
import Moon from "./components/Moon";
import Saturn from "./components/Saturn";
import "./styles.css";

function App() {

  return (
    <Canvas>
      <OrbitControls />
      <Stars fade={true} />
      <Sun />
      <Earth />
      <Moon />
    </Canvas>
  );
}

export default App;

// const usePersonControls = () => {
  //   const keys = {
    //     [key: string]: key,
    //     KeyW: 'forward',
    //     KeyS: 'backward',
    //     KeyA: 'left',
    //     KeyD: 'right',
    //     Space: 'jump',
    //   }
    
    //   const moveFieldByKey = (key: string) => keys[key]
    
    //   const [movement, setMovement] = useState({
      //     forward: false,
      //     backward: false,
      //     left: false,
      //     right: false,
      //     jump: false,
      //   })
      
      //   useEffect(() => {
        //     const handleKeyDown = (e) => {
          //       setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
          //     }
          //     const handleKeyUp = (e) => {
            //       setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
//     }
//     document.addEventListener('keydown', handleKeyDown)
//     document.addEventListener('keyup', handleKeyUp)
//     return () => {
  //       document.removeEventListener('keydown', handleKeyDown)
  //       document.removeEventListener('keyup', handleKeyUp)
  //     }
  //   }, [])
  //   return movement
  // }
  
  // onContextMenu={(e) => console.log('context menu')}
  // onDoubleClick={(e) => console.log('double click')}
  // onWheel={(e) => console.log('wheel spins')}
  // onPointerUp={(e) => console.log('up')}
  // onPointerDown={(e) => console.log('down')}
  // onPointerOver={(e) => console.log('over')}
  // onPointerOut={(e) => console.log('out')}
  // onPointerEnter={(e) => console.log('enter')}
  // onPointerLeave={(e) => console.log('leave')}
  // onPointerMove={(e) => console.log('move')}
  // onPointerMissed={() => console.log('missed')}
  // onUpdate={(self) => console.log('props have been updated')}