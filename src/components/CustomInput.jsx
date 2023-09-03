import React from "react";

function CustomInput({
  inputLabel,
  inputValue,
  inputType,
  onChangeText,
  error,
  onBlur,
  errorStyle,
  inputStyle
}) {
  return (
    <>
      <div className={`relative mb-4 ${inputStyle}`}>
        <input
          type={`${inputType ?? 'text'}`}
          id={`floating_outlined_${inputLabel}`}
          name={`fo_${inputLabel}`}
          className="w-full bg-white bg-opacity-20 focus:bg-transparent focus:ring-1 focus:ring-blue-400 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none placeholder:text-gray-500 focus:placeholder:text-gray-400 text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder={inputLabel}
          value={inputValue}
          onChange={onChangeText}
          onBlur={onBlur}
        />
      </div>
      {error !== '' ? <span
        className={`${errorStyle} transition-all text-xs -mt-4 mb-4 text-red-600`}
      >
        {error}
      </span> : null
      }
    </>
  )
};

export default CustomInput;