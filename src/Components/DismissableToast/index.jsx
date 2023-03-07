import React from 'react'
import { toast, Toaster, ToastBar } from 'react-hot-toast'
import { XCricleIcon } from '@heroicons/react/solid'

const DismissableToast = () => {
  return (
    <div>
      <Toaster
        reverseOrder={false}
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button
                    className="rounded-full p-1 ring-primary-400 transition hover:bg-[#444] focus:outline-none focus-visible:ring"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <XCricleIcon />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  )
}

export default DismissableToast
