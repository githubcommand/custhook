// useToggle.js
export const useToggle = (initialState = false) => {
  // Use the `initialState` argument to initialize the state
  const [state, setState] = useState(initialState);
 
  // Perform an animation each time the state changes
  useEffect(() => {
    performToggleAnimation(state);
  }, [state])
 
  // Create an easy-to-use toggle function
  const toggle = () => { setState(state => !state) }
 
  // Return the state value and the toggle function
  return [state, toggle]
}


import { useToggle } from './useToggle';
const DarkMode = () => {
  // Get the state and toggle function from useToggle()
  // We'll use an initial value of true
  const [state, toggle] = useToggle(true);
  return (
    <button onClick={toggle}> 
      {state ? 'On' : 'Off'}
    </button>
  )
}