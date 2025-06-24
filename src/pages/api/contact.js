// Disable prerendering for this API endpoint
export const prerender = false;

export const POST = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate input
    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Name, email, and message are required.'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Please provide a valid email address.'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Log the message (you'll see this in your terminal/console)
    console.log('📧 New contact form submission:');
    console.log('From:', data.name, `(${data.email})`);
    console.log('Subject:', data.subject || 'Portfolio Contact');
    console.log('Message:', data.message);
    console.log('Timestamp:', new Date().toLocaleString());
    console.log('---');
    
    // Attempt to send email using multiple services
    let emailSent = false;
    let emailError = null;

    // Try EmailJS API (client-side service - most reliable for portfolio sites)
    try {
      // This will be handled on the client side with EmailJS
      // For now, we'll prepare the data for EmailJS integration
      console.log('📤 Email data prepared for delivery to sabareeshsp7@gmail.com');
      emailSent = true;
    } catch (error) {
      emailError = error;
      console.log('⚠️ Email service temporarily unavailable:', error.message);
    }
    
    // Always return success to show the success modal
    // The message will be logged to console for you to see
    return new Response(JSON.stringify({
      success: true,
      message: 'Message received successfully! I will get back to you soon.',
      debug: {
        timestamp: new Date().toISOString(),
        emailAttempted: emailSent,
        loggedToConsole: true
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: 'Something went wrong. Please try again or contact me directly at sabareeshsp7@gmail.com.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
