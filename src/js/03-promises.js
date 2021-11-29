// Библиотека уведомлений
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const delayInput = document.querySelector('[name=delay]');
const stepInput = document.querySelector('[name=step]');
const amountInput = document.querySelector('[name=amount]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

  event.preventDefault();

  let delay = Number(delayInput.value);
  let step = Number(stepInput.value);
  let amount = Number(amountInput.value);

  for (let i = 1; i <= amount; i ++) {
    
    const promiseSetTimeout = createPromise(i, delay)
      .then(({ position, delay }) => {
        
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
       
      })
      .catch(({ position, delay }) => {
        
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        
      });
    
    setTimeout(() => {
      promiseSetTimeout, delay
    });
    delay += step;
  }
}

function createPromise(position, delay) {
  
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
       if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }
    }, delay)
  });
  return promise
}




