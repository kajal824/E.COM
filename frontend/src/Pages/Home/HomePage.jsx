import React from 'react'
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <> 
        <div className='text-center mt-10 border-2'>
            <h1 className='text-red-500 mb-5 mt-5'>I am from home page</h1>
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700 mb-5">Click Me</Button>
        </div>
    </>
  );
}

export default HomePage