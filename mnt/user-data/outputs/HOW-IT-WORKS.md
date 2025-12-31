# 🎓 HOW THE ENROLLMENT SYSTEM WORKS

## ✅ CORRECTED & SIMPLIFIED!

---

## 📦 THE FILES (Only 3!)

### 1. **student-portal.html** 
The ONE student portal (replaces the duplicate files)

### 2. **course-catalog.html**
INTERNAL catalog (requires login to view)

### 3. **payment.html**
Stripe payment page

---

## 🔄 THE 3 PORTAL STATES

### STATE 1: Not Enrolled
**Portal Shows:**
```
📖
Not Enrolled in a Program

Ready to start your coding journey? Browse our programs and enroll today!

[Enroll into a Program] ← Button links to course-catalog.html
```

---

### STATE 2: Enrolled But Not Paid
**Portal Shows:**
```
Full-Stack Web Development
WEB101
📅 Sundays 10:00 AM - 12:00 PM EST
💳 full

💳
Payment Required to Start Class
Complete your payment to unlock your course materials and begin learning.

$297.00

[Pay to Start Class] ← Button links to payment.html
```

---

### STATE 3: Enrolled AND Paid
**Portal Shows:**
```
Full-Stack Web Development
WEB101
📅 Sundays 10:00 AM - 12:00 PM EST
✓ Paid

🎓
Your Course is Ready!
Access your course materials, assignments, and live sessions in Canvas.

[Access Canvas Course →] ← Button opens Canvas
```

---

## 🎯 COMPLETE STUDENT JOURNEY

```
1. Student creates account (register.html)
   ↓
2. Student logs in → Student portal loads
   ↓
3. Portal shows: "Enroll into a Program" button
   ↓
4. Student clicks → course-catalog.html opens (INTERNAL - requires login)
   ↓
5. Student browses 4 programs, selects course + session time
   ↓
6. Student chooses payment plan (full/2-pay/3-pay/monthly)
   ↓
7. Student clicks "Enroll Now"
   ↓
8. Enrollment form submits to Formspree
   ↓
9. Success message: "Check email for payment instructions"
   ↓
10. YOU receive Formspree notification
    ↓
11. YOU add student to enrolledStudents object in portal
    ↓
12. YOU send welcome email with payment link
    ↓
13. Portal now shows: "Pay to Start Class" button + Balance
    ↓
14. Student clicks → payment.html
    ↓
15. Student enters card info, pays via Stripe
    ↓
16. YOU receive Stripe notification
    ↓
17. YOU update portal: paid: true, balance: 0
    ↓
18. YOU manually enroll student in Canvas
    ↓
19. YOU send Canvas access email
    ↓
20. Portal now shows: "Access Canvas Course" button
    ↓
21. Student clicks → Canvas opens
    ↓
22. STUDENT STARTS LEARNING! 🎉
```

---

## 💻 HOW TO MANAGE ENROLLMENTS

### Step 1: When Student Enrolls

**You receive Formspree email:**
```
Name: John Doe
Email: john@email.com
Course: WEB101 - Full-Stack Web Development
Session: Sundays 10:00 AM - 12:00 PM EST
Payment Plan: 3-pay
```

**Your action:**

1. Open `student-portal.html`
2. Find `enrolledStudents` object (line ~432)
3. Add student:

```javascript
const enrolledStudents = {
    'john@email.com': {
        courseCode: 'WEB101',
        courseName: 'Full-Stack Web Development',
        session: 'Sundays 10:00 AM - 12:00 PM EST',
        tuition: 297,
        paymentPlan: '3-pay',
        paid: false,
        balance: 297,
        canvasUrl: 'https://canvas.instructure.com/courses/12345'
    }
};
```

4. Save & upload file
5. Send welcome email with payment link

**John sees in portal:**
- His enrolled course
- "Pay to Start Class" button
- Balance: $297.00

---

### Step 2: When Student Pays

**You receive Stripe notification:**
```
Payment Received: $99.00
From: John Doe (john@email.com)
Course: WEB101
```

**Your action:**

1. Open `student-portal.html`
2. Find John's entry in `enrolledStudents`
3. Update:

