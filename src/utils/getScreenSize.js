
const getScreenSize = (screens) => {

  return Object.keys(
    Object.fromEntries(
      Object.entries(screens).filter(([key, value]) => value === true)
    )
  )[0];
}

export default getScreenSize