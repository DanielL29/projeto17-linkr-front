import { toast } from 'react-toastify'

function callToast(message, type) {
    return toast[type](message, {
        autoClose: 3000,
        theme: 'colored',
        hideProgressBar: true
    })
}

function treatErrors(err) {
    console.log(err)
    if(err.response.data) {
        callToast(err.response.data, 'error')
    } else {
        callToast(err.response, 'error')
    }
}

export { treatErrors, callToast }