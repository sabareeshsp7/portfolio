# Contact Form Email Setup Instructions

## Current Status
✅ **Contact form is working!**  
✅ **Success popup shows after form submission**  
✅ **Form data is logged to console**  
✅ **All form validation is working**  

## To Enable Real Email Sending

### Option 1: Resend (Recommended - Easy Setup)

1. **Sign up for Resend**: https://resend.com (Free tier: 100 emails/day)

2. **Install Resend**:
   ```bash
   npm install resend
   ```

3. **Get your API key** from Resend dashboard

4. **Update `src/pages/api/contact.js`**:
   ```javascript
   import { Resend } from 'resend';
   
   const resend = new Resend('your-resend-api-key');
   
   // Replace the TODO section with:
   await resend.emails.send({
     from: 'contact@yourdomain.com', // You need to verify this domain
     to: 'sabareeshsp7@gmail.com',
     subject: `Portfolio Contact: ${data.subject}`,
     html: `
       <h2>New contact form submission</h2>
       <p><strong>Name:</strong> ${data.name}</p>
       <p><strong>Email:</strong> ${data.email}</p>
       <p><strong>Subject:</strong> ${data.subject}</p>
       <p><strong>Message:</strong></p>
       <p>${data.message}</p>
     `
   });
   ```

### Option 2: EmailJS (Client-side, No backend needed)

1. **Sign up for EmailJS**: https://www.emailjs.com (Free tier: 200 emails/month)

2. **Create email service** and template in EmailJS dashboard

3. **Update the Contact.astro script section**:
   ```javascript
   // Replace the fetch call with:
   emailjs.send('your_service_id', 'your_template_id', {
     from_name: data.name,
     from_email: data.email,
     subject: data.subject,
     message: data.message,
     to_email: 'sabareeshsp7@gmail.com'
   }, 'your_public_key')
   ```

### Option 3: Gmail with App Password

1. **Enable 2-factor authentication** on your Gmail account

2. **Generate an App Password**: Google Account → Security → App passwords

3. **Install nodemailer**:
   ```bash
   npm install nodemailer
   ```

4. **Update the API with your credentials**

## Environment Variables

Create a `.env` file in your project root:
```env
RESEND_API_KEY=your_resend_key
GMAIL_USER=your_gmail@gmail.com
GMAIL_APP_PASSWORD=your_16_digit_app_password
```

## Testing

1. Fill out the contact form
2. Check your terminal/console for the logged message
3. Check your email inbox for the received message
4. Verify the success popup appears

## Current Email Address
All messages will be sent to: **sabareeshsp7@gmail.com**

To change this, update the email address in:
- `src/pages/api/contact.js` (line with 'sabareeshsp7@gmail.com')
