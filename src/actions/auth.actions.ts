'use server';
import { TOKEN_COOKIE } from '@/constants/config';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function logout(formData: FormData) {
    const store = cookies();
    await store.delete(TOKEN_COOKIE);

    return redirect('/login');
}