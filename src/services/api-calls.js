const baseUrl = 'https://www.dnd5eapi.co'

// Request info
// GET to:
// https://www.dnd5eapi.co/api/monsters

export async function getMonsterList() {
  const res = await fetch(`${baseUrl}/api/monsters`)
  return res.json()
}

export async function getDetails(apiUrl) {
  console.log(apiUrl);
  // Assuming we've clicked on Adult Black Dragon:
  // GET https://www.dnd5eapi.co/api/monsters/adult-black-dragon
  const res = await fetch(`${baseUrl}${apiUrl}`)
  return res.json()

  // return fetch(`${baseUrl}${apiUrl}`)
  // .then(res => {
  //   return res.json()
  // })
}

export async function spellSearch(formData) {
  // GET https://www.dnd5eapi.co/api/spells/?name=fire
  const res = await fetch(`${baseUrl}/api/spells/?name=${formData.query}`)
  return res.json()

  // return fetch(`${baseUrl}/api/spells/?name=${formData.query}`)
  // .then(res => {
  //   return res.json()
  // })
}

export async function getSpellDetails(spellName) {
  // if spellName is "fire-bolt"
  // GET https://www.dnd5eapi.co/api/spells/fire-bolt
  const res = await fetch(`${baseUrl}/api/spells/${spellName}`)
  return res.json()
}

export async function getClassList() {
  const res = await fetch(`${baseUrl}/api/classes/`)
  return res.json()
}

export async function getClassDetails (className) {
  const res = await fetch(`${baseUrl}/api/classes/${className}`)
  return res.json()
}

export async function getEquipmentDetails(equipmentName) {
  const res = await fetch(`${baseUrl}/api/equipment/${equipmentName}`)
  return res.json()
}