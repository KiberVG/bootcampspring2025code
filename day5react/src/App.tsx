import './App.css'


function Note({title, content}) { // components can take in props

  return (
    <>
      <div className='note'>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </>
  )
}


function App() {
  let data = [
    {title: "this is my title", content: "this is my content"},
    {title: "this is my title2", content: "this is my content"},
    {title: "this is my title3", content: "this is my content"},
    {title: "this is my title4", content: "this is my content"},
    {title: "this is my title5", content: "this is my content"}
  ]


  return (
    <> 
      <h1>Note App</h1>
      <div id='notes-container'>
        {
          data.map((x)=><Note title={x.title} content={x.content}></Note>)
        }
      </div>
      
    </>
    
  )
}

export default App
