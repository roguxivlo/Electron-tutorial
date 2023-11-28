const func = async () => {
  const response = await window.versions.ping()
  alert(response)
}

func()

// const information = document.getElementById('info')

// information.innerText = `This app is using Chrome (v${versions.chrome()}), \
//                           Node.js (v${versions.node()}), \
//                           Electron (v${versions.electron()}), \
//                           and a var (${versions.var}).\n\n`