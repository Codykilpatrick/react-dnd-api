const SpellCardChild = (props) => {
  return (
    <>
      <div onClick={() => props.runConsoleLog("hello")}>
        CHILD COMPONENT
      </div> 
    </>
  )
}

export default SpellCardChild