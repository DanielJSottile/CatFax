const buildConfig = config => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json"
    }
  };
};

const parseJson = res => {
  return new Promise(resolve =>
    res.json().then(data =>
      resolve({
        status: res.status,
        statusText: res.statusText,
        data
      })
    )
  );
};

const makeRequest = (baseUrl, uri, config) => {
  return fetch(`${baseUrl}${uri}`, buildConfig(config))
    .then(parseJson)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.json.message);
      } else {
        return res.data;
      }
    });
};

export const doGet = (baseUrl, uri) => {
  return makeRequest(baseUrl, uri, {
    method: "GET"
  });
};
