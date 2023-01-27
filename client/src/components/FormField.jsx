import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpeiseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">{labelName}</label>
        {isSurpeiseMe && (
          <button
          type='button'
          onClick={handleSurpeiseMe}
          className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black">Surprise</button>
        )}
      </div>
      <input type={type}
      id={name} />
    </div>
  )
}

export default FormField