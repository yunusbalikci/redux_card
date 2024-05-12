import CourseList from "./components/CourseList"
import Header from "./components/Header"
import { useEffect } from "react"
import { calculateTotal } from "./control/cardSlice"
import { useSelector,useDispatch } from "react-redux"
function App() {
 
  const {cartItems} = useSelector((store) => store.card)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])
  return (
    <div className="App">
      <Header></Header>
      <CourseList></CourseList>
    </div>
  )
}

export default App
