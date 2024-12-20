"use server";
export const fetchLicenseVerification = async (licenseKey: string) => {
  const response = await fetch(
    `https://keyauth.win/api/seller/?sellerkey=${
      process.env.SELLER_KEY
    }&type=verify&key=${encodeURIComponent(licenseKey)}`
  );
  const data = await response.json();
  return data;
};

export const downloadFile = async (key: string) => {
  // user key LWAY-Tn3IXf
  const requestOptions = {
    method: "GET",
    redirect: "follow" as RequestRedirect,
  };
  return await fetch(
    `https://keyauth.win/api/seller/?sellerkey=${process.env.SELLER_KEY}&type=userdata&user=${key}`,
    requestOptions
  );
};
