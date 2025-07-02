import { useState } from 'react';
import Header from './components/Header'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import FormModal from './components/FormModal';

type FormType = 'consultation' | 'service' | 'job' | 'partnership';

function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    formType: FormType;
    serviceName?: string;
  }>({
    isOpen: false,
    formType: 'consultation',
    serviceName: undefined,
  });

  const openModal = (formType: FormType, serviceName?: string) => {
    setModalState({ isOpen: true, formType, serviceName });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header openModal={openModal} />
      <main>
        <HomePage openModal={openModal} />
      </main>
      <Footer />
      <FormModal 
        isOpen={modalState.isOpen}
        onClose={closeModal}
        formType={modalState.formType}
        serviceName={modalState.serviceName}
      />
    </div>
  )
}

export default App
