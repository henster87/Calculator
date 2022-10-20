import { useState } from 'react'
import './App.css'


function App() {

  const [current, setCurrent] = useState('');

  const errorList = ['+', '-', '*', '/', '.', '(', ')' , '']
  const numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var num = current
  var last = num[num.length - 1]
  console.log('')
  console.log('Num: ' + num)
  console.log('Last Num: ' + last)
  console.log('Type Of Last: ' + typeof (last))

  function SetNum() {
    if (num === '' || !!numList.includes(num)) {
      console.log('Undefined: ' + true)
      return ''
    }
    else if (errorList.includes(last) && num.length > 1 && last !== ')' ) {
      num = num.slice(0, -1)
      console.log('Num: ' + num)
      console.log('ErrorList: ' + true)
      num = num.replaceAll('x', '*')
      // eslint-disable-next-line 
      return setCurrent(eval(num))
    }
    else if (num.length > 1) {
      console.log('Error check: ' + false)
      num = num.replaceAll('x', '*')
      console.log('Num: ' + num)
      // eslint-disable-next-line 
      return setCurrent(eval(num))
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='calculator'>
          <section className='screen'>
            <textarea placeholder="screen" readOnly defaultValue={num} />
          </section>

          <section className="ops">
            <button className="btnPls" onClick={() => setCurrent(prev => prev + ('+'))}> + </button>
            <button className="btnMin" onClick={() => setCurrent(prev => prev + ('-'))}> - </button>
            <button className="btnDiv" onClick={() => setCurrent(prev => prev + ('/'))}> / </button>
            <button className="btnX" onClick={() => setCurrent(prev => prev + ('x'))}> x </button>
            <button className="btnPrtL" onClick={() => setCurrent(prev => prev + ('('))}> ( </button>
            <button className="btnPrtR" onClick={() => setCurrent(prev => prev + (')'))}> ) </button>
            <button className="btnDot" onClick={() => setCurrent(prev => prev + ('.'))}> . </button>
            <button className="btnCE" onClick={() => setCurrent('')}> CE </button>
            <button className="btnBack" onClick={() => setCurrent(prev => prev.slice(0, -1))}> ↶ </button>
          </section>


          <section className="nums">
            <div className='numsDiv'>
              <div>
                <button className="btn1" onClick={() => setCurrent(prev => prev + ("1"))}> 1 </button>
                <button className="btn2" onClick={() => setCurrent(prev => prev + ("2"))}> 2 </button>
                <button className="btn3" onClick={() => setCurrent(prev => prev + ("3"))}> 3 </button>
              </div>

              <div>
                <button className="btn4" onClick={() => setCurrent(prev => prev + ("4"))}> 4 </button>
                <button className="btn5" onClick={() => setCurrent(prev => prev + ("5"))}> 5 </button>
                <button className="btn6" onClick={() => setCurrent(prev => prev + ("6"))}> 6 </button>
              </div>

              <div>
                <button className="btn7" onClick={() => setCurrent(prev => prev + ("7"))}> 7 </button>
                <button className="btn8" onClick={() => setCurrent(prev => prev + ("8"))}> 8 </button>
                <button className="btn9" onClick={() => setCurrent(prev => prev + ("9"))}> 9 </button>
              </div>

              <div className='lastNum'>
                <button className="btn0" onClick={() => setCurrent(prev => prev + ("0"))}> 0 </button>
              </div>
            </div>
          </section>

          <div className='Equals'>
            <button className="btnEql" onClick={SetNum}> = </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
