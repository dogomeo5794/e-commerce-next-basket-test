interface Params {
  [key: string]: any
}

export class API {
  constructor() {
    // 
  }

  static async get(url: string, params?: Params) {
    let apiUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
    if (params && Object.keys(params).length > 0) {
      apiUrl = apiUrl + '?' + Object.keys(params).map(key => `${key}=${params[key]}`).join("&");
    }
    const response = await fetch (apiUrl, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
    });
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    const status = response.status;
    const data = await response.json();

    return {data, status}
  }

  static async post(url: string, body: any, params?: any) {
    let apiUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
    if (params && Object.keys(params).length > 0) {
      apiUrl = apiUrl + '?' + Object.keys(params).map(key => `${key}=${params[key]}`).join("&");
    }

    const response = await fetch (apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    const data = await response.json();

    return data
  }

  static async delete() {}

  static async patch() {}

  static async update() {}

}
