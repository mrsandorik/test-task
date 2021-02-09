import React, {useState} from 'react';
import './App.css';
import Code from "./Code";

const words = [
  {value:"desert", label:"пустыня"},
  {value:"acting", label:"актёрская игра"},
  {value:"attend", label:"посетить"},
  {value:"bother", label:"беспокоить"},
  {value:"camping", label:"кемпинг"},
  {value:"dive", label:"нырять"},
  {value:"indoors", label:"в помещении"},
  {value:"discuss", label:"обсуждать"},
  {value:"wireless", label:"беспроводной"},
]

export type Item = {
  value: string,
  label: string
}

const App: React.FC = () => {
  const [text, setText] = useState("");
  const [select, setSelect] = useState("firstTask");
  const [items, setItems] = useState<Item[]>([]);
  const [count, setCount] = useState(0)

  const firstTask = () => {
    let res = words.filter(el => text === el.value[0])
    setItems(res)
    setCount(res.length)
  }

  const secondTask = () => {
    let res = words.filter(el => el.value.indexOf(text) >= 0)
    setItems(res)

    const singleString = words.map(el => (el.value)).join()
    const totalCount = singleString.split(text).length
    setCount(totalCount > 0 ? totalCount - 1 : 0)
  }

  const thirdTask = () => {
    let res = words.filter(el => text === el.value[el.value.length - 1])
    setItems(res)
    setCount(res.length)
  }

  const fourthTask = () => {
    let res = words.filter(el => el.value.indexOf(text + text) > 0)
    setItems(res)
    setCount(res.length)
  }

  const callFunction = (val:string) => {
    if(text.length === 1){
      switch (val) {
        case "firstTask": firstTask(); break;
        case "secondTask": secondTask(); break;
        case "thirdTask": thirdTask(); break;
        case "fourthTask": fourthTask(); break;
        default: return;
      }
    } else {
      alert("You should use only one symbol")
    }
  }

  return (
    <div className="App">
      <Code
          text={text}
          setText={setText}
          setSelect={setSelect}
          select={select}
          count={count}
          items={items}
          callFunction={callFunction}
      />
    </div>
  );


}

export default App;
