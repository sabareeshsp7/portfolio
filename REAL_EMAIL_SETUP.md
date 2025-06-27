# 📧 Real Email Integration Setup

This guide will help you set up **real email delivery** for your contact form. The form currently logs messages to the console - let's make it send actual emails to your inbox!

## 🚀 Quick Setup with EmailJS (Recommended)

EmailJS is perfect for portfolio sites - no backend server required, free tier available, and very reliable.

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set Up Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (sabareeshsp7@gmail.com)
5. Note down your **Service ID** (e.g., `service_xyz123`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```html
Subject: Portfolio Contact: {{subject}}

New message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Note down your **Template ID** (e.g., `template_abc456`)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `pk_test_xyz789`)

### Step 5: Update Your Contact Form

Replace the current contact form implementation with EmailJS:

```html
<!-- Add EmailJS script to your <head> or before closing </body> -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

<script>
// Initialize EmailJS with your public key
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
})();

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Get form data
    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      subject: formData.get('subject') || 'Portfolio Contact',
      message: formData.get('message')
    };

    try {
      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID',    // Replace with your service ID
        'YOUR_TEMPLATE_ID',   // Replace with your template ID
        templateParams
      );
      
      // Show success modal
      showSuccessModal();
      form.reset();
      
    } catch (error) {
      console.error('Error sending email:', error);
      showErrorModal('Failed to send message. Please try again or contact me directly.');
    } finally {
      // Reset button
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
});
</script>
```

## 🛠 Alternative Setup with Resend API

If you prefer a more robust server-side solution:

### Step 1: Get Resend API Key
1. Sign up at [https://resend.com/](https://resend.com/)
2. Get your API key from the dashboard
3. Add it to your environment variables

### Step 2: Install Resend
```bash
npm install resend
```

### Step 3: Update API Endpoint
Replace the content of `src/pages/api/contact.js`:

```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate input
    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({
        success: false,
        message: 'All fields are required.'
      }), { status: 400 });
    }

    // Send email
    await resend.emails.send({
      from: 'contact@yourdomain.com', // Must be your verified domain
      to: 'sabareeshsp7@gmail.com',
      subject: `Portfolio Contact: ${data.subject || 'New Message'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Message sent successfully!'
    }), { status: 200 });

  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Failed to send message.'
    }), { status: 500 });
  }
};
```

### Step 4: Environment Variables
Create `.env` file:
```
RESEND_API_KEY=your_actual_api_key_here
```

## 📱 Testing Your Setup

1. **Fill out your contact form**
2. **Check your email** (sabareeshsp7@gmail.com)
3. **Check spam folder** if needed
4. **Test error handling** by disconnecting internet

## 🎯 Recommended: EmailJS Setup

For your portfolio, I recommend **EmailJS** because:
- ✅ **No server required** - works with static hosting
- ✅ **Free tier** - 200 emails/month
- ✅ **Reliable** - used by thousands of developers
- ✅ **Easy setup** - just add a script tag
- ✅ **Gmail integration** - direct to your inbox

## 🔧 Quick EmailJS Implementation

Want to implement EmailJS right now? Here's the exact code:

1. **Get your EmailJS credentials** (follow steps 1-4 above)
2. **I'll help you update the code** with your actual credentials

Just let me know when you have:
- Your Public Key
- Your Service ID  
- Your Template ID

And I'll update your contact form to send real emails! 📧✨

---

**Current Status:** Your form works perfectly and shows success/error messages. Messages are logged to your browser console. Follow this guide to enable real email delivery to sabareeshsp7@gmail.com.
