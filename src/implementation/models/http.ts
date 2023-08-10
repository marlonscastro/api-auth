export type httpResponse<T = any> = {
    statusCode: number
    data: T
}

export const serverError = (msg: string): httpResponse => ({
  statusCode: 500,
  data: new Error(msg)
})