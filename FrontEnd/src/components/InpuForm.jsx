
import React, { memo } from 'react'

const InputForm = ({ label, value, setValue, keyPayload, invalidFields, setInvalidFields, type, placeholder }) => {
    return (
        <div>
            <label htmlFor={keyPayload} className='text-xs' >{label}</label>
            <input
                type={type || 'text'}
                id={keyPayload}
                className='relative p-3 block w-full rounded border-0 border-amber-300 caret-amber-500 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6'
                value={value}
                onChange={(e) => setValue(prev => ({ ...prev, [keyPayload]: e.target.value }))}
                onFocus={() => setInvalidFields([])}
                placeholder={placeholder}
            />
            {/* {invalidFields.length > 0 && invalidFields.some(i => i.name === keyPayload) && <small className='text-red-500 italic' >{invalidFields.find(i => i.name === keyPayload)?.message}</small>} */}
        </div>
    )
}

export default memo(InputForm)