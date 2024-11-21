import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full mt-20">
      <div className="">
        {/* Top Section */}
        <div className="flex justify-between items-center w-full px-5 py-5">
          <div className="text-lg font-bold flex items-center gap-2">
            <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" />
            List your Show
            </div>
          <div className="text-[18px]">
            Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow
          </div>
          <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700">
            Contact today!
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-around w-full bg-slate-700 py-5">
            {/* 24/7 Customer Care with Font Awesome icon */}
            <div className="flex items-center gap-4 flex-col">
              <i className="fas fa-headset text-white text-4xl"></i> {/* Font Awesome headset icon */}
              <span className='text-xs'>24/7 CUSTOMER CARE</span>
            </div>

            {/* Resend Booking Confirmation with Font Awesome icon */}
            <div className="flex items-center gap-4 flex-col">
              <i className="fas fa-redo-alt text-white text-4xl"></i> {/* Font Awesome redo icon */}
              <span className='text-xs' >RESEND BOOKING CONFIRMATION</span>
            </div>

            {/* Subscribe to the Newsletter with Font Awesome icon */}
            <div className="flex items-center gap-4 flex-col">
              <i className="fas fa-envelope text-white text-4xl"></i> {/* Font Awesome envelope icon */}
              <span className='text-xs' >SUBSCRIBE TO THE NEWSLETTER</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
