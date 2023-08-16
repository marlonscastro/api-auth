export type httpResponse<T = any> = {
    statusCode: number
    data: T
}

export const serverError = (msg: string): httpResponse => ({
  statusCode: 500,
  data: new Error(msg)
})

export const badRequest = (msg: string): httpResponse => ({
  statusCode: 400,
  data: new Error(msg)
})

export const unauthorized = (msg: string): httpResponse => ({
  statusCode: 401,
  data: new Error(msg)
})


export const ok = <T = any>(data: T): httpResponse<T> => ({
  statusCode: 200,
  data
 })