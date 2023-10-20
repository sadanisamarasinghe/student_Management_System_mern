import React from 'react';

function navbar() {
    return (
    
      <div>

        <nav className="bg-black flex text-cyan-50 justify-between">
          <div className='mx-20 my-2'>
            <p>Student Details</p>
          </div>
          <div>
          <ul className="flex mx-10">
            <div className='mx-5 my-2'>
              <li><a href='/'>Home</a></li>
            </div>
            <div className='my-2'>
              <li><a href='/details'>Details</a></li>
            </div>
          </ul>
          </div>
         
        </nav>

      </div>
    );
  }

  

  export default navbar;
  