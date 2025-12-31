# 🎯 QUICK REFERENCE: Managing Student Enrollments

## 📋 HOW TO ADD AN ENROLLED STUDENT

### When a Student Enrolls:

1. **You receive Formspree email with:**
   - Student name
   - Student email
   - Course code
   - Session time
   - Payment plan

2. **Open:** `student-portal-with-enrollment.html`

3. **Find the `enrolledStudents` object** (around line 457):
   ```javascript
   const enrolledStudents = {
       // Add students here
   };
   ```

4. **Add the student:**
   ```javascript
   const enrolledStudents = {
       'student@email.com': {
           courseCode: 'WEB101',
           courseName: 'Full-Stack Web Development',
           session: 'Sundays 10:00 AM - 12:00 PM EST',
           tuition: 297,
           paymentPlan: 'full',  // or '2-pay', '3-pay', 'monthly'
           paid: false,           // Change to true when paid
           balance: 297,          // Update as payments are made
           canvasUrl: 'https://canvas.instructure.com/courses/YOUR_COURSE_ID'
       }
   };
   ```

5. **Save and upload** the file

6. **Student will see:**
   - Enrolled course in portal
   - Yellow payment alert
   - "Pay Now" button

---

## 💳 WHEN STUDENT PAYS

### After Stripe Payment Notification:

1. **Open:** `student-portal-with-enrollment.html`

2. **Find the student** in `enrolledStudents` object

3. **Update their entry:**
   ```javascript
   'student@email.com': {
       courseCode: 'WEB101',
       courseName: 'Full-Stack Web Development',
       session: 'Sundays 10:00 AM - 12:00 PM EST',
       tuition: 297,
       paymentPlan: 'full',
       paid: true,          // ✅ CHANGE THIS
       balance: 0,          // ✅ UPDATE THIS
       canvasUrl: 'https://canvas.instructure.com/courses/12345'
   }
   ```

4. **Save and upload**

5. **Student will see:**
   - Payment alert disappears
   - "Access Canvas" button appears
   - Can click to access course

---

## 📚 COURSE CODES & CANVAS URLS

### Your Courses:

```javascript
'WEB101': {
    name: 'Full-Stack Web Development',
    tuition: 297,
    canvasUrl: 'https://canvas.instructure.com/courses/YOUR_WEB101_ID'
}

'IOS101': {
    name: 'iOS App Development',
    tuition: 297,
    canvasUrl: 'https://canvas.instructure.com/courses/YOUR_IOS101_ID'
}

'PY101': {
    name: 'Python & Automation',
    tuition: 197,
    canvasUrl: 'https://canvas.instructure.com/courses/YOUR_PY101_ID'
}

'BUS101': {
    name: 'Tech Startup Foundations',
    tuition: 197,
    canvasUrl: 'https://canvas.instructure.com/courses/YOUR_BUS101_ID'
}
```

---

## 📝 PAYMENT PLAN EXAMPLES

### Full Payment:
```javascript
paymentPlan: 'full',
paid: true,        // After one payment
balance: 0
```

### 2-Pay Plan ($297 course):
```javascript
paymentPlan: '2-pay',
paid: false,       // After first payment
balance: 148.50    // Second payment due
```
After second payment:
```javascript
paid: true,
balance: 0
```

### 3-Pay Plan ($297 course):
```javascript
paymentPlan: '3-pay',
paid: false,       // After first payment
balance: 198       // Two payments remaining
```

### Monthly Plan:
```javascript
paymentPlan: 'monthly',
paid: false,       // Until fully paid
balance: 237       // Update each month
```

---

## 🔄 COMPLETE EXAMPLE WORKFLOW

### Scenario: Jane Smith enrolls in WEB101

**Step 1: Enrollment (You receive email)**
```
From: Formspree
Subject: New Enrollment

Name: Jane Smith
Email: jane@email.com
Course: WEB101 - Full-Stack Web Development
Session: Sundays 10:00 AM - 12:00 PM EST
Payment Plan: 3-pay
```

