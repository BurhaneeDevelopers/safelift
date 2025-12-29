import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

// This API route handles both Sanity webhooks and manual sitemap regeneration
export async function POST(request) {
  try {
    // Parse request body if it exists
    let body = {};
    try {
      body = await request.json();
    } catch (error) {
      // No body or invalid JSON - treat as manual trigger
    }

    // Log the revalidation trigger
    if (body._type) {
      console.log('Sitemap revalidation triggered by Sanity webhook:', {
        documentType: body._type,
        documentId: body._id,
        operation: body._rev ? 'update' : 'create'
      });
    } else {
      console.log('Manual sitemap revalidation triggered');
    }

    // Revalidate the sitemap
    revalidatePath('/sitemap.xml');
    
    // Also revalidate related pages based on document type
    if (body._type === 'blogs') {
      revalidatePath('/blogs');
      if (body.slug?.current) {
        revalidatePath(`/blogs/${body.slug.current}`);
      }
    } else if (body._type === 'product') {
      revalidatePath('/products');
      if (body.slug?.current) {
        revalidatePath(`/products/product/${body.slug.current}`);
      }
    } else if (body._type === 'mainCategory') {
      revalidatePath('/products');
      if (body.slug?.current) {
        revalidatePath(`/products/${body.slug.current}`);
      }
    } else if (body._type === 'jobOpening') {
      revalidatePath('/careers');
      if (body.slug?.current) {
        revalidatePath(`/careers/${body.slug.current}`);
      }
    }

    return NextResponse.json({ 
      message: 'Sitemap and related pages revalidated successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in sitemap revalidation:', error);
    return NextResponse.json(
      { message: 'Error revalidating sitemap', error: error.message },
      { status: 500 }
    );
  }
}

// Handle GET requests for manual testing
export async function GET() {
  try {
    // Manual trigger for testing
    revalidatePath('/sitemap.xml');
    
    return NextResponse.json({ 
      message: 'Sitemap manually revalidated',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in manual sitemap revalidation:', error);
    return NextResponse.json(
      { message: 'Error revalidating sitemap', error: error.message },
      { status: 500 }
    );
  }
}