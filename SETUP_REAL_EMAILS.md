# 🚀 URGENT: Set Up Real Email Delivery

Your contact form is ready! Follow these **5 simple steps** to receive emails directly in your inbox at **sabareeshsp7@gmail.com**.

## 📋 Step-by-Step Setup (Takes 5 minutes)

### Step 1: Create EmailJS Account
1. Go to **[https://www.emailjs.com/](https://www.emailjs.com/)**
2. Click **"Sign Up"** (it's FREE!)
3. Use your email: **sabareeshsp7@gmail.com**
4. Verify your email address

### Step 2: Connect Your Gmail
1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** and sign in with **sabareeshsp7@gmail.com**
5. **Copy your Service ID** (looks like `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

**Template Subject:**
```
Portfolio Contact: {{subject}}
```

**Template Content:**
```
Hello Sabareesh!

You have a new message from your portfolio website:

👤 Name: {{from_name}}
📧 Email: {{from_email}}  
📝 Subject: {{subject}}

💬 Message:
{{message}}

---
Sent from your portfolio contact form
Time: {{reply_to}}
```

4. **Copy your Template ID** (looks like `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** 
3. **Copy it** (looks like `pk_test_abcdef123`)

### Step 5: Update Your Code
**Replace these 3 values in your Contact.astro file:**

1. **Line 320:** Replace `"YOUR_PUBLIC_KEY_HERE"` with your actual public key
2. **Line 375:** Replace `"YOUR_SERVICE_ID"` with your service ID  
3. **Line 376:** Replace `"YOUR_TEMPLATE_ID"` with your template ID

**Example:**
```javascript
// Line 320
(window as any).emailjs.init("pk_test_YOUR_ACTUAL_KEY");

// Lines 375-376
const result = await (window as any).emailjs.send(
  'service_your_actual_id',     // Your service ID
  'template_your_actual_id',    // Your template ID
  templateParams
);
```

## 🎯 Quick Test

After updating the code:
1. **Restart your dev server** (`npm run dev`)
2. **Fill out your contact form**
3. **Check your inbox** at sabareeshsp7@gmail.com
4. **Success!** 🎉

## 🔧 Need Help?

**Can't find your IDs?** Here's where to get them:

- **Public Key:** EmailJS Dashboard → Account → General
- **Service ID:** EmailJS Dashboard → Email Services (click on your Gmail service)
- **Template ID:** EmailJS Dashboard → Email Templates (click on your template)

## 📊 What Happens Next?

✅ **Form submissions** → **Direct to your Gmail inbox**  
✅ **Success popup** shows to users  
✅ **Professional email format** with sender details  
✅ **100% reliable delivery** (EmailJS handles everything)  
✅ **Free tier:** 200 emails/month (perfect for portfolio)

## 🚨 Current Status

- ✅ Contact form works perfectly
- ✅ Success/error modals display correctly  
- ✅ EmailJS script loaded and ready
- ⏳ **Need to add your EmailJS credentials to receive emails**

**Once you add your credentials, every contact form submission will go directly to sabareeshsp7@gmail.com!**

---

**Having trouble?** Let me know your EmailJS credentials and I'll update the code for you!

## 🎁 Bonus: Email Preview

When someone contacts you, you'll receive:

```
From: Portfolio Contact Form
To: sabareeshsp7@gmail.com
Subject: Portfolio Contact: [Their Subject]

Hello Sabareesh!

You have a new message from your portfolio website:

👤 Name: John Doe
📧 Email: john@example.com  
📝 Subject: Collaboration Opportunity

💬 Message:
Hi Sabareesh! I love your portfolio and would like to discuss a potential collaboration...

---
Sent from your portfolio contact form
```

**Perfect professional format for your inbox!** 📧✨
