# 🎓 COMPLETE ENROLLMENT & PAYMENT SYSTEM

## Full University-Style Course Enrollment with Stripe Payment Integration

---

## 📋 SYSTEM OVERVIEW

Your complete enrollment system now includes:

1. **Course Catalog** - Internal university-style catalog
2. **Enrollment Process** - Select course → Choose session → Enroll
3. **Student Portal States** - Not enrolled → Enrolled (unpaid) → Enrolled (paid)
4. **Payment Integration** - Stripe payment processing
5. **Email Notifications** - Welcome & payment emails
6. **Canvas Access** - Automatic after payment
7. **Instructor Notifications** - Payment confirmations

---

## 🔄 COMPLETE STUDENT FLOW

### Step 1: Student Creates Account
- Visit `register.html`
- Create account with email/password
- Firebase creates account
- Student is redirected to portal

### Step 2: Browse Course Catalog
- Student clicks "Browse Course Catalog" in portal
- Opens `course-catalog.html`
- Sees all 4 programs with session times:
  - **WEB101** - Full-Stack Web Development ($297)
  - **IOS101** - iOS App Development ($297)
  - **PY101** - Python & Automation ($197)
  - **BUS101** - Tech Startup Foundations ($197)

### Step 3: Select Course & Session
- Student reviews course details
- Selects preferred session time (radio button)
- Clicks "Enroll Now"

### Step 4: Complete Enrollment
- Enrollment modal opens
- Shows course summary
- Student selects payment plan:
  - Pay in Full (10% discount)
  - 2-Pay Plan
  - 3-Pay Plan
  - Monthly Payments
- Student agrees to terms
- Clicks "Complete Enrollment"

### Step 5: Enrollment Confirmation
- Form submits to Formspree
- Success modal appears
- Student sees: "Enrollment Successful!"
- Message: "Check email for payment instructions"

### Step 6: Receive Welcome Email
- Student gets email within 15 minutes
- Email contains:
  - Welcome message
  - Course details
  - Payment amount
  - Payment link to `payment.html`
  - What to expect next

### Step 7: View Enrollment in Portal
- Student returns to portal
- Sees enrolled course
- **Yellow payment alert** shows:
  - "Payment Required"
  - Balance amount
  - "Pay Now" button

### Step 8: Complete Payment
- Student clicks "Pay Now"
- Redirected to `payment.html`
- Sees order summary
- Enters billing info
- Enters card details (Stripe)
- Submits payment

### Step 9: Payment Processed
- Stripe processes payment
- Student redirected to success page
- Receives payment confirmation email
- **YOU receive payment notification email**

### Step 10: Access Canvas
- You manually unlock Canvas course
- (OR system auto-unlocks if webhook configured)
- Student portal updates
- "Pay Now" button → "Access Canvas" button
- Student clicks → Opens Canvas course
- Student begins learning!

---

## 📧 EMAIL TEMPLATES

### Email 1: Enrollment Welcome (You Send This)

**Subject:** Welcome to Codex Labs Institute - Payment Information

```
Hi [Student Name],

Congratulations! You've successfully enrolled in [Course Name] ([Course Code]) at Codex Labs Institute.

📚 YOUR ENROLLMENT DETAILS:
- Course: [Course Name]
- Course Code: [Course Code]
- Session: [Session Time]
- Start Date: February 2, 2026
- Payment Plan: [Payment Plan]

💳 PAYMENT INFORMATION:
Tuition: $[Amount]
Amount Due Today: $[First Payment Amount]

To complete your enrollment and access course materials, please submit your payment:

👉 Make Payment: https://your-website.com/payment.html?course=[COURSE_CODE]

🎯 WHAT HAPPENS NEXT:
1. Submit your payment using the link above
2. You'll receive Canvas login credentials within 1 hour
3. Access your course materials and start learning!
4. Join us for your first live session on [Date]

📞 NEED HELP?
Email: codexlabsinstitute@gmail.com

We're excited to have you in the program!

Best regards,
Codex Labs Institute Team
```

---

### Email 2: Payment Confirmation (Automatic via Stripe)

**Subject:** Payment Received - Canvas Access Granted

