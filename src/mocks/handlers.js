import { rest } from "msw";

const baseURL = "https://drf-api-lg-2bd6e38fa581.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 1,
        "username": "admin",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 1,
        "profile_image": "https://res.cloudinary.com/lu1725gia/image/upload/v1/media/../default_profile_qdjgyp"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];