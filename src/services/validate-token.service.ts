import { instance } from "./axios"

export class TokenService {
  static async validate(token: string) {
    try {
      const response = await instance({
        method: "POST",
        url: "token",
        data: token
      })

      return response.data
    } catch (error) {
      throw error
    }
  }
}