```
Hi [Student Name],

Your payment has been successfully processed! 🎉

💳 PAYMENT DETAILS:
Amount Paid: $[Amount]
Course: [Course Name] ([Course Code])
Payment Plan: [Payment Plan]
Transaction ID: [Stripe Transaction ID]

🎓 YOUR CANVAS ACCESS:
Your Canvas course has been unlocked and is now ready!

👉 Access Your Course: [Canvas Course URL]

Login Credentials:
Email: [Student Email]
Password: Create password on first login

📚 NEXT STEPS:
1. Log in to Canvas using the link above
2. Complete the Welcome Module
3. Review the course syllabus
4. Join the course Slack channel
5. Attend your first live session on [Date]

📅 YOUR SCHEDULE:
Live Sessions: [Session Time]
Self-Paced Work: Complete on your schedule
Program End Date: [End Date]

Questions? Reply to this email or contact us at codexlabsinstitute@gmail.com

Happy learning!
Codex Labs Institute Team
```

---

### Email 3: Instructor Payment Notification (You Receive This)

**Subject:** 💰 New Payment Received - [Student Name]

```
New payment received for [Course Code]!

STUDENT INFORMATION:
Name: [Student Name]
Email: [Student Email]

PAYMENT DETAILS:
Course: [Course Name] ([Course Code])
Amount: $[Amount]
Payment Plan: [Payment Plan]
Transaction ID: [Stripe Transaction ID]
Date: [Date & Time]

NEXT STEPS FOR YOU:
☐ Enroll student in Canvas course
☐ Send Canvas login credentials
☐ Add to course Slack channel
☐ Add to student roster

Student Email: [Student Email]
Canvas Course: [Canvas Course URL]

View in Stripe: [Stripe Dashboard URL]
```

---

## 🔧 SETUP INSTRUCTIONS

### Part 1: Course Catalog Setup

**File:** `course-catalog.html`

**What to Update:**
1. **Formspree Form ID** (Line ~738):
   ```html
   <form id="enrollmentForm" action="https://formspree.io/f/YOUR_ENROLLMENT_FORM_ID" method="POST">
   ```
   
2. **Course Details** (Already configured):
   - WEB101: $297, 12 weeks, 2 session options
   - IOS101: $297, 8 weeks, 1 session option
   - PY101: $197, 6 weeks, 2 session options
   - BUS101: $197, 6 weeks, 1 session option

3. **Session Times** (Update as needed):
   - Edit the session times in each course card
   - Add/remove session options

---

### Part 2: Student Portal Setup

**File:** `student-portal-with-enrollment.html`

**How It Works:**
The portal checks enrollment status using the `enrolledStudents` object (Line ~457):

```javascript
const enrolledStudents = {
    'student@example.com': {
        courseCode: 'WEB101',
        courseName: 'Full-Stack Web Development',
        session: 'Sundays 10:00 AM - 12:00 PM EST',
        tuition: 297,
        paymentPlan: 'full',
        paid: false,  // Change to true after payment
        balance: 297, // Update after payments
        canvasUrl: 'https://canvas.instructure.com/courses/YOUR_COURSE_ID'
    }
};
```

**How to Add Enrolled Students:**

After a student enrolls (from Formspree notification), manually add them:

1. Open `student-portal-with-enrollment.html`
2. Find the `enrolledStudents` object (around line 457)
3. Add their email and enrollment details:
   ```javascript
   'newstudent@email.com': {
       courseCode: 'WEB101',
       courseName: 'Full-Stack Web Development',
       session: 'Sundays 10:00 AM - 12:00 PM EST',
       tuition: 297,
       paymentPlan: '3-pay',
       paid: false,
       balance: 297,
       canvasUrl: 'https://canvas.instructure.com/courses/12345'
   }
   ```
4. Save and upload

**Portal Behavior Based on Status:**

| Status | Portal Shows |
|--------|-------------|
| Not enrolled | "Browse Course Catalog" button |
| Enrolled, not paid | Yellow payment alert + "Pay Now" button |
| Enrolled, paid | "Access Canvas" button |

---

### Part 3: Payment Page Setup

**File:** `payment.html`

