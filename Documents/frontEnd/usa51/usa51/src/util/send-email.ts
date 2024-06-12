export function sendEmail(data: any, apiEndpoint: any) {
  console.log(data);

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
