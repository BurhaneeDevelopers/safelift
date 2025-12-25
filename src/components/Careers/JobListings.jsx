"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heading } from "../textComponents/Heading";
import { Body } from "../textComponents/Body";
import client from "@/utils/sanity";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    department: "all",
    location: "all",
    employmentType: "all",
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const query = `*[_type == "jobOpening" && isActive == true] | order(postedDate desc) {
          _id,
          title,
          slug,
          department,
          location,
          employmentType,
          experience,
          salary,
          postedDate,
          applicationDeadline
        }`;
        
        const jobData = await client.fetch(query);
        setJobs(jobData);
        setFilteredJobs(jobData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    let filtered = jobs;

    if (filters.department !== "all") {
      filtered = filtered.filter(job => job.department === filters.department);
    }
    if (filters.location !== "all") {
      filtered = filtered.filter(job => job.location.toLowerCase().includes(filters.location.toLowerCase()));
    }
    if (filters.employmentType !== "all") {
      filtered = filtered.filter(job => job.employmentType === filters.employmentType);
    }

    setFilteredJobs(filtered);
  }, [filters, jobs]);

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
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#008dd2] mx-auto"></div>
        <Body className="mt-4 text-gray-600">Loading job openings...</Body>
      </div>
    );
  }

  return (
    <div data-aos="fade-up">
      <Heading className="text-center mb-8">Current Job Openings</Heading>
      
      {/* Filters */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Department</label>
            <Select value={filters.department} onValueChange={(value) => setFilters({...filters, department: value})}>
              <SelectTrigger>
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="sales-marketing">Sales & Marketing</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
                <SelectItem value="hr">Human Resources</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="qa">Quality Assurance</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="rd">Research & Development</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="kolkata">Kolkata</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="howrah">Howrah</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Employment Type</label>
            <Select value={filters.employmentType} onValueChange={(value) => setFilters({...filters, employmentType: value})}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Job Cards */}
      {filteredJobs.length === 0 ? (
        <div className="text-center py-12">
          <Body className="text-gray-600">No job openings match your current filters.</Body>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Card key={job._id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-[#008dd2] mb-2">{job.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">{getDepartmentLabel(job.department)}</Badge>
                      <Badge variant="outline">{job.location}</Badge>
                      <Badge variant="outline">{getEmploymentTypeLabel(job.employmentType)}</Badge>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    Posted: {formatDate(job.postedDate)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <Body className="text-gray-600 mb-1">
                      <strong>Experience:</strong> {job.experience}
                    </Body>
                    {job.salary && (
                      <Body className="text-gray-600">
                        <strong>Salary:</strong> {job.salary}
                      </Body>
                    )}
                  </div>
                  <Link href={`/careers/${job.slug.current}`}>
                    <Button className="bg-[#008dd2] hover:bg-[#007bb8] text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListings;