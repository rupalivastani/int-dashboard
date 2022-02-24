import React from 'react'
import AppsIcon from '@mui/icons-material/Apps'
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined'
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined'
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline'
import BarChartIcon from '@mui/icons-material/BarChart'
import ShareIcon from '@mui/icons-material/Share'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import MoneyIcon from '@mui/icons-material/Money'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const Left = () => {
	return (
		<div>
			{/* top */}
			<div className='flex space-x-2'>
				<div className=' bg-blue-600 text-white font-semibold p-2 rounded-full cursor-pointer  h-10 w-10 text-center '>
					N
				</div>
				<div className=' text-center justify-center font-medium arr cursor-pointer text-2xl pt-1'>
					Name
				</div>
				<div className=' text-lg m-2 pl-24 cursor-pointer'>
					{' '}
					&#x2190;
				</div>
			</div>
			{/* Middle */}
			<div className='flex flex-col text-gray-500 mt-10 m-5 space-y-2   '>
				<p className=' hover:bg-gray-500 hover:text-white cursor-pointer hover:pl-5 rounded-xl p-2'>
					<AppsIcon className='mr-1' />
					Home
				</p>
				<p className=' hover:bg-gray-500 hover:text-white hover:pl-5 cursor-pointer rounded-xl p-2'>
					<InsertChartOutlinedOutlinedIcon className='mr-1' />
					Section 1
				</p>
				<p className=' hover:bg-gray-500 hover:text-white cursor-pointer hover:pl-5 rounded-xl p-2'>
					<CandlestickChartOutlinedIcon className='mr-1' />
					Section 2
				</p>
				<p className=' hover:bg-gray-500 hover:text-white cursor-pointer hover:pl-5 rounded-xl p-2'>
					<AddchartOutlinedIcon className='mr-1' />
					Section 3
				</p>
				<p className=' hover:bg-gray-500 hover:text-white cursor-pointer hover:pl-5 rounded-xl p-2'>
					<MonetizationOnOutlinedIcon className='mr-1' />
					Section 3
				</p>
				<p className=' hover:bg-gray-500 hover:text-white cursor-pointer hover:pl-5 rounded-xl p-2'>
					<MoneyIcon className='mr-1' />
					Section
				</p>
				<p className=' hover:bg-gray-500 hover:text-white cursor-pointer hover:pl-5 rounded-xl p-2'>
					<PieChartOutlineIcon className='mr-1' />
					Section 6
				</p>
				<p className=' hover:bg-gray-500 hover:text-white cursor-pointer hover:pl-5 rounded-xl p-2'>
					<BarChartIcon className='mr-1' />
					Section 7
				</p>
				<p className=' hover:bg-gray-500 hover:text-white cursor-pointer hover:pl-5 rounded-xl p-2'>
					<ShareIcon className='mr-1' />
					Section 8
				</p>
				<p className=' hover:bg-gray-500 hover:text-white cursor-pointer hover:pl-5 rounded-xl p-2'>
					<ArticleOutlinedIcon className='mr-1' />
					Documentation
				</p>
			</div>
			{/* Bottom */}
			<div>
				<div className='flex space-x-2 mt-28  '>
					<div className='flex bg-gray-700 rounded-lg p-2 space-x-1'>
						<div className=' bg-blue-600 text-white text-xs p-1  cursor-pointer rounded-full  h-6  w-6  text-center '>
							N
						</div>
						<p className=' cursor-pointer'>$0.90</p>
					</div>
					<div className='flex bg-blue-300 text-blue-700 rounded-lg cursor-pointer p-2 space-x-1'>
						<p> Buy $XYZ</p>
					</div>
				</div>
				<div className='flex mt-2 cursor-pointer'>
					<LanguageOutlinedIcon />
					<div className=' rounded-full bg-gray-500 pl-2 pr-2 ml-2'>
						<NightsStayIcon className=' text-gray-300	' />
						<FiberManualRecordIcon className='text-blue-700' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Left
