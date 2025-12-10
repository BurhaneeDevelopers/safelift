import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Verify the webhook secret (optional but recommended)
    const secret = request.headers.get('x-sanity-webhook-secret');
    if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // Get the document type from the webhook payload
    const { _type, slug } = body;

    // Revalidate specific paths based on document type
    switch (_type) {
      case 'mainCategory':
        revalidatePath('/products');
        break;
      case 'product':
        if (slug?.current) {
          revalidatePath(`/products/${slug.current}`);
        }
        revalidatePath('/products');
        break;
      case 'blogs':
        if (slug?.current) {
          revalidatePath(`/blogs/${slug.current}`);
        }
        revalidatePath('/blogs');
        break;
      case 'customPage':
        // Revalidate all pages for SEO updates
        revalidatePath('/');
        revalidatePath('/products');
        revalidatePath('/blogs');
        revalidatePath('/about');
        revalidatePath('/contact');
        revalidatePath('/infra');
        break;
      default:
        // Revalidate homepage for any other changes
        revalidatePath('/');
    }

    return NextResponse.json({ 
      message: 'Revalidation successful',
      revalidated: true,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: error.message },
      { status: 500 }
    );
  }
}