class Api {
  constructor ({ baseUrl, headers }) { // options
    this.baseUrl = baseUrl
    this.headers = headers
  }

  getItems () {
    return fetch(this.baseUrl, {
      headers: this.headers
    })
    .then(res => res.json())
  }

  deleteItem (id) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject('Something went wrong!')
    })

  }

  createItem (item) { // { name: 'blabla' }
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(item)
    })
    .then(res => res.json())
  }

}