**Stripe Configuration Required:**

1. **Get Stripe Keys:**
   - Sign up at https://stripe.com
   - Get your publishable key
   - Get your secret key

2. **Update Payment Page (Line ~329):**
   ```javascript
   const stripe = Stripe('pk_test_YOUR_PUBLISHABLE_KEY_HERE');
   ```

3. **Create Server Endpoint:**
   You need a server endpoint to create Payment Intents. Options:

   **Option A: Formspree + Stripe (Easiest)**
   - Use Formspree to collect payment data
   - Manually process in Stripe dashboard
   - Send Canvas access manually

   **Option B: Serverless Function (Recommended)**
   - Create Netlify/Vercel function
   - Handles Stripe Payment Intent creation
   - See detailed setup below

   **Option C: Full Backend (Advanced)**
   - Node.js/Express server
   - Stripe webhook handling
   - Automatic Canvas enrollment

---

### Part 4: Stripe Payment Intent Endpoint

**Create this file:** `netlify/functions/create-payment-intent.js`

```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { courseCode, courseName, amount, email, name } = JSON.parse(event.body);

    // Create Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: 'usd',
      description: `Enrollment: ${courseName} (${courseCode})`,
      receipt_email: email,
      metadata: {
        courseCode: courseCode,
        courseName: courseName,
        studentEmail: email,
        studentName: name
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret })
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message })
    };
  }
};
```

**Environment Variables (Netlify):**
```
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

---

### Part 5: Stripe Webhook for Auto-Canvas Access

**Create this file:** `netlify/functions/stripe-webhook.js`

```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const sig = event.headers['stripe-signature'];
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  // Handle successful payment
  if (stripeEvent.type === 'payment_intent.succeeded') {
    const paymentIntent = stripeEvent.data.object;
    const { courseCode, courseName, studentEmail, studentName } = paymentIntent.metadata;

    // Send notification to you
    await sendInstructorNotification({
      studentName,
      studentEmail,
      courseCode,
      courseName,
      amount: paymentIntent.amount / 100,
      transactionId: paymentIntent.id
    });

    // Send Canvas access email to student
    await sendCanvasAccessEmail({
      studentName,
      studentEmail,
      courseCode,
      courseName
    });

    // Update student enrollment status in database
    // (You'll need to implement this based on your database)
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) };
};

async function sendInstructorNotification(data) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  await transporter.sendMail({
    from: 'noreply@codexlabsinstitute.com',
    to: 'codexlabsinstitute@gmail.com',
    subject: `💰 New Payment - ${data.studentName}`,
    html: `
      <h2>New Payment Received!</h2>
      <p><strong>Student:</strong> ${data.studentName}</p>
      <p><strong>Email:</strong> ${data.studentEmail}</p>
      <p><strong>Course:</strong> ${data.courseName} (${data.courseCode})</p>
      <p><strong>Amount:</strong> $${data.amount}</p>
      <p><strong>Transaction ID:</strong> ${data.transactionId}</p>
      <hr>
      <p><strong>Next Steps:</strong></p>
      <ul>
        <li>Enroll student in Canvas</li>
        <li>Add to course Slack</li>
        <li>Add to roster</li>
      </ul>
    `
  });
}

async function sendCanvasAccessEmail(data) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const canvasUrls = {
    'WEB101': 'https://canvas.instructure.com/courses/YOUR_WEB101_COURSE_ID',
    'IOS101': 'https://canvas.instructure.com/courses/YOUR_IOS101_COURSE_ID',
    'PY101': 'https://canvas.instructure.com/courses/YOUR_PY101_COURSE_ID',
    'BUS101': 'https://canvas.instructure.com/courses/YOUR_BUS101_COURSE_ID'
  };

  await transporter.sendMail({
    from: 'Codex Labs Institute <noreply@codexlabsinstitute.com>',
    to: data.studentEmail,
    subject: 'Payment Received - Canvas Access Granted! 🎉',
    html: `
      <h2>Welcome to ${data.courseName}!</h2>
      <p>Hi ${data.studentName},</p>
      <p>Your payment has been processed successfully. Your Canvas course is now unlocked!</p>
      <p><strong>Access Your Course:</strong></p>
      <p><a href="${canvasUrls[data.courseCode]}" style="background: #d4a92a; color: #1a3a5c; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 600;">Open Canvas Course →</a></p>
      <p>Login with your email: ${data.studentEmail}</p>
      <p>Questions? Reply to this email or contact codexlabsinstitute@gmail.com</p>
      <p>See you in class!</p>
    `
  });
}
```

**Webhook Setup in Stripe:**
1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://your-site.com/.netlify/functions/stripe-webhook`
3. Select event: `payment_intent.succeeded`
4. Copy webhook signing secret
5. Add to environment variables: `STRIPE_WEBHOOK_SECRET=whsec_...`

