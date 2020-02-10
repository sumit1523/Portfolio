export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
  common: {
    image: '/images/profile/sumit_kumar.jpeg',
  },
  index: {
    title: 'sumit kumar',
    description: 'sumit kumar personal Portfolio '
  },
  profile: {
    title: 'sumit kumar | Profile',
    description: 'Over the last 3+ years, I have been working with Capgemini companies.'
  },
  works: {
    title: 'sumit kumar | Works',
    description: 'A selection of the work carried out over 3+ years of work. Among which: Websites, Web applications, coordinated images and more.'
  }
}
