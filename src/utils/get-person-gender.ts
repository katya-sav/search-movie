export const getPersonGender = (gender: string) => {
  switch (gender) {
    case '0':
      return 'Not set'

    case '1':
      return 'Female'

    case '2':
      return 'Male'

    case '3':
      return 'Non-binary'

    default:
      return null
  }
}
