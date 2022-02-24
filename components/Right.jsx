import React from 'react'
import IosShareIcon from '@mui/icons-material/IosShare';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PhonelinkEraseOutlinedIcon from '@mui/icons-material/PhonelinkEraseOutlined';

const Right = () => {
  return (
    <div>					{/* Top */}
    <div className='flex space-x-2 m-5  '>
        <div className='flex flex-grow bg-gray-700 rounded-lg p-2 space-x-1'>
            <div className=' bg-blue-600 text-white text-xs p-1  rounded-full  h-6  w-6  text-center '>
                N
            </div>
            <p className=''> Avalanche </p>
            {/* <p className=' pl-3 xl:flex-grow'>&#8964;</p> */}
        </div>
        <div className='flex-grow bg-transparent border-2 border-blue-700 text-blue-700 rounded-lg p-2 space-x-1'>
            <p><AccountBalanceWalletOutlinedIcon/> 0xf6...1353</p>
        </div>
    </div>
    {/* Middle */}
    <div className=' flex m-5 space-x-3 pl-5'>
        &#x2190;
        <p className=' ml-2 font-semibold text-lg'>
            Custom Link
        </p>
    </div>
    <div className=' m-5 pl-10 cursor-pointer'>
        https://testnet.xyz.xyz/trade?ref=
    </div>
    <div className=' flex pl-5'>
        <input
            type='text'
            className=' bg-gray-800 p-3 ml-5  mr-2 flex-grow  rounded-lg '
            placeholder='Enter'
            outline-none
        />
    </div>
    <div>
        <div className='flex space-x-4 m-10  '>
            <div className='flex cursor-pointer bg-blue-600 rounded-lg text-sm p-2 pl-5 pr-5 '>
                <p><IosShareIcon  className=' text-md pr-1 '/>
                    Custom Link</p>
            </div>
            <div className='flex bg-transparent cursor-pointer border-2 border-gray-700  text-blue-700 rounded-xl p-2 pl-5 pr-5 space-x-1'>
                <p><PhonelinkEraseOutlinedIcon className=' pr-1'/>
                    Cancel</p>
            </div>
        </div>
    </div></div>
  )
}

export default Right