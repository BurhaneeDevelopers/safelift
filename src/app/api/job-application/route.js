import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const applicationData = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      experience: formData.get('experience'),
      currentLocation: formData.get('currentLocation'),
      expectedSalary: formData.get('expectedSalary'),
      noticePeriod: formData.get('noticePeriod'),
      coverLetter: formData.get('coverLetter'),
      jobTitle: formData.get('jobTitle'),
      jobId: formData.get('jobId'),
      department: formData.get('department'),
      location: formData.get('location'),
      resume: formData.get('resume'), // File object
    };

    // Validate required fields
    if (!applicationData.fullName || !applicationData.email || !applicationData.phone || !applicationData.resume) {
      return NextResponse.json({
        success: false,
        message: 'Please fill in all required fields'
      }, { status: 400 });
    }

    // Convert resume file to buffer for email attachment
    const resumeBuffer = await applicationData.resume.arrayBuffer();
    const resumeAttachment = {
      filename: applicationData.resume.name,
      content: Buffer.from(resumeBuffer),
      contentType: applicationData.resume.type
    };

    // Email content for HR
    const hrEmailContent = `
      <h2>New Job Application Received</h2>
      <p><strong>Position:</strong> ${applicationData.jobTitle}</p>
      <p><strong>Department:</strong> ${applicationData.department}</p>
      <p><strong>Location:</strong> ${applicationData.location}</p>
      
      <h3>Candidate Details:</h3>
      <p><strong>Name:</strong> ${applicationData.fullName}</p>
      <p><strong>Email:</strong> ${applicationData.email}</p>
      <p><strong>Phone:</strong> ${applicationData.phone}</p>
      <p><strong>Experience:</strong> ${applicationData.experience}</p>
      <p><strong>Current Location:</strong> ${applicationData.currentLocation}</p>
      <p><strong>Expected Salary:</strong> ${applicationData.expectedSalary || 'Not specified'}</p>
      <p><strong>Notice Period:</strong> ${applicationData.noticePeriod || 'Not specified'}</p>
      
      ${applicationData.coverLetter ? `<h3>Cover Letter:</h3><p>${applicationData.coverLetter}</p>` : ''}
      
      <p><em>Resume is attached to this email.</em></p>
    `;

    // Email content for candidate confirmation
    const candidateEmailContent = `
      <h2>Thank you for your application!</h2>
      <p>Dear ${applicationData.fullName},</p>
      
      <p>Thank you for applying for the <strong>${applicationData.jobTitle}</strong> position at SafeLift. We have received your application and our HR team will review it shortly.</p>
      
      <p><strong>Application Summary:</strong></p>
      <ul>
        <li>Position: ${applicationData.jobTitle}</li>
        <li>Department: ${applicationData.department}</li>
        <li>Location: ${applicationData.location}</li>
        <li>Application ID: APP-${Date.now()}</li>
      </ul>
      
      <p>We will contact you within the next few days if your profile matches our requirements. If you have any questions, please feel free to reach out to us.</p>
      
      <p>Best regards,<br>SafeLift HR Team</p>
    `;

    // Send email to HR
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Job Application - ${applicationData.jobTitle} - ${applicationData.fullName}`,
      html: hrEmailContent,
      attachments: [resumeAttachment]
    });

    // Send confirmation email to candidate
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: applicationData.email,
      subject: `Application Received - ${applicationData.jobTitle} Position at SafeLift`,
      html: candidateEmailContent
    });

    console.log('Job Application Processed:', {
      ...applicationData,
      resume: applicationData.resume ? `${applicationData.resume.name} (${applicationData.resume.size} bytes)` : null
    });

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId: `APP-${Date.now()}`
    });

  } catch (error) {
    console.error('Error processing job application:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Failed to submit application. Please try again.'
    }, { status: 500 });
  }
}