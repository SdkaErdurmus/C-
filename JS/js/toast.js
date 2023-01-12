const toastTrigger = document.getElementById('button')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}


const toastTrigger1 = document.getElementById('button1')
const toastLiveExample1 = document.getElementById('liveToast1')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast1 = new bootstrap.Toast(toastLiveExample1)

    toast.show()
  })
}