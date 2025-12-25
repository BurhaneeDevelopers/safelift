export default {
  name: 'jobOpening',
  type: 'document',
  title: 'Job Openings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Job Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 100),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'department',
      type: 'string',
      title: 'Department',
      options: {
        list: [
          { title: 'Engineering', value: 'engineering' },
          { title: 'Sales & Marketing', value: 'sales-marketing' },
          { title: 'Operations', value: 'operations' },
          { title: 'Human Resources', value: 'hr' },
          { title: 'Finance', value: 'finance' },
          { title: 'Quality Assurance', value: 'qa' },
          { title: 'Manufacturing', value: 'manufacturing' },
          { title: 'Research & Development', value: 'rd' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'employmentType',
      type: 'string',
      title: 'Employment Type',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
          { title: 'Internship', value: 'internship' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'experience',
      type: 'string',
      title: 'Experience Required',
      description: 'e.g., "2-5 years", "Fresher", "5+ years"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'salary',
      type: 'string',
      title: 'Salary Range',
      description: 'e.g., "₹5-8 LPA", "Competitive", "As per industry standards"',
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'responsibilities',
      title: 'Key Responsibilities',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'benefits',
      title: 'Benefits & Perks',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Is Active',
      description: 'Toggle to show/hide this job opening',
      initialValue: true,
    },
    {
      name: 'postedDate',
      type: 'datetime',
      title: 'Posted Date',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'applicationDeadline',
      type: 'date',
      title: 'Application Deadline',
    },
    {
      name: 'contactEmail',
      type: 'string',
      title: 'Contact Email',
      description: 'Email for job applications (optional, defaults to info@safelift.in)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      department: 'department',
      location: 'location',
      isActive: 'isActive',
    },
    prepare({ title, department, location, isActive }) {
      return {
        title: title,
        subtitle: `${department} • ${location} ${isActive ? '• Active' : '• Inactive'}`,
        media: isActive ? '✅' : '❌',
      };
    },
  },
  orderings: [
    {
      title: 'Posted Date, New',
      name: 'postedDateDesc',
      by: [{ field: 'postedDate', direction: 'desc' }],
    },
    {
      title: 'Department',
      name: 'department',
      by: [{ field: 'department', direction: 'asc' }],
    },
  ],
}