export default function helper(data) {
  return data.map(char => {
    return {
      url: char.url,
      name: char.name,
      birth_year: char.birth_year,
      eyes: char.eye_color,
      hair_color: char.hair_color,
      gender: char.gender,
      height: char.height,
      mass: char.mass,
    }
  }
  )
}