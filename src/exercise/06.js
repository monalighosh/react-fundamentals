import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputvalue, setInputvalue] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onSubmitUsername(inputvalue)
  }

  function handleInputChange(e) {
    const inputValue = e.target.value
    setInputvalue(inputValue.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          onChange={handleInputChange}
          value={inputvalue}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
