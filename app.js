const title = document.querySelector('.title')

const text = 'JavaScript'
const arrayText = text.split('')

arrayText.forEach((letter, i) => {
  const span = document.createElement('span')
  span.innerHTML = letter
  span.classList.add('flash')
  span.style.animationDelay = `${i * 0.1}s`
  title.appendChild(span)
})
