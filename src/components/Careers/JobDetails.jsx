import { PortableText } from "@portabletext/react";
import Container from "../constants/Container";
import { Heading } from "../textComponents/Heading";
import { Body } from "../textComponents/Body";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import JobApplicationForm from "./JobApplicationForm";

const JobDetails = ({ job }) => {
  const getDepartmentLabel = (dept) => {
    const labels = {
      'engineering': 'Engineering',
      'sales-marketing': 'Sales & Marketing',
      'operations': 'Operations',
      'hr': 'Human Resources',
      'finance': 'Finance',
      'qa': 'Quality Assurance',
      'manufacturing': 'Manufacturing',
      'rd': 'Research & Development',
    };
    return labels[dept] || dept;
  };

  const getEmploymentTypeLabel = (type) => {
    const labels = {
      'full-time': 'Full-time',
      'part-time': 'Part-time',
      'contract': 'Contract',
      'internship': 'Internship',
    };
    return labels[type] || type;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const portableTextComponents = {
    block: {
      normal: ({ children }) => <Body className="mb-4">{children}</Body>,
      h1: ({ children }) => <Heading as="h1" className="mb-4">{children}</Heading>,
      h2: ({ children }) => <Heading as="h2" className="mb-3">{children}</Heading>,
      h3: ({ children }) => <h3 className="text-lg font-semibold mb-2">{children}</h3>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="text-gray-700">{children}</li>,
      number: ({ children }) => <li className="text-gray-700">{children}</li>,
    },
  };

  return (
    <Container>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Job Overview */}
            <Card className="mb-8" data-aos="fade-up">
              <CardHeader>
                <CardTitle className="text-2xl text-[#008dd2]">Job Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Body className="font-semibold text-gray-800">Department</Body>
                    <Badge variant="secondary" className="mt-1">
                      {getDepartmentLabel(job.department)}
                    </Badge>
                  </div>
                  <div>
                    <Body className="font-semibold text-gray-800">Location</Body>
                    <Badge variant="outline" className="mt-1">{job.location}</Badge>
                  </div>
                  <div>
                    <Body className="font-semibold text-gray-800">Employment Type</Body>
                    <Badge variant="outline" className="mt-1">
                      {getEmploymentTypeLabel(job.employmentType)}
                    </Badge>
                  </div>
                  <div>
                    <Body className="font-semibold text-gray-800">Experience</Body>
                    <Body className="text-gray-600 mt-1">{job.experience}</Body>
                  </div>
                  {job.salary && (
                    <div>
                      <Body className="font-semibold text-gray-800">Salary</Body>
                      <Body className="text-gray-600 mt-1">{job.salary}</Body>
                    </div>
                  )}
                  <div>
                    <Body className="font-semibold text-gray-800">Posted Date</Body>
                    <Body className="text-gray-600 mt-1">{formatDate(job.postedDate)}</Body>
                  </div>
                </div>
                {job.applicationDeadline && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <Body className="text-yellow-800">
                      <strong>Application Deadline:</strong> {formatDate(job.applicationDeadline)}
                    </Body>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card className="mb-8" data-aos="fade-up">
              <CardHeader>
                <CardTitle className="text-xl text-[#008dd2]">Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  <PortableText value={job.description} components={portableTextComponents} />
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="mb-8" data-aos="fade-up">
              <CardHeader>
                <CardTitle className="text-xl text-[#008dd2]">Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  <PortableText value={job.requirements} components={portableTextComponents} />
                </div>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            {job.responsibilities && (
              <Card className="mb-8" data-aos="fade-up">
                <CardHeader>
                  <CardTitle className="text-xl text-[#008dd2]">Key Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    <PortableText value={job.responsibilities} components={portableTextComponents} />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Benefits */}
            {job.benefits && (
              <Card className="mb-8" data-aos="fade-up">
                <CardHeader>
                  <CardTitle className="text-xl text-[#008dd2]">Benefits & Perks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    <PortableText value={job.benefits} components={portableTextComponents} />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar - Application Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <JobApplicationForm job={job} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default JobDetails;