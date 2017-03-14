/**
 * pick a random element from an array
 */
export function pickRandom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

export function pSetTimeout(timeout: number): Promise<any> {
  return new Promise((resolve, reject) => setTimeout(resolve, timeout))
}

/**
 * execute a function for each element of an array at a specified interval
 */
export async function intervalForeach<T>(
  array: T[], f: (item: T) => void, timeout: number,
): Promise<void> {
  for (const item of array) {
    await pSetTimeout(500)
    f(item)
  }
}

export function debug(message?: any, ...optionalParams: any[]) {
  // tslint:disable-next-line:no-console
  console.log(message, ...optionalParams)
}