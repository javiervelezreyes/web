const TEXT  = 'textContent'
const DATE  = '.mdata .date'
const TIME  = '.mdata .time'
const DSEP  = '/'
const TSEP  = ':'
const GO    = 'visibility: visible'
const ERROR = '/404'

function Helper () {
  function check (date, time) {
    let [day, month, year] = date.split (DSEP)
    let [hour, minute]     = time.split (TSEP)
    let publish = new Date (`${year}-${month}-${day}T${hour}:${minute}:00`)
    let now     = new Date ()
    return publish < now
  }

  return {check}
}

try {
  let date = document.querySelector (DATE)[TEXT]
  let time = document.querySelector (TIME)[TEXT]
  let ok   = Helper().check (date, time)
  if (ok) document.body.style  = GO
  else    window.location.href = ERROR
}
catch (e) {}

export default Helper ()
