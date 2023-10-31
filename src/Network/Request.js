const controller = new AbortController();

export async function makePostRequest(url, body, { headers, spinnerctx } = {}) {
  if (spinnerctx) {
    // spinnerct
  }

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    credentials: "include",
    signal: controller.signal,
    headers: { "Content-Type": "application/json", ...headers },
  })
    .then((data) => data.json())
    .finally(() => {
      if (spinnerctx) {
        // stop spinner
      }
    });
}

export async function makeGetRequest({ url, headers, spinnerctx }) {
  if (spinnerctx) {
    // spinnerct
  }

  return fetch(url, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    signal: controller.signal,
    // headers: { ...headers },
  })
    .then((data) => data.json())
    .finally(() => {
      if (spinnerctx) {
      }
    });
}
