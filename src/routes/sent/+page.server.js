import PocketBase from 'pocketbase';
import { SECRET_EMAIL, SECRET_PASSWORD, POCKETBASE_URL } from '$env/static/private';


export async function load({ }) {
    const pb = new PocketBase(POCKETBASE_URL);
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
    const records = await pb.collection('texts').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    const results = records.map((record) => { return { to: record.to, message: record.message } })

    return {
        records: results
    }
}