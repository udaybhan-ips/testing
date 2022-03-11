export const getImagesDetailsService = {
    getImagesDetails,
};

const enhancedFetch = ({
  url,
  requestOptions,
  headers
}) => {
  requestOptions.headers = headers;
  return fetch(url, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        window.location.href = "/"
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

function getImagesDetails(images){

    const requestOptions = {
        method: 'POST',
        body:JSON.stringify({request_type:'https', files:['https://scaivision-ios.s3.ap-northeast-1.amazonaws.com/0524B3BF-22B9-49D0-8176-664B91D2423B-487-0000003834B303CA.jpg']})
    };
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('user', 'ee9cb6f2819d42889514fff16f0f6cf3');
    headers.append('key', '5463894a8d5c095af498d0d489d8065d7b7a7bf922d0445ff8d7f6e1cb9fd0cd');

    
    
    return enhancedFetch({
        url: `https://vision.scai.ai/ml`,
        requestOptions,
        headers
    });
}



