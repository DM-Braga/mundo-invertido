import { getHellfireClubSubscriptions, subscribeHellfireClub } from "./firebase/hellfire-clube.js"

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

const subscriptionsList = document.getElementById('subscriptions')

btnSubscribe.addEventListener('click', async () => {
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value
  }

  // Salvar no banco de dados:
  const id = await subscribeHellfireClub(subscription)

  txtName.value = ''
  txtEmail.value = ''
  txtLevel.value = ''
  txtCharacter.value = ''

  alert(`Inscrição ${id} foi adicionada com sucesso!`)
})

async function loadData() {
  const subscriptions = await getHellfireClubSubscriptions()
  
  subscriptionsList.innerHTML = subscriptions.map(sub => `
  <li>
    ${sub.name}
  <li>  
  `)
  console.log(subscriptions)
}

loadData()
