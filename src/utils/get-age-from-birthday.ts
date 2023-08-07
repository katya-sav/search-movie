import { differenceInYears, parse } from 'date-fns'

export const getAgeFromBirthday = (birthDate: string): number => {
  const date = parse(birthDate, 'yyyy-MM-dd', new Date())
  const age = differenceInYears(new Date(), date)
  return age
}

// export const getAgeFromBirthday = (value: string) => {
//   const birthDate = new Date(value)
//   const today = new Date()

//   const age =
//     today.getFullYear() -
//     birthDate.getFullYear() -
//     Number(
//       today.getMonth() < birthDate.getMonth() ||
//         (today.getMonth() === birthDate.getMonth() &&
//           today.getDate() < birthDate.getDate()),
//     )
//   return age
// }
