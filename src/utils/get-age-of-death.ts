import { differenceInYears, parse } from 'date-fns'

export const getAgeOfDeath = (
  birthDate: string | null,
  deathDate: string | null,
): number | null => {
  if (!birthDate || !deathDate) {
    return null
  }

  const birth = parse(birthDate, 'yyyy-MM-dd', new Date())
  const death = parse(deathDate, 'yyyy-MM-dd', new Date())
  const age = differenceInYears(death, birth)
  return age
}
