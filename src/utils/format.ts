export const isEmpty = (value?: string) =>
  typeof value === 'undefined' || value === null || value === ''

const format = {
  valueOrEmpty: (value?: string) => (isEmpty(value) ? 'N/a' : value),
  fullName: (firstName?: string | null, lastName?: string | null) => {
    return firstName || lastName ? `${firstName ?? ''} ${lastName ?? ''}` : 'N/a'
  },
}

export default format
