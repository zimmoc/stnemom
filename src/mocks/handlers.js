import { rest } from 'msw';

const baseURL = 'https://unique-drf-name-api-thing-c4dbae8da0d4.herokuapp.com/';

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
          ctx.json({
            pk: 1,
            username: 'zimmoc',
            email: '',
            first_name: '',
            last_name: '',
            profile_id: 1,
            profile_image:
              'https://res.cloudinary.com/doazcetqr/image/upload/v1/media/images/GPvJu-PWYAEd0Pl_cfaza2',
          })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200))
    })
]