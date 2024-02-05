interface Options {
  params?: {
    [key: string]: any
  }
  headers?: {
    [key: string]: any
  }
}

export class API {
  constructor() {
    // 
  }

  static async get(url: string, options?: Options) {
    let headers: any = {
      "content-type": "application/json"
    }
    let apiUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
    if (options?.params && Object.keys(options.params).length > 0) {
      apiUrl = apiUrl + '?' + Object.keys(options.params).map(key => `${key}=${options?.params ? options?.params[key] : ""}`).join("&");
    }
    if (options?.headers && Object.keys(options.headers).length > 0) {
      Object.keys(options.headers).forEach((key, index) => {
        headers[key] = options?.headers ? options?.headers[key] : ""
      });
    }
    const response = await fetch (apiUrl, {
      method: "GET",
      headers: headers
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
    const status = response.status;
    const data = await response.json();

    return {data, status}
  }

  static async put(url: string, body: any, params?: any) {
    let apiUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
    if (params && Object.keys(params).length > 0) {
      apiUrl = apiUrl + '?' + Object.keys(params).map(key => `${key}=${params[key]}`).join("&");
    }

    const response = await fetch (apiUrl, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    const status = response.status;
    const data = await response.json();

    return {data, status}
  }

  static async delete() {}

  static async patch() {}

  static async update() {}

}
