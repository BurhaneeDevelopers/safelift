"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Body } from "../textComponents/Body";

const JobApplicationForm = ({ job }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    currentLocation: "",
    expectedSalary: "",
    noticePeriod: "",
    coverLetter: "",
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert("Please select a file smaller than 5MB");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== "") {
          submitData.append(key, formData[key]);
        }
      });
      
      // Add job details
      submitData.append("jobTitle", job.title);
      submitData.append("jobId", job._id);
      submitData.append("department", job.department);
      submitData.append("location", job.location);

      // Submit to API endpoint
      const response = await fetch('/api/job-application', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          currentLocation: "",
          expectedSalary: "",
          noticePeriod: "",
          coverLetter: "",
          resume: null,
        });
        
        // Reset file input
        const fileInput = document.getElementById("resume");
        if (fileInput) fileInput.value = "";
      } else {
        throw new Error(result.message || 'Failed to submit application');
      }
      
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card data-aos="fade-up">
      <CardHeader>
        <CardTitle className="text-xl text-[#008dd2]">Apply for this Position</CardTitle>
        <Body className="text-gray-600">
          Fill out the form below to submit your application
        </Body>
      </CardHeader>
      <CardContent>
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <Body className="text-green-800">
              Thank you! Your application has been submitted successfully. We'll review your application and get back to you soon.
            </Body>
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <Body className="text-red-800">
              There was an error submitting your application. Please try again or contact us directly.
            </Body>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="experience">Total Experience *</Label>
            <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({...prev, experience: value}))}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fresher">Fresher</SelectItem>
                <SelectItem value="0-1">0-1 years</SelectItem>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5-8">5-8 years</SelectItem>
                <SelectItem value="8-12">8-12 years</SelectItem>
                <SelectItem value="12+">12+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="currentLocation">Current Location *</Label>
            <Input
              id="currentLocation"
              name="currentLocation"
              type="text"
              value={formData.currentLocation}
              onChange={handleInputChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="expectedSalary">Expected Salary</Label>
            <Input
              id="expectedSalary"
              name="expectedSalary"
              type="text"
              value={formData.expectedSalary}
              onChange={handleInputChange}
              placeholder="e.g., ₹5-8 LPA"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="noticePeriod">Notice Period</Label>
            <Select value={formData.noticePeriod} onValueChange={(value) => setFormData(prev => ({...prev, noticePeriod: value}))}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select notice period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Immediate</SelectItem>
                <SelectItem value="15-days">15 days</SelectItem>
                <SelectItem value="1-month">1 month</SelectItem>
                <SelectItem value="2-months">2 months</SelectItem>
                <SelectItem value="3-months">3 months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="resume">Resume/CV *</Label>
            <Input
              id="resume"
              name="resume"
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
              className="mt-1"
            />
            <Body className="text-xs text-gray-500 mt-1">
              Accepted formats: PDF, DOC, DOCX (Max 5MB)
            </Body>
          </div>

          <div>
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              rows={4}
              className="mt-1"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#008dd2] hover:bg-[#007bb8] text-white"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <Body className="text-xs text-gray-500">
            By submitting this application, you agree to our privacy policy and terms of service. 
            We will only use your information for recruitment purposes.
          </Body>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobApplicationForm;