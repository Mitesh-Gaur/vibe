import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../components/CustomInput';
import Modal from '../components/Modal';
import { decrementAsync, incrementAsync } from '../store/actions/testActions';

export default function HomePage() {

  const [state, setState] = useState({
    email: '',
    mobile: '',
    password: ''
  });

  const [emailError, setEmailError] = useState('');

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const handleSubmit = async () => {
    close();
  }

  const onEmailChange = (e) => {
    setState(pre => ({ ...pre, email: e.target.value }))
  }

  const onFormBlur = () => {
    console.log("form blurred")
  }

  return (
    <section className="text-gray-400 body-font customBg min-h-screen flex items-center justify-center">
      <div className="container px-40 py-24 mx-auto flex flex-wrap items-center">
        <LogoCard />
        <LoginCard onSignupClick={open} />
      </div>

      <ModalContainer>
          {modalOpen ? <Modal
            modalOpen={modalOpen}
            modalTitle={'Sign Up'}
            modalSubTitle={"It's quick and easy."}
            modalTitleStyle={'text-3xl leading-9'}
            type={'dropIn'}
            handleClose={close}
            handleSubmit={handleSubmit}
            modalSubmitLabel={'Submit'}
            modalSubmitButtonStyle={'bg-green-600'}
          >
            <form 
              onSubmit={e => e.preventDefault()}
              className='w-96 p-4 pb-0'
              onBlur={onFormBlur}
            >
              <div className='flex items-center justify-between'>
                <CustomInput
                  inputLabel={'First Name'}
                  inputValue={state.firstName}
                  inputStyle={'mr-2 mb-2'}
                  onChangeText={() => {}}
                  error={''}
                />
                
                <CustomInput
                  inputLabel={'Last Name'}
                  inputValue={state.lastName}
                  inputStyle={'mb-2'}
                  onChangeText={() => {}}
                  error={''}
                />
              </div>
              <CustomInput
                inputLabel={'Email Address'}
                inputValue={state.email}
                onChangeText={onEmailChange}
                error={emailError}
              />
              <CustomInput
                inputLabel={'Password'}
                inputValue={state.email}
                onChangeText={onEmailChange}
                error={emailError}
                inputType={'password'}
              />
              <p className='text-xs leading-4'>
                People who use our service may have uploaded your contact information to Vibe. <a href="javascript:void(0)" className='learnMoreLink'>Learn more.</a></p>
              <p className='text-xs leading-4 mt-2 mb-3'>
              By clicking Sign Up, you agree to our <a href="javascript:void(0)" className='learnMoreLink'>Terms</a>, <a href="javascript:void(0)" className='learnMoreLink'>Privacy Policy</a> and <a href="javascript:void(0)" className='learnMoreLink'>Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
            </form>
          </Modal> : null}
        </ModalContainer>
    </section>
  )
}

function LogoCard() {
  return (
    <div className="lg:w-3/5 md:w-10/12 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-9xl -ml-5 text-primaryGradient vibeHeading">VIBE</h1>
      <p className="mt-0 text-gray-400 text-2xl w-8/12 leading-8">Vibe helps you connect and share with the people in your life.</p>
    </div>
  )
}

function LoginCard({
  onSignupClick
}) {
  return (
    <div className="lg:w-2/6 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <div className="relative mb-4">
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder='Email address' 
          className="w-full bg-white bg-opacity-20 focus:bg-transparent focus:ring-1 focus:ring-blue-400 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none placeholder:text-gray-500 focus:placeholder:text-gray-400 text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
        />
      </div>
      <div className="relative mb-4">
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder='Password' 
          className="w-full bg-white bg-opacity-20 focus:bg-transparent focus:ring-1 focus:ring-blue-400 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none placeholder:text-gray-500 focus:placeholder:text-gray-400 text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
        />
      </div>
      <button className="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg tracking-wider">Log in</button>
      <p className="text-xs mt-3 tracking-wider">Forgotten password?</p>
      <hr className='bg-gray-200 my-6' />

      <button 
        className="text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg tracking-wider"
        onClick={onSignupClick}
      >
          Create new account
      </button>
    </div>
  )
}

function ModalContainer({ children }) {
  return (
    // Enables the animation of components that have been removed from the tree
    <AnimatePresence
      // Disable any initial animations on children that
      // are present when the component is first rendered
      initial={false}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      mode={'wait'}
      // Fires when all exiting nodes have completed animating out
      onExitComplete={() => { }}
    >
      {children}
    </AnimatePresence>
  )
}