```javascript
'john@email.com': {
    courseCode: 'WEB101',
    courseName: 'Full-Stack Web Development',
    session: 'Sundays 10:00 AM - 12:00 PM EST',
    tuition: 297,
    paymentPlan: '3-pay',
    paid: true,      // ✅ CHANGE TO TRUE
    balance: 0,      // ✅ SET TO 0 (or remaining balance if payment plan)
    canvasUrl: 'https://canvas.instructure.com/courses/12345'
}
```

4. Save & upload file
5. Manually enroll John in Canvas
6. Send Canvas access email

**John sees in portal:**
- His course with ✓ Paid status
- "Access Canvas Course" button
- Clicks button → Canvas opens

---

## 🔑 KEY DIFFERENCES FROM BEFORE

### ✅ FIXED:
- **ONE student portal** (not two!)
- **Course catalog is INTERNAL** (requires login)
- **Clear button labels:**
  - "Enroll into a Program" (not enrolled)
  - "Pay to Start Class" (enrolled, not paid)
  - "Access Canvas Course" (enrolled, paid)

### ❌ REMOVED:
- Duplicate portal files
- Public course catalog
- Confusing button names

---

## 🎯 THE 3 STATES IN CODE

### State 1: Not Enrolled
```javascript
if (!enrollment) {
    // Show "Enroll into a Program" button
}
```

### State 2: Enrolled, Not Paid
```javascript
else if (!enrollment.paid) {
    // Show "Pay to Start Class" button
    // Show balance amount
}
```

### State 3: Enrolled AND Paid
```javascript
else {
    // Show "Access Canvas Course" button
}
```

---

## 📝 QUICK COPY-PASTE TEMPLATE

When adding a new enrolled student:

```javascript
'EMAIL@email.com': {
    courseCode: 'WEB101',  // or IOS101, PY101, BUS101
    courseName: 'Full-Stack Web Development',
    session: 'Sundays 10:00 AM - 12:00 PM EST',
    tuition: 297,  // 297 for WEB/IOS, 197 for PY/BUS
    paymentPlan: 'full',  // or '2-pay', '3-pay', 'monthly'
    paid: false,
    balance: 297,  // Same as tuition initially
    canvasUrl: 'https://canvas.instructure.com/courses/COURSE_ID'
}
```

After they pay:
```javascript
paid: true,
balance: 0
```

---

## ✅ WHAT'S READY NOW

### Files:
- ✅ student-portal.html (ONE file, 3 states)
- ✅ course-catalog.html (INTERNAL, login required)
- ✅ payment.html (Stripe checkout)

### Portal States:
- ✅ State 1: "Enroll into a Program"
- ✅ State 2: "Pay to Start Class" + Balance
- ✅ State 3: "Access Canvas Course"

### Flow:
- ✅ Student creates account
- ✅ Student clicks "Enroll into a Program"
- ✅ Internal catalog requires login ✅
- ✅ Student selects course + session
- ✅ Student enrolls
- ✅ Portal updates to show payment needed
- ✅ Student pays
- ✅ Portal updates to show Canvas access
- ✅ Student accesses Canvas

---

## 🚀 TO LAUNCH:

1. Upload `student-portal.html`
2. Upload `course-catalog.html` 
3. Upload `payment.html`
4. Create Formspree enrollment form
5. Update form ID in course-catalog.html
6. Add Stripe key to payment.html
7. TEST the 3 states yourself!

**That's it! Simple, clear, working!** 🎉

---

## 🆘 TESTING

### Test State 1 (Not Enrolled):
- Create account
- Log in
- Should see: "Enroll into a Program" button

### Test State 2 (Enrolled, Not Paid):
Add yourself to enrolledStudents:
```javascript
'youremail@gmail.com': {
    courseCode: 'WEB101',
    courseName: 'Full-Stack Web Development',
    session: 'Sundays 10:00 AM - 12:00 PM EST',
    tuition: 297,
    paymentPlan: 'full',
    paid: false,  // Keep FALSE
    balance: 297,
    canvasUrl: 'https://canvas.com/test'
}
```
Portal should show: "Pay to Start Class" button

### Test State 3 (Enrolled, Paid):
Change your entry:
```javascript
paid: true,  // Change to TRUE
balance: 0
```
Portal should show: "Access Canvas Course" button

---

## 🎊 YOU'RE ALL SET!

Three files. Three states. One clear flow.

**Much simpler than before!** 🚀
