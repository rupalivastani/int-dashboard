import React, { useState, useEffect } from 'react'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import IosShareIcon from '@mui/icons-material/IosShare'

const Middle = () => {
	const [users, setUsers] = useState([])

	 const fetchData = async () => {
		await fetch('https://raw.githubusercontent.com/akshita151199/APIs/main/data')
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setUsers(data)
			})
		// console.log(users['data'])
	}

	useEffect(() => {
		fetchData()
	}, [])
	return (
		<div>
			{/* Top */}
			<div className='flex m-5  '>
				<p className=' border-b-2 border-blue-500 text-xl ml-5'>
					Section{' '}
				</p>
				<div className='flex space-x-2 text-sm ml-40 xl:ml-96 bg-gray-800 rounded-lg p-2'>
					<AccountBalanceWalletOutlinedIcon className=' text-blue-600' />
					<p>0.2 $XYZ</p>
					<p className=' bg-blue-300 rounded-md pl-2 pr-2 text-blue-600'>
						Teir 1
					</p>
				</div>
			</div>
			{/* Middle */}
			<div className=' m-5 mt-4 space-y-5 '>
				<div className=' bg-blue-200 text-black rounded-xl text-sm  p-3 '>
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.
					</p>
					<div className='flex'>
						<p className=' bg-white rounded-lg p-2 mt-5 pl-5 pr-5 text-sm'>
							Tutorial
						</p>
					</div>
				</div>

				<div className=' bg-gray-800 text-white rounded-xl text-sm p-8 '>
					<p className=' text-lg'>Your Rewards</p>
					<div className='flex'>
						<p className='text-white text-2xl ml-2 font-semibold'>
							$ 0.26231428
						</p>
						<div className=' bg-blue-600  rounded-md text-xs md:ml-40 xl:ml-80 pl-3 pr-3 p-2'>
							Custom Link
							<IosShareIcon className=' text-md pl-1' />
						</div>
					</div>
					<div className='flex'>
						<p className=' bg-gray-600 rounded-full m-1 mt-5 pl-5 pr-5 text-xs'>
							$40 AVAX
						</p>
						<p className=' bg-gray-600 rounded-full m-1 mt-5 pl-5 pr-5 text-xs'>
							$10 BNB
						</p>
						<p className=' bg-gray-600 rounded-full m-1 mt-5 pl-5 pr-5 text-xs'>
							$210 BTC
						</p>
					</div>
				</div>

				<div className='flex   space-x-5'>
					<div className=' flex-grow bg-gray-800 text-white rounded-xl text-sm p-8 '>
						<p className='flex  text-lg'>
							<p className=' font-bold mr-2'>12.5%</p> of fee
						</p>
						<div className='flex'>
							<p className='text-gray-400 text-md mt-2 '>
								Your Referral Link for xyz
							</p>
						</div>
						<div className='flex'>
							<p className=' cursor-pointer bg-gray-600 rounded-md m-1 mt-5 p-3 text-xs'>
								https://unityexchange.design
								<ContentCopyIcon className='xl:ml-10' />
							</p>
						</div>
					</div>

					<div className=' xl:flex-grow bg-gray-800 text-white rounded-xl text-sm p-8 '>
						<p className='flex  text-lg'>
							<p className=' font-bold mr-2'>12.5%</p> of fee
						</p>
						<div className='flex'>
							<p className='text-gray-400 text-md mt-2 '>
								Your Referral Link for xyz
							</p>
						</div>
						<div className='flex'>
							<p className=' bg-gray-600 rounded-md m-1 mt-5 p-3 text-xs'>
								https://unityexchange.design
								<ContentCopyIcon className='xl:ml-10' />
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Bottom */}
			<div className=' flex space-x-3 text-2xl m-5'>
				<p className=' border-b-2 border-blue-600	'>First Tab</p>
				<p className=' text-gray-500'>Second Tab</p>
			</div>
			<div className=' flex justify-around  text-xs text-gray-500 bg-gray-800 ml-5 mr-5 p-4 rounded-md'>
				<p>ASSET</p>
				<p>AMOUNT</p>
				<p>USER ACCOUNT</p>
				<p>REFERRAL EARNING</p>
			</div>
			<div className=' bg-gray-900 flex justify-around mt-1 ml-5 mr-5 rounded-md'>
				<div className=' flex'>
					<div className=' flex flex-col m-5'>
							<img className='m-2' src="https://raw.githubusercontent.com/akshita151199/APIs/main/btc.png"alt='' />
							<img className='m-2' src="https://raw.githubusercontent.com/akshita151199/APIs/main/btc.png"alt='' />
					</div>

					<div className=' flex flex-col'>
							<div className='p-3 mt-1' >Bitcoin</div>
							<div className='p-3 mt-1' >Bitcoin</div>
					</div>
				</div>

				<div className=' flex flex-col'>
						<div className=' m-2'>
							0.001BNB
							<p className=' text-xs text-gray-400 cursor-pointer'>
								Expired
							</p>
						</div>
						<div className=' m-2'>
							0.001BNB
							<p className=' text-xs text-gray-400 cursor-pointer'>
								Expired
							</p>
						</div>
				</div>
				<div className=' flex flex-col'>
						<div className=' m-4'>0xFbE..0f58A7D</div>
						<div className=' m-4'>0xFbE..0f58A7D</div>
				</div>

				<div className=' flex flex-col'>
						<div className=' m-2'>
							0.001BNB
							<p className=' text-xs text-gray-400 cursor-pointer'>
								View on BSC Scan ⬀
							</p>
						</div>
						<div className=' m-2'>
							0.001BNB
							<p className=' text-xs text-gray-400 cursor-pointer'>
								View on BSC Scan ⬀
							</p>
						</div>
				</div>
			</div>

			{/* Code commented below as API was not working at that moment */}


			{/* <div className=' bg-gray-900 flex justify-around mt-1 ml-5 mr-5 rounded-md'>
				<div className=' flex'>
					<div className=' flex flex-col m-5'>
						{users['data'].map((user) => (
							<img className='m-2' src={user.img} alt='' />
						))}
					</div>

					<div className=' flex flex-col'>
						{users['data'].map((user) => (
							<div className='p-3 mt-1' >{user.asset}</div>
						))}
					</div>
				</div>

				<div className=' flex flex-col'>
					{users['data'].map((user) => (
						<div className=' m-2'>
							{user.amount}BNB
							<p className=' text-xs text-gray-400 cursor-pointer'>
								Expired
							</p>
						</div>
					))}
				</div>
				<div className=' flex flex-col'>
					{users['data'].map((user) => (
						<div className=' m-4'>0xFbE..0f58A7D</div>
					))}
				</div>

				<div className=' flex flex-col'>
					{users['data'].map((user) => (
						<div className=' m-2'>
							{user.referral_earnings}BNB
							<p className=' text-xs text-gray-400 cursor-pointer'>
								View on BSC Scan ⬀
							</p>
						</div>
					))}
				</div>
			</div> */}
		</div>
	)
}

export default Middle
