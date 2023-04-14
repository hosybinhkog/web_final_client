import { useState } from 'react'
import { useHMSActions } from '@100mslive/react-sdk'
import { useSelector } from 'react-redux'

function JoinForm() {
  const hmsActions = useHMSActions()
  const [inputValues, setInputValues] = useState({
    name: '',
    token: '',
  })

  const { data } = useSelector((state) => state.loadDataIndex)
  console.log(data)

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await hmsActions.join({
      userName: inputValues.name,
      authToken: inputValues.token,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="mb-4 text-xl font-semibold">Join Room</h2>
      <div className="mb-4">
        <input
          required
          value={inputValues.name}
          onChange={handleInputChange}
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <input
          required
          value={inputValues.token}
          onChange={handleInputChange}
          id="token"
          type="text"
          name="token"
          placeholder="Auth token"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 border border-black rounded focus:outline-none focus:shadow-outline w-52"
      >
        Join
      </button>
    </form>
  )
}

export default JoinForm