**Step 2: Add to Portal**
Open `student-portal-with-enrollment.html`, add:
```javascript
const enrolledStudents = {
    'jane@email.com': {
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
Upload file.

**Step 3: Jane Sees in Portal**
- Enrolled course shown
- Yellow alert: "Payment Required"
- Balance: $297
- "Pay Now" button

**Step 4: Jane Pays First Installment ($99)**
You receive Stripe email:
```
Payment received: $99
From: Jane Smith (jane@email.com)
Course: WEB101
```

**Step 5: Update Portal** 
```javascript
'jane@email.com': {
    courseCode: 'WEB101',
    courseName: 'Full-Stack Web Development',
    session: 'Sundays 10:00 AM - 12:00 PM EST',
    tuition: 297,
    paymentPlan: '3-pay',
    paid: false,          // Still false (not fully paid)
    balance: 198,         // Updated ($297 - $99)
    canvasUrl: 'https://canvas.instructure.com/courses/12345'
}
```

**Step 6: Enroll in Canvas**
- Add Jane to Canvas course
- Send Canvas login email

**Step 7: Jane Sees Updated Portal**
- Balance now shows $198
- Still shows "Pay Now" button (for next payment)

**Step 8: Jane Pays Second Installment ($99)**
Update portal:
```javascript
paid: false,
balance: 99  // $198 - $99
```

**Step 9: Jane Pays Final Installment ($99)**
Update portal:
```javascript
paid: true,   // ✅ Fully paid!
balance: 0
```

**Step 10: Jane Sees Final Portal State**
- Payment alert gone
- "Access Canvas" button
- Can access course materials

---

## 🎯 QUICK COPY-PASTE TEMPLATES

### New Full-Pay Student:
```javascript
'EMAIL_HERE': {
    courseCode: 'COURSE_CODE_HERE',
    courseName: 'COURSE_NAME_HERE',
    session: 'SESSION_TIME_HERE',
    tuition: AMOUNT_HERE,
    paymentPlan: 'full',
    paid: false,
    balance: AMOUNT_HERE,
    canvasUrl: 'CANVAS_URL_HERE'
}
```

### New 3-Pay Student:
```javascript
'EMAIL_HERE': {
    courseCode: 'COURSE_CODE_HERE',
    courseName: 'COURSE_NAME_HERE',
    session: 'SESSION_TIME_HERE',
    tuition: AMOUNT_HERE,
    paymentPlan: '3-pay',
    paid: false,
    balance: AMOUNT_HERE,
    canvasUrl: 'CANVAS_URL_HERE'
}
```

### After Payment Received:
1. Find student by email
2. Update `balance` (subtract payment amount)
3. If balance = 0, set `paid: true`
4. Save and upload

---

## ⏱️ TIME ESTIMATES

### Per Student (Manual Process):
- Receive enrollment: ~1 min (automatic)
- Add to portal: ~2 min
- Send welcome email: ~2 min
- Receive payment: ~1 min (automatic)
- Update portal after payment: ~2 min
- Enroll in Canvas: ~3 min
- Send Canvas email: ~2 min

**Total: ~13 minutes per student**

### Batch Processing (10 students):
- Add all enrollments at once: ~20 min
- Process all payments: ~25 min
- Canvas enrollments: ~30 min

**Total: ~75 minutes for 10 students**

---

## 💡 PRO TIPS

### Tip 1: Use Comments
```javascript
const enrolledStudents = {
    // Spring 2026 Cohort
    // WEB101 Students
    'student1@email.com': { ... },
    'student2@email.com': { ... },
    
    // IOS101 Students
    'student3@email.com': { ... }
};
```

### Tip 2: Keep a Spreadsheet
Track separately in Google Sheets:
- Email, Name, Course, Payment Status, Canvas Added
- Update both portal file AND spreadsheet

### Tip 3: Test First
Add yourself as a test student:
```javascript
'youremail@gmail.com': {
    courseCode: 'WEB101',
    courseName: 'Full-Stack Web Development',
    session: 'Sundays 10:00 AM - 12:00 PM EST',
    tuition: 297,
    paymentPlan: 'full',
    paid: true,
    balance: 0,
    canvasUrl: 'https://canvas.instructure.com/courses/12345'
}
```
View portal to see how it looks!

### Tip 4: Backup Before Editing
Always download current version before making changes!

---

## 🆘 TROUBLESHOOTING

**Problem:** Student doesn't see enrollment
- Check: Is their email spelled exactly right?
- Check: Did you upload the updated file?
- Check: Did you save before uploading?

**Problem:** Payment alert shows wrong amount
- Check: Balance value is correct
- Check: Comma instead of period (use 297, not 297.00)

**Problem:** Access Canvas button doesn't work
- Check: Canvas URL is correct
- Check: Student is enrolled in Canvas
- Check: `paid: true` is set

**Problem:** Multiple students, portal only shows one
- Check: Commas between student entries
- Check: All curly braces match { }

---

## ✅ DAILY CHECKLIST

### Morning:
- [ ] Check Formspree for new enrollments
- [ ] Add new students to portal
- [ ] Send welcome emails

### Afternoon:
- [ ] Check Stripe for payments
- [ ] Update portal for paid students
- [ ] Enroll in Canvas
- [ ] Send Canvas access emails

### Evening:
- [ ] Update tracking spreadsheet
- [ ] Backup portal file
- [ ] Respond to student questions

---

## 🎉 YOU'VE GOT THIS!

With this system, you can easily manage:
- 5-10 students: ~1 hour per week
- 20-30 students: ~3 hours per week
- 50+ students: Consider automation

Start small, scale as you grow!