---

## 🚀 QUICK START GUIDE

### Option 1: Manual Process (Launch Immediately)

**Perfect for getting started!**

1. **Upload Files:**
   - `course-catalog.html`
   - `student-portal-with-enrollment.html`
   - `payment.html`

2. **Setup Formspree:**
   - Create enrollment form
   - Update form ID in course-catalog.html

3. **When Student Enrolls:**
   - You get Formspree notification
   - Send welcome email with payment link
   - Wait for payment

4. **When Payment Received:**
   - Get Stripe email notification
   - Add student to `enrolledStudents` object
   - Set `paid: true`
   - Add Canvas URL
   - Upload updated portal file
   - Manually enroll in Canvas
   - Send Canvas access email

**Time per student:** ~10-15 minutes

---

### Option 2: Semi-Automated (Better Scale)

**Good for 20-100 students**

1. **Setup above +**
   - Create Netlify/Vercel account
   - Deploy payment intent function
   - Students can pay immediately

2. **When Payment Received:**
   - Stripe webhook sends you email
   - You manually update portal file
   - You manually enroll in Canvas
   - Webhook sends Canvas access email to student

**Time per student:** ~5 minutes

---

### Option 3: Fully Automated (Best Scale)

**Best for 100+ students**

1. **Setup above +**
   - Setup database (Firebase/Supabase)
   - Portal reads from database
   - Webhook updates database
   - Canvas API integration
   - Automatic enrollment

2. **When Payment Received:**
   - Everything automatic
   - Student gets Canvas access immediately

**Time per student:** ~0 minutes (automatic)

---

## 📝 ENROLLMENT TRACKING SPREADSHEET

**Track enrollments manually until automated:**

| Student Name | Email | Course | Session | Payment Plan | Enrolled Date | Paid? | Amount | Canvas Added? |
|--------------|-------|--------|---------|--------------|---------------|-------|--------|---------------|
| John Doe | john@email.com | WEB101 | Sun 10am | Full | Jan 15 | ✓ | $297 | ✓ |
| Jane Smith | jane@email.com | PY101 | Sun 7pm | 3-pay | Jan 16 | ✗ | $197 | ✗ |

---

## ✅ LAUNCH CHECKLIST

### Before Launch:
- [ ] Upload course-catalog.html
- [ ] Upload student-portal-with-enrollment.html  
- [ ] Upload payment.html
- [ ] Create Formspree enrollment form
- [ ] Update Formspree form ID in course catalog
- [ ] Sign up for Stripe account
- [ ] Get Stripe publishable key
- [ ] Update Stripe key in payment.html
- [ ] Create welcome email template
- [ ] Create payment confirmation email template
- [ ] Set up Canvas courses
- [ ] Test enrollment flow yourself
- [ ] Test payment flow (use Stripe test cards)

### After First Enrollment:
- [ ] Receive Formspree notification
- [ ] Send welcome email
- [ ] Student makes payment
- [ ] Receive Stripe notification
- [ ] Add to enrolledStudents object
- [ ] Upload updated portal
- [ ] Enroll in Canvas
- [ ] Send Canvas access email

---

## 🎉 YOU'RE READY!

You now have a complete university-style enrollment system with:
- ✅ Course catalog with session selection
- ✅ Enrollment process
- ✅ Payment integration
- ✅ Student portal with dynamic states
- ✅ Email notifications
- ✅ Canvas integration

**Start with Option 1 (manual) and scale up as you grow!**

Questions? Email me back!
