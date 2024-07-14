import PocketBase from 'pocketbase';
import {SECRET_EMAIL,SECRET_PASSWORD,POCKETBASE_URL} from '$env/static/private';


export const actions={
    create: async ({request})=>{
        const pb = new PocketBase(POCKETBASE_URL);
        //sign in
         await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
        const form = await request.formData();

        const to = form.get('to')?? '';
        const message = form.get('message')??'';

        const data = {
            to,
            message
        };
        
        await pb.collection('texts').create(data);


    }
}