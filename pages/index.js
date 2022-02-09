import Typed from 'react-typed';
import Link from 'next/link';

export default function DefaultHome() {
  return (
    <div className='home_wrapper'>
      <div className='home_content_block'>
        <div className='intro_1'>Hey, I'm <span className='intro_name'>Faiza N B</span></div>
        <div className='intro_2'>
          <span>I'm a </span>
          <span className='typed_role'>
            <Typed 
              strings={[
                'Full-stack Developer',
                'Tech Enthusiast',
                'Rookie Designer',
                'Problem Solver',
                'Full-stack Developer'
              ]}
              showCursor={false}
              fadeOut={true}
              fadeOutDelay={50}
              typeSpeed={70}
            >
            </Typed>
          </span>
        </div>
        <div className='btn_view'>
          <Link href="/about">
            <a><button>Checkout More</button></a>
          </Link>
        </div>
      </div>
      <div className='home_img_block'></div>
    </div>
  )
}
