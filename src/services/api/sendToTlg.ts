import axios from 'axios';
interface FormData {
  firstname: string;
  lastname: string;
  phone: string;
  orderName: string;
  price: string;
  postname: string;
  city: string;
  office: string;
}

const sendToTlg = async (formData: FormData) => {
  const tgbot = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const chat_id = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${tgbot}/sendMessage`;
  let message = `
      <b> Ім'я: ${formData.firstname}</b>
      <b> Прізвище: ${formData.lastname}</b>
      <b> Телефон: ${formData.phone}</b>
      <b> Замовлення: ${formData.orderName}</b>
      <b> Ціна: ${formData.price}</b>
      <b> Перевізник: ${formData.postname}</b>
      <b> Місто: ${formData.city}</b>
       <b> Відділення: ${formData.office}</b>
    `;

  const { data } = await axios.post(URI_API, {
    chat_id: chat_id,
    parse_mode: 'html',
    text: message,
  });
  return data;
};

export default sendToTlg;
