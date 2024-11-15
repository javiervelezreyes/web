const POST   = 'post'
const TYPE   = 'Content-Type'
const FORM   = 'application/x-www-form-urlencoded'
const NAME   = 'fields[name]'
const MAIL   = 'fields[email]'
const SUBMIT = 'ml-submit'
const CORS   = 'anticsrf'
const ONE    = '1'
const TRUE   = 'true'

function Helper (config) {
  let {host} = config
  let {path} = config
  let epoint = host + path

  async function subscribe (cfg) {
    let { user } = cfg
    let { mail } = cfg

    let form = new URLSearchParams ()
    form.append (NAME,   user)
    form.append (MAIL,   mail)
    form.append (SUBMIT, ONE)
    form.append (CORS,   TRUE)

    let response = await fetch (epoint, {
      method  : POST,
      headers : { [TYPE] : FORM },
      body    : form.toString (),
    })

    return response
  }

  return { subscribe }

}

export default Helper