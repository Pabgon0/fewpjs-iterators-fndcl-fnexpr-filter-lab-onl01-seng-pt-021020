function findMatching(drivers, string){
  let matches = drivers.filter (driver => {
    return driver === string
  })
  return matches
}