import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'nsasbh3a',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skOY5j129QLBguoIIKn0dv94I9Z3NWjLs4KJBxcAz1D1IYP27mg0BK1bIMk75HwxNzQn7AoFrKVYuy7iN9G134aT8as0WOlKDmrgARoiTrrvL3XdHIyFCATn5by78IiYmeBo7ZEAGecz87je9Gdo10NK0bpHfYTOGX3SrjDJCpajpKEjwt8j',
    useCdn: false,
})