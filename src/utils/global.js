import { toast } from 'react-toastify'

function callToast(message, type) {
    return toast[type](message, {
        autoClose: 3000,
        theme: 'colored',
        hideProgressBar: true
    })
}

function treatErrors(err) {
    if(err.response.data) {
        callToast('Houve um erro ao publicar seu link', 'error')
        callToast(err.response.data, 'error')
    } else {
        callToast('Houve um erro ao publicar seu link', 'error')
        callToast(err.response, 'error')
    }
}

export { treatErrors